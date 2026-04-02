import { cn } from "./utils"
import { IconLoader2 } from "@tabler/icons-react"
import type { MouseEvent, FocusEvent, ReactNode, ReactHTMLElement } from "react"
import React from "react"
import { cva, type VariantProps } from "class-variance-authority"

const variants = cva(
	"flex items-center justify-center leading-none text-center truncate select-none hover:cursor-pointer disabled:hover:cursor-not-allowed transition duration-250 ease",
	{
		variants: {
			variant: {
				primary: "bg-primary disabled:bg-primary/60 not-disabled:hover:bg-primary/85 not-disabled:active:bg-primary/80 text-background",
				secondary: "bg-secondary not-disabled:hover:bg-secondary/75 focus-visible:inset-ring focus-visible:inset-ring-primary/50",
				destructive: "bg-red/15 not-disabled:hover:bg-red/20 text-red",
				outline: cn(
					"inset-ring inset-ring-border",
					"not-disabled:hover:bg-secondary active:bg-secondary focus-visible:inset-ring-muted-foreground disabled:bg-background disabled:text-muted-foreground"
				),
				ghost: "not-disabled:hover:bg-secondary disabled:text-muted-foreground focus-visible:inset-ring-primary/50",
				link: "text-primary/75 not-disabled:hover:underline not-disabled:hover:text-primary",
				none: ""
			},
			size: {
				sm: cn("h-8 px-4 gap-2 text-sm", "[&>svg]:size-4"),
				md: cn("h-9 px-4.5 gap-2.25 text-sm font-medium", "[&>svg]:size-4.5"),
				lg: cn("h-11 px-5 gap-2 text-base font-medium", "[&>svg]:size-4"),
				xl: cn("h-12 px-6 gap-2 text-base font-semibold", "[&>svg]:size-4"),
				icon: "size-12 p-2 text-sm font-medium",
				"icon-xs": "size-6 p-2 text-sm",
				"icon-sm": "size-8 p-2 text-sm",
				"icon-md": "size-9 p-2.25 text-sm",
				none: "overflow-visible"
			},
			shape: {
				square: "",
				rounded: "",
				pill: "rounded-full"
			}
		},
		defaultVariants: {
			variant: "primary",
			size: "xl",
			shape: "pill"
		},
		compoundVariants: [
			{ shape: "rounded", size: "sm", class: "rounded-lg px-3" },
			{ shape: "rounded", size: "md", class: "rounded-[9px] px-3" },
			{ shape: "rounded", size: "lg", class: "rounded-[14px] px-3" },
			{ shape: "rounded", size: "xl", class: "rounded-2xl px-4" },
			{ shape: "rounded", size: "icon-sm", class: "rounded-lg" },
			{ shape: "rounded", size: "icon-md", class: "rounded-[9px]" },
			{ shape: "rounded", size: "icon", class: "rounded-2xl" }
		]
	}
)

const _size = {
	// "[&>svg:first-child]:-ml-1.5 [&>svg:first-child]:mr-1 [&>svg:last-child]:-mr-1.5 [&>svg:last-child]:mr-1",
	// sm_: "h-8 px-2.5 rounded-lg text-sm font-medium [&>svg]:size-4",
	// md_: cn("h-9 px-3.5 gap-x-1 text-sm rounded-xl font-medium", "[&>svg]:size-4"),
	// lg_: cn("h-11 px-4 gap-x-2 text-base rounded-2xl font-medium", "[&>svg]:size-5"),
	// xl_: cn("h-12 px-4 gap-x-2 text-base rounded-2xl font-medium", "[&>svg]:size-4 [&>svg]:scale-125"),
	// iconr: cn("p-2 rounded-2xl text-sm font-medium"),
}
const _variant = {
	// jnsa: "bg-(--purple) hover:bg-(--purple)/90 text-white",
	// outline_red: "inset-ring inset-ring-(--red)/50 hover:bg-(--red)/5 text-(--red)",
	// shadcn: "rounded-xl bg-(--primary) hover:bg-(--primary)/85 text-white dark:text-black",
} as const
export interface ButtonProps extends VariantProps<typeof variants> {
	/** @android @ios @web */
	disabled?: boolean // state
	/** @android @ios @web */
	loading?: boolean // state
	/** @android @ios @web */
	label?: string
	/** @android @ios @web */
	title?: string
	/** @android @ios @web */
	children?: ReactNode
	/** @android @ios @web */
	asChild?: boolean
	/** @android @ios */
	haptics?: boolean
	/** @android @ios */
	full?: boolean // utility
	/** @android @ios */
	rounded?: number // utility
	/** @web */
	id?: string
	/** @web */
	type?: "button" | "reset" | "submit"
	/** @web */
	className?: string
	/** @android @ios @web */
	onPress?(event: MouseEvent): void | Promise<void>
	/** @android @ios @web */
	onPressIn?(event: MouseEvent): void | Promise<void>
	/** @android @ios @web */
	onPressOut?(event: MouseEvent): void | Promise<void>
	/** @web */
	onMouseEnter?(event: MouseEvent): void | Promise<void>
	/** @web */
	onMouseLeave?(event: MouseEvent): void | Promise<void>
	/** @web */
	onHover?(event: MouseEvent): void | Promise<void>
	/** @web */
	onFocus?(event: FocusEvent): void | Promise<void>
	/** @web */
	onBlur?(event: FocusEvent): void | Promise<void>
	// tone?: "default" | "success" | "error" | "warning"
	// elevation?: "none" | "xs" | "sm" | "md" | "lg" | "xl"
}
export default function Button(props: ButtonProps) {
	const className = variants({
		variant: props.variant,
		size: props.size,
		shape: props.shape,
		className: props.className
	})

	if (props.asChild) {
		const children = props.children as ReactHTMLElement<HTMLElement>
		return React.cloneElement(children, {
			type: props.type,
			role: "button",
			disabled: props.disabled,
			"aria-label": props.label,
			onClick: props.onPress,
			onMouseDown: props.onPressIn,
			onMouseUp: props.onPressOut,
			onMouseEnter: props.onMouseEnter,
			onMouseLeave: props.onMouseLeave,
			onMouseOver: props.onHover,
			onFocus: props.onFocus,
			onBlur: props.onBlur,
			id: props.id,
			className: cn(className, children.props.className)
		})
	}

	return (
		<button
			type={props.type ?? "button"}
			disabled={props.loading ? true : props.disabled}
			aria-label={props.label}
			onClick={props.onPress}
			onMouseDown={props.onPressIn}
			onMouseUp={props.onPressOut}
			onMouseEnter={props.onMouseEnter}
			onMouseLeave={props.onMouseLeave}
			onMouseOver={props.onHover}
			onFocus={props.onFocus}
			onBlur={props.onBlur}
			id={props.id}
			className={cn(className)}
		>
			{props.loading ? (
				<>
					{props.title || props.children}
					<IconLoader2 className="animate-spin" />
				</>
			) : (
				props.title || props.children
			)}
		</button>
	)
}
