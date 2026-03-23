import { cn } from "./utils"
import { IconLoader2 } from "@tabler/icons-react"
import type { MouseEvent, FocusEvent, ReactNode, ReactHTMLElement } from "react"
import React from "react"
import type { Variant, Shape } from "./globals"

const size = {
	sm: cn("h-8 px-4 gap-2 text-sm", "[&>svg]:size-4"),
	md: cn("h-9 px-4.5 gap-2.25 text-sm font-medium", "[&>svg]:size-4.5"),
	lg: cn("h-11 px-5 gap-2 text-base font-medium", "[&>svg]:size-4"),
	xl: cn("h-12 px-6 gap-2 text-base font-semibold", "[&>svg]:size-4"),
	"icon-sm": "size-8 p-2 text-sm",
	"icon-md": "size-9 p-2.25 text-sm",
	icon: "h-12 p-2 text-sm font-medium",
	none: "overflow-visible",
	// "[&>svg:first-child]:-ml-1.5 [&>svg:first-child]:mr-1 [&>svg:last-child]:-mr-1.5 [&>svg:last-child]:mr-1",
	// sm_: "h-8 px-2.5 rounded-lg text-sm font-medium [&>svg]:size-4",
	// md_: cn("h-9 px-3.5 gap-x-1 text-sm rounded-xl font-medium", "[&>svg]:size-4"),
	// lg_: cn("h-11 px-4 gap-x-2 text-base rounded-2xl font-medium", "[&>svg]:size-5"),
	// xl_: cn("h-12 px-4 gap-x-2 text-base rounded-2xl font-medium", "[&>svg]:size-4 [&>svg]:scale-125"),
	// iconr: cn("p-2 rounded-2xl text-sm font-medium"),
}
const variant: Record<Variant, string> = {
	primary: "bg-primary disabled:bg-primary/60 hover:bg-primary/85 active:bg-primary/80 text-background",
	secondary: "bg-secondary hover:bg-secondary/75",
	destructive: "bg-red/15 hover:bg-red/20 text-red",
	outline: cn(
		"inset-ring inset-ring-border",
		"hover:bg-secondary active:bg-secondary focus-visible:inset-ring-muted-foreground disabled:bg-background disabled:text-muted-foreground",
	),
	ghost: "hover:bg-secondary disabled:text-muted-foreground",
	link: "text-primary hover:underline",
	none: "",
	// jnsa: "bg-(--purple) hover:bg-(--purple)/90 text-white",
	// outline_red: "inset-ring inset-ring-(--red)/50 hover:bg-(--red)/5 text-(--red)",
	// shadcn: "rounded-xl bg-(--primary) hover:bg-(--primary)/85 text-white dark:text-black",
} as const
const shape: Record<Shape, Record<keyof typeof size, string>> = {
	square: {
		sm: "rounded-none",
		md: "rounded-none",
		lg: "rounded-none",
		xl: "rounded-none",
		"icon-sm": "rounded-none",
        "icon-md": "rounded-none",
		icon: "rounded-none",
		none: "",
	},
	rounded: {
		sm: "rounded-lg px-3",
		md: "rounded-[9px] px-3",
		lg: "rounded-[14px] px-3",
		xl: "rounded-2xl px-4",
		"icon-sm": "rounded-lg",
        "icon-md": "rounded-[9px]",
		icon: "rounded-2xl",
		none: "",
	},
	pill: {
		sm: "rounded-full",
		md: "rounded-full",
		lg: "rounded-full",
		xl: "rounded-full",
		"icon-sm": "rounded-full",
        "icon-md": "rounded-full",
		icon: "rounded-full",
		none: "",
	},
}
export interface ButtonProps {
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
	/** @android @ios @web */
	variant?: Variant
	/** @android @ios @web */
	size?: keyof typeof size
	/** @android @ios @web */
	shape?: Shape
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
export default function Button(props: Readonly<ButtonProps>) {
	const className = cn(
		"flex items-center justify-center leading-none text-center truncate",
		"select-none hover:cursor-pointer disabled:hover:cursor-not-allowed",
		"transition duration-250 ease",
		size[props.size ?? "xl"],
		variant[props.variant ?? "primary"],
		shape[props.shape ?? "pill"][props.size ?? "xl"],
		props.className,
	)

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
			className: cn(className, children.props.className),
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
			className={className}
		>
			{props.loading ? <IconLoader2 className="animate-spin" /> : props.title || props.children}
		</button>
	)
}
