import { cn } from "./utils"
import type * as React from "react"

export interface CardHeaderProps {
	className?: string
	children: React.ReactNode
}
export const CardHeader: React.FC<CardHeaderProps> = props => {
	return (
		<header
			data-slot="card-header"
			className={cn("flex flex-col gap-4", props.className)}
		>
			{props.children}
		</header>
	)
}

export interface CardContentProps {
	className?: string
	children: React.ReactNode
}
export const CardContent: React.FC<CardContentProps> = props => {
	return (
		<div data-slot="card-content" className={cn("flex", props.className)}>
			{props.children}
		</div>
	)
}

export interface CardFooterProps {
	className?: string
	children: React.ReactNode
}
export const CardFooter: React.FC<CardFooterProps> = props => {
	return (
		<footer
			data-slot="card-footer"
			className={cn("flex [.border-t]:pt-4", props.className)}
		>
			{props.children}
		</footer>
	)
}

export interface CardAction {
	children: React.ReactNode
	className?: string
}
export function CardAction(props: Readonly<CardAction>) {
	return (
		<div data-slot="card-action" className={cn(props.className)}>
			{props.children}
		</div>
	)
}

const size = {
	md: "p-4 gap-4 sm:rounded-2xl",
	lg: "p-6 gap-6 sm:rounded-2xl",
	xl: "p-8 gap-8 sm:rounded-4xl",
}

export interface CardProps {
	className?: string
	size?: "lg" | "xl"
	children: React.ReactNode
}
export const Card: React.FC<CardProps> = props => {
	return (
		<div
			className={cn(
				"flex flex-col",
				size[props.size ?? "md"],
				"bg-background",
				"sm:inset-ring inset-ring-outline",
				props.className,
			)}
		>
			{props.children}
		</div>
	)
}

export default Card
