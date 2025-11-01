import { cn } from "./utils"
import { IconLoader2 } from "@tabler/icons-react"
import type { MouseEvent, FocusEvent, ReactNode, ReactHTMLElement } from "react"
import React from "react"
import type { Variant, Variants } from "./global"

const sizeMap = {
	sm: cn("h-8 px-4 gap-x-1 text-sm rounded-full font-medium"),
	md: cn("h-9 px-4.5 gap-x-1 text-sm rounded-full font-medium"),
	lg: cn("h-11 px-5 gap-x-1 text-base rounded-full font-medium", "[&>svg]:size-4"),
	xl: cn("h-12 px-6 gap-x-1 text-base rounded-full font-semibold", "[&>svg]:size-4"),
	sm_: "h-8 px-2.5 rounded-lg text-sm font-medium [&>svg]:size-4",
	md_: cn("h-9 px-3.5 gap-x-1 text-sm rounded-xl font-medium", "[&>svg]:size-4"),
	lg_: cn("h-11 px-4 gap-x-2 text-base rounded-2xl font-medium", "[&>svg]:size-5"),
	xl_: cn("h-12 px-4 gap-x-2 text-base rounded-2xl font-medium", "[&>svg]:size-4 [&>svg]:scale-125"),
	icon: cn("p-2 rounded-full text-sm font-medium"),
	iconr: cn("p-2 rounded-2xl text-sm font-medium"),
	none: cn("overflow-visible"),
}
const variant: Variants = {
	primary: "bg-primary disabled:bg-primary/60 hover:bg-primary/85 active:bg-primary/85 text-background",
	secondary: "bg-secondary hover:bg-secondary/75",
	destructive: "bg-red hover:bg-red/85 text-white",
	outline: cn(
		"bg-background inset-ring inset-ring-border",
		"hover:bg-secondary active:bg-secondary focus-visible:inset-ring-muted-foreground disabled:bg-background disabled:text-muted-foreground",
	),
	ghost: "hover:bg-secondary",
	link: "text-primary hover:underline",
	none: cn(),
	// jnsa: "bg-(--purple) hover:bg-(--purple)/90 text-white",
	// outline_red: "inset-ring inset-ring-(--red)/50 hover:bg-(--red)/5 text-(--red)",
	// shadcn: "rounded-xl bg-(--primary) hover:bg-(--primary)/85 text-white dark:text-black",
} as const
const shapes = {
	square: "rounded-none",
	rounded: "",
	pill: "rounded-full",
}
export interface ButtonProps {
	variant?: Variant
	size?: keyof typeof sizeMap
	shape?: "square" | "rounded" | "pill"
	// tone?: "default" | "success" | "error" | "warning"
	// elevation?: "none" | "xs" | "sm" | "md" | "lg" | "xl"

	disabled?: boolean
	loading?: boolean

	label?: string
	// haptics?: boolean

	children?: ReactNode
	onPress?: (event: MouseEvent) => void | Promise<void>
	onHover?: (event: MouseEvent) => void | Promise<void> // Web
	onFocus?: (event: FocusEvent) => void | Promise<void> // web
	onBlur?: (event: FocusEvent) => void | Promise<void> // web

	type?: "button" | "reset" | "submit"
	id?: string
	className?: string

	asChild?: boolean
}
export default function Button(props: Readonly<ButtonProps>) {
	const className = cn(
		"line-clamp-1 flex items-center justify-center leading-none text-center",
		"select-none hover:cursor-pointer disabled:hover:cursor-not-allowed",
		"transition-[background-color] transition-duration-250 ease",
		variant[props.variant ?? "primary"],
		sizeMap[props.size ?? "xl"],
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
			onMouseOver={props.onHover}
			onFocus={props.onFocus}
			onBlur={props.onBlur}
			id={props.id}
			className={className}
		>
			{props.loading ? <IconLoader2 className="animate-spin" /> : props.children}
		</button>
	)
}
