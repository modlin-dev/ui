import { cn } from "./utils"
import type { ReactNode } from "react"

const variants = {
	primary: "",
	secondary: "",
	destructive: "",
	outline: "",
}

export interface BadgeProps {
	variant?: keyof typeof variants
	children: ReactNode | number
	className?: string
}
export default function Badge(props: Readonly<BadgeProps>) {
	return (
		<span
			className={cn(
				"flex items-center justify-center gap-1",
				"h-5 px-2 rounded-full [&>svg]:size-3",
				"text-xs font-medium leading-none whitespace-nowrap",
				"bg-black dark:bg-white text-white dark:text-black",
				typeof props.children === "number" ? "w-5" : "w-fit",
				props.className,
			)}
		>
			{props.children}
		</span>
	)
}
