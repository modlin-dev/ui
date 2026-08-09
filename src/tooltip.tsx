import type { ReactNode } from "react"
import Badge from "./badge"
import { cn } from "./utils"

export interface TooltipProps {
	label: string
	className?: string
	children?: ReactNode
}
export function Tooltip(props: TooltipProps) {
	return (
		<div className="group relative">
			{props.children}
			<div className="absolute top-0 left-1/2">
				<Badge size="md" className={cn("fixed -translate-x-1/2 -translate-y-8 z-4 hidden group-hover:flex", props.className)}>
					{props.label}
					<div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-primary" />
				</Badge>
			</div>
		</div>
	)
}

export default Tooltip
