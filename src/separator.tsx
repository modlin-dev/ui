import { cn } from "./utils"

export interface SeparatorProps {
	className?: string
	orientation?: "vertical" | "horizontal"
}
export default function Separator(props: SeparatorProps) {
	return (
		<hr
			data-orientation={props.orientation ?? "horizontal"}
			className={cn(
				"border-0 bg-border data-[orientation=horizontal]:w-full data-[orientation=horizontal]:h-px data-[orientation=vertical]:w-px data-[orientation=vertical]:h-full",
				props.className
			)}
		/>
	)
}
