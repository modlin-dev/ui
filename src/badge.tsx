import { cn } from "./utils"
import type { ReactNode } from "react"

const variant = {
	primary: "bg-primary text-background",
	secondary: "bg-secondary text-foreground",
	destructive: "",
	outline: "inset-ring inset-ring-border",
}
const size = {
	xs: "h-4 px-1.5 text-xs [&>svg]:size-2",
	sm: "h-5 px-2 text-xs [&>svg]:size-3",
	md: "h-5 px-2 text-xs [&>svg]:size-3",
	lg: "h-8 px-4 text-sm [&>svg]:size-4",
}
const shape = {
	square: {
		xs: "rounded-none",
		sm: "rounded-none",
		md: "rounded-none",
		lg: "rounded-none",
	},
	rounded: {
		xs: "rounded-xs px-1",
		sm: "rounded-sm px-1",
		md: "rounded-md px-1.5",
		lg: "rounded-lg px-3",
	},
	pill: {
		xs: "rounded-full",
		sm: "rounded-full",
		md: "rounded-full",
		lg: "rounded-full",
	},
}

export interface BadgeProps {
	variant?: keyof typeof variant
	size?: keyof typeof size
	shape?: keyof typeof shape
	children: ReactNode | number
	className?: string
}
export default function Badge(props: Readonly<BadgeProps>) {
	return (
		<span
			className={cn(
				"flex items-center justify-center gap-2 select-none",
				"rounded-full leading-none whitespace-nowrap",
				typeof props.children === "number" ? "w-5" : "w-fit",
				variant[props.variant ?? "primary"],
				size[props.size ?? "md"],
				shape[props.shape ?? "pill"][props.size ?? "md"],
				props.className,
			)}
		>
			{props.children}
		</span>
	)
}
