import { cn } from "./utils"

export interface SeperatorProps {
	className?: string
	orientation?: "vertical" | "horizontal"
}
export default function Seperator(props: SeperatorProps) {
	return (
		<hr
			data-orientation={props.orientation ?? "horizontal"}
			className={cn(
				"border-0 bg-border data-[orientation=horizontal]:w-full data-[orientation=horizontal]:h-px data-[orientation=vertical]:w-px data-[orientation=vertical]:h-full",
				props.className,
			)}
		/>
	)
}
