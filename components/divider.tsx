import { cn } from "@/lib/utils"

export interface DividerProps {
	className?: string
	orientation?: "vertical" | "horizontal"
}
export default function Divider(props: DividerProps) {
	return (
		<hr
			className={cn(
				"border-(--outline)",
				props.orientation === "vertical" ? "h-full border-r" : undefined,
				props.className,
			)}
		/>
	)
}
