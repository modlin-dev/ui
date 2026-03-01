import type { CSSProperties, ReactNode } from "react"

export type Variant = "primary" | "secondary" | "destructive" | "outline" | "ghost" | "link" | "none"
export type Size = "sm" | "md" | "lg" | "xl" | "icon" | "none"
export type Shape = "square" | "rounded" | "pill"

export interface ViewProps {
	/** @android @ios @web */
	children?: ReactNode
	/** @android @ios @web */
	style?: CSSProperties
	/** @web */
	className?: string
}
