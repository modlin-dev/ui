import { cn, mergeProps } from "./utils"
import type { MouseEvent, FocusEvent } from "react"
import React, { cloneElement } from "react"
import { cva, type VariantProps } from "class-variance-authority"
import type { ViewProps } from "./globals"
import Spinner from "./spinner"

export const buttonVariants = cva(
	"flex items-center justify-center leading-none text-center truncate select-none hover:cursor-pointer disabled:hover:cursor-not-allowed transition duration-250 ease",
	{
		variants: {
			variant: {
				primary:
					"bg-primary disabled:bg-primary/60 not-disabled:hover:bg-primary/85 not-disabled:active:bg-primary/80 not-disabled:focus-visible:bg-primary/80 text-background",
				secondary: "bg-secondary not-disabled:hover:bg-secondary/75 focus-visible:inset-ring focus-visible:inset-ring-primary/50",
				destructive: "bg-red/15 disabled:bg-red/10 not-disabled:hover:bg-red/20 not-disabled:active:bg-red/25 text-red",
				outline:
					"inset-ring inset-ring-border not-disabled:hover:bg-secondary active:bg-secondary active:inset-ring-muted-foreground focus-visible:inset-ring-muted-foreground disabled:bg-background disabled:text-muted-foreground",
				ghost:
					"not-disabled:hover:bg-secondary not-disabled:focus-visible:inset-ring disabled:text-muted-foreground not-disabled:focus-visible:inset-ring-border",
				link: "text-primary/75 not-disabled:hover:underline not-disabled:hover:text-primary",
				none: ""
			},
			size: {
				xs: "h-6 px-3 gap-1 text-xs [&>svg]:size-4",
				sm: "h-8 px-4 gap-1 text-sm [&>svg]:size-4",
				md: "h-9 px-4.5 gap-2.25 text-sm font-medium [&>svg]:size-4.5 [&>svg]:shrink-0",
				lg: "h-11 px-5 gap-2 text-base font-medium [&>svg]:size-5",
				xl: "h-12 px-6 gap-2 text-base font-semibold [&>svg]:size-4",
				icon: "size-12 p-2 text-sm font-medium",
				"icon-xs": "size-6 p-1 text-sm",
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
			{
				shape: "rounded",
				size: "sm",
				class: "rounded-lg px-3"
			},
			{
				shape: "rounded",
				size: "md",
				class: "rounded-[9px] px-3"
			},
			{
				shape: "rounded",
				size: "lg",
				class: "rounded-[14px] px-3"
			},
			{
				shape: "rounded",
				size: "xl",
				class: "rounded-2xl px-4"
			},
			{
				shape: "rounded",
				size: "icon",
				class: "rounded-2xl"
			},
			{
				shape: "rounded",
				size: "icon-xs",
				class: "rounded-md"
			},
			{
				shape: "rounded",
				size: "icon-sm",
				class: "rounded-lg"
			},
			{
				shape: "rounded",
				size: "icon-md",
				class: "rounded-[9px]"
			},

			{
				shape: "square",
				size: "sm",
				class: "px-2"
			},
			{
				shape: "square",
				size: "md",
				class: "px-2.25"
			},
			{
				shape: "square",
				size: "lg",
				class: "px-3"
			},
			{
				shape: "square",
				size: "xl",
				class: "px-4"
			}
		]
	}
)

// "[&>svg:first-child]:-ml-1.5 [&>svg:first-child]:mr-1 [&>svg:last-child]:-mr-1.5 [&>svg:last-child]:mr-1",
// sm_: "h-8 px-2.5 rounded-lg text-sm font-medium [&>svg]:size-4",
// md_: cn("h-9 px-3.5 gap-x-1 text-sm rounded-xl font-medium", "[&>svg]:size-4"),
// lg_: cn("h-11 px-4 gap-x-2 text-base rounded-2xl font-medium", "[&>svg]:size-5"),
// xl_: cn("h-12 px-4 gap-x-2 text-base rounded-2xl font-medium", "[&>svg]:size-4 [&>svg]:scale-125"),
// iconr: cn("p-2 rounded-2xl text-sm font-medium"),

// jnsa: "bg-(--purple) hover:bg-(--purple)/90 text-white",
// outline_red: "inset-ring inset-ring-(--red)/50 hover:bg-(--red)/5 text-(--red)",
// shadcn: "rounded-xl bg-(--primary) hover:bg-(--primary)/85 text-white dark:text-black",

export interface ButtonProps extends ViewProps, VariantProps<typeof buttonVariants> {
	/** @android @ios @web */
	disabled?: boolean // state
	/** @android @ios @web */
	loading?: boolean // state
	/** @android @ios @web */
	label?: string
	/** @android @ios @web */
	title?: string
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
	/** @platform web */
	popoverTarget?: string
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
	const className = buttonVariants({
		variant: props.variant,
		size: props.size,
		shape: props.shape,
		className: props.className
	})

	if (props.asChild) {
		const children = props.children as React.ReactHTMLElement<HTMLElement>
		const buttonProps = {
			type: props.type,
			role: "button",
			disabled: props.disabled,
			"aria-label": props.label,
			title: props.label,
			onClick: props.onPress,
			onMouseDown: props.onPressIn,
			onMouseUp: props.onPressOut,
			onMouseEnter: props.onMouseEnter,
			onMouseLeave: props.onMouseLeave,
			onMouseOver: props.onHover,
			onFocus: props.onFocus,
			onBlur: props.onBlur,
			style: props.style,
			id: props.id,
			className: cn(className, children.props.className)
		}
		return cloneElement(children, mergeProps(children.props, buttonProps))
	}

	const isIcon = props.size?.startsWith("icon")

	return (
		<button
			type={props.type ?? "button"}
			disabled={props.loading ? true : props.disabled}
			aria-label={props.label}
			title={props.label}
			onClick={props.onPress}
			onMouseDown={props.onPressIn}
			onMouseUp={props.onPressOut}
			onMouseEnter={props.onMouseEnter}
			onMouseLeave={props.onMouseLeave}
			onMouseOver={props.onHover}
			onFocus={props.onFocus}
			onBlur={props.onBlur}
			style={props.style}
			id={props.id}
			popoverTarget={props.popoverTarget}
			className={cn(className)}
		>
			{props.loading ? (
				isIcon ? (
					<Spinner />
				) : (
					<>
						{props.title || props.children}
						<Spinner />
					</>
				)
			) : (
				props.title || props.children
			)}
		</button>
	)
}
