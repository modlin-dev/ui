import type { ReactElement } from "react"
import type { HeadingProps } from "./heading"
import type { TextProps } from "./text"
import { cn } from "@/lib/utils"

export interface HeaderProps {
	gap?: number
	children: [ReactElement<HeadingProps>, ReactElement<TextProps>]
	className?: string
}
export default function Header(props: Readonly<HeaderProps>) {
	return (
		<header
			style={{
				gap: props.gap ?? 8,
			}}
			className={cn("flex flex-col", props.className)}
		>
			{props.children}
		</header>
	)
}
