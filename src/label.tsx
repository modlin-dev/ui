import { cn, mergeProps } from "./utils"
import { cloneElement, type ReactNode } from "react"

export interface LabelProps {
	htmlFor: string
	label?: string
	children: ReactNode

	className?: string

	onPress?: React.MouseEventHandler<HTMLLabelElement>
	asChild?: boolean

	// size?: "sm" | "md" | "lg"
	// tone?: "default" | "muted" | "error" | "success" | "warning"
	// weight?: "regular" | "medium" | "bold"
	// align?: "left" | "center" | "right"

	// required?: boolean
	// disabled?: boolean
	// truncate?: boolean
	// maxLines?: number
}
export default function Label(props: LabelProps) {
	const className = "flex items-center gap-2 peer-disabled:text-disabled invalid:text-red text-sm/4 font-medium select-none"
	if (props.asChild) {
		const children = props.children as React.ReactHTMLElement<HTMLElement>
		const labelProps = {
			htmlFor: props.htmlFor,
			"aria-label": props.label,
			onClick: props.onPress,
			className: cn(className, props.className, children.props.className)
		}
		return cloneElement(children, mergeProps(children.props, labelProps))
	}
	return <label {...props} aria-label={props.label} onClick={props.onPress} className={cn(className, props.className)} />
}
