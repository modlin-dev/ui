import type { ReactNode } from "react"
import { Small } from "./typography"
import { cn } from "./utils"

export interface ErrorMessageProps {
	children?: ReactNode
	id?: string
	className?: string
}
export function ErrorMessage(props: ErrorMessageProps) {
	if (props.children)
		return <Small className={cn("flex items-start gap-2 leading-4 text-red animate-appear", props.className)}>&#xea05; {props.children}</Small>
	return undefined
}
