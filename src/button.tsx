import { cn } from "./utils"
import { IconLoader2 } from "@tabler/icons-react"
import type { MouseEvent, FocusEvent, ReactNode, ReactHTMLElement } from "react"
import React from "react"
import type { Variant, Size, Shape } from "./globals"

const size: Record<Size, string> = {
	sm: cn("h-8 px-4 gap-1 text-sm", "[&>svg]:size-4"),
	// "[&>svg:first-child]:-ml-1.5 [&>svg:first-child]:mr-1 [&>svg:last-child]:-mr-1.5 [&>svg:last-child]:mr-1",
	md: cn("h-9 px-4.5 gap-2 text-sm font-medium", "[&>svg]:size-5"),
	lg: cn("h-11 px-5 gap-2 text-base font-medium", "[&>svg]:size-4"),
	xl: cn("h-12 px-6 gap-2 text-base font-semibold", "[&>svg]:size-4 [&>svg]:scale-125"),
	// sm_: "h-8 px-2.5 rounded-lg text-sm font-medium [&>svg]:size-4",
	// md_: cn("h-9 px-3.5 gap-x-1 text-sm rounded-xl font-medium", "[&>svg]:size-4"),
	// lg_: cn("h-11 px-4 gap-x-2 text-base rounded-2xl font-medium", "[&>svg]:size-5"),
	// xl_: cn("h-12 px-4 gap-x-2 text-base rounded-2xl font-medium", "[&>svg]:size-4 [&>svg]:scale-125"),
	icon: cn("p-2 text-sm font-medium"),
	// iconr: cn("p-2 rounded-2xl text-sm font-medium"),
	none: cn("overflow-visible"),
}
const variant: Record<Variant, string> = {
	primary: "bg-primary disabled:bg-primary/60 hover:bg-primary/85 active:bg-primary/80 text-background",
	secondary: "bg-secondary hover:bg-secondary/75 backdrop-blur-sm",
	destructive: "bg-red/15 hover:bg-red/20 text-red",
	outline: cn(
		"inset-ring inset-ring-border",
		"hover:bg-secondary active:bg-secondary focus-visible:inset-ring-muted-foreground disabled:bg-background disabled:text-muted-foreground",
	),
	ghost: "hover:bg-secondary disabled:text-muted-foreground",
	link: "text-primary hover:underline",
	none: cn(),
	// jnsa: "bg-(--purple) hover:bg-(--purple)/90 text-white",
	// outline_red: "inset-ring inset-ring-(--red)/50 hover:bg-(--red)/5 text-(--red)",
	// shadcn: "rounded-xl bg-(--primary) hover:bg-(--primary)/85 text-white dark:text-black",
} as const
const shape: Record<Shape, string> = {
	square: "rounded-none",
	rounded: "rounded-2xl",
	pill: "rounded-full",
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
	size?: Size
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
		shape[props.shape ?? "pill"],
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
			onMouseOver: props.onHover,
			onFocus: props.onFocus,
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
