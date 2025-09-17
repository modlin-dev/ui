import { cn } from "@/lib/utils"
import type { ReactElement, ReactNode } from "react"

export interface AlertTitleProps {
	children: ReactNode
	className?: string
}
export function AlertTitle(props: Readonly<AlertTitleProps>) {
	return (
		<div
			className={cn(
				"flex flex-1 items-center h-4 font-medium",
				"text-sm overflow-hidden whitespace-nowrap text-ellipsis",
				props.className,
			)}
		>
			{props.children}
		</div>
	)
}

export interface AlertDescriptionProps {
	children: ReactNode
	className?: string
}
export function AlertDescription(props: Readonly<AlertDescriptionProps>) {
	return (
		<div
			className={cn(
				"grid flex flex-1 gap-1 col-start-2",
				"text-sm",
				props.className,
			)}
		>
			{props.children}
		</div>
	)
}

export interface AlertProps {
	dismissible?: boolean
	children:
		| [
				ReactElement,
				ReactElement<AlertTitleProps>,
				ReactElement<AlertDescriptionProps> | undefined,
		  ]
		| [ReactElement, ReactElement<AlertTitleProps>]
	className?: string
}
export function Alert(props: Readonly<AlertProps>) {
	return (
		<div
			className={cn(
				"grid grid-cols-[16px_1fr] auto-rows-auto gap-x-4 gap-y-1 items-center justify-center",
				"p-4 rounded-2xl",
				"inset-ring inset-ring-black/15 dark:inset-ring-white/10",
				props.className,
			)}
		>
			{props.children}
		</div>
	)
}
Alert.Destructive = (props: Readonly<AlertProps>) => {
	return (
		<div
			className={cn(
				"grid grid-cols-[16px_1fr] auto-rows-auto gap-x-4 gap-y-1 items-center justify-center",
				"p-4 rounded-2xl",
				"inset-ring inset-ring-black/15 dark:inset-ring-white/10",
				"text-red-600 dark:text-red-400",
				props.className,
			)}
		>
			{props.children}
		</div>
	)
}
