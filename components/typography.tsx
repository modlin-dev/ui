import { forwardRef, type ReactNode } from "react"
import { cn } from "@/lib/utils"

export interface TypographyProps {
	children?: ReactNode
	className?: string
}

export const InlineCode = forwardRef<HTMLElement, TypographyProps>(
	(props, ref) => {
		return (
			<code
				ref={ref}
				className={cn(
					"bg-(--muted) relative rounded px-[2px] leading-12 font-mono text-sm font-medium",
					props.className,
				)}
			>
				{props.children}
			</code>
		)
	},
)

export const Lead = forwardRef<HTMLParagraphElement, TypographyProps>(
	(props, ref) => {
		return (
			<p
				ref={ref}
				className={cn("text-(--muted-foreground) text-xl", props.className)}
			>
				{props.children}
			</p>
		)
	},
)

export const Large = forwardRef<HTMLDivElement, TypographyProps>(
	(props, ref) => {
		return (
			<div ref={ref} className={cn("text-lg font-semibold", props.className)}>
				{props.children}
			</div>
		)
	},
)

export const Small = forwardRef<HTMLElement, TypographyProps>((props, ref) => {
	return (
		<small
			ref={ref}
			className={cn("text-sm leading-none font-medium", props.className)}
		>
			{props.children}
		</small>
	)
})

export const Muted = forwardRef<HTMLParagraphElement, TypographyProps>(
	(props, ref) => {
		return (
			<p
				ref={ref}
				className={cn("text-(--muted-foreground) text-sm", props.className)}
			>
				{props.children}
			</p>
		)
	},
)
