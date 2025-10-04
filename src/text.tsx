import { cn } from "./utils"

export interface TextProps {
	className?: string
	children?: React.ReactNode
}
export default function Text(props: Readonly<TextProps>) {
	return <p className={cn(props.className)}>{props.children}</p>
}
