import type { ViewProps } from "./globals"
import { cn } from "./utils"
import type * as React from "react"

export interface CardHeaderProps extends ViewProps {}
export const CardHeader: React.FC<CardHeaderProps> = props => {
	return <header {...props} className={cn("flex flex-col gap-4", props.className)} />
}

export interface CardContentProps extends ViewProps {}
export const CardContent: React.FC<CardContentProps> = props => {
	return <div {...props} className={cn("flex", props.className)} />
}

export interface CardFooterProps extends ViewProps {}
export const CardFooter: React.FC<CardFooterProps> = props => {
	return <footer {...props} className={cn("flex [.border-t]:pt-4", props.className)} />
}

export interface CardAction extends ViewProps {
}
export function CardAction(props: Readonly<CardAction>) {
	return <div {...props} className={cn(props.className)} />
}

const size = {
	md: "p-4 gap-4 rounded-2xl",
	lg: "p-6 gap-6 rounded-2xl",
	xl: "p-8 gap-8 rounded-4xl"
}

export interface CardProps extends ViewProps {
	size?: keyof typeof size
}
export const Card: React.FC<CardProps> = props => {
	return <article {...props} className={cn("flex flex-col", size[props.size ?? "md"], "bg-background inset-ring inset-ring-border", props.className)} />
}

export default Card
