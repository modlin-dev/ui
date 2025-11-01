import { cn } from "./utils"
import type { ReactNode } from "react"

export interface LabelProps {
	htmlFor: string
	label?: string
	children: ReactNode

	className?: string

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
	return (
		<label
			htmlFor={props.htmlFor}
			aria-label={props.label}
			className={cn("flex items-center gap-2", "peer-disabled:text-disabled invalid:text-red text-sm/4 font-medium", "select-none", props.className)}
		>
			{props.children}
		</label>
	)
}
