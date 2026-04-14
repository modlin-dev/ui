import type { CSSProperties, ReactNode } from "react"

export interface TextProps {
	className?: string
	style?: CSSProperties
	children?: ReactNode
}
export default function Text(props: Readonly<TextProps>) {
	return <p {...props} />
}
