import { cn } from "./utils"

export interface SeperatorProps {
	className?: string
	orientation?: "vertical" | "horizontal"
}
export default function Seperator(props: SeperatorProps) {
	return (
		<div
			data-orientation={props.orientation ?? "horizontal"}
			className={cn(
				"bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px",
				props.className,
			)}
		/>
	)
}
