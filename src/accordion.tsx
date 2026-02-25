import type { CSSProperties, ReactNode } from "react"
import { cn } from "./utils"
import Seperator from "./seperator"

export interface ViewProps {
	/** @android @ios @web */
	children?: ReactNode
	/** @android @ios @web */
	style?: CSSProperties
	/** @web */
	className?: string
}
export interface InputProps extends ViewProps {
	defaultValue?: string
	value?: string
}

export interface AccordionProps extends InputProps {}
export function Accordion(props: AccordionProps) {
	return <div className={cn("flex flex-col", props.className)}>{props.children}</div>
}

export interface AccordionItemProps extends ViewProps {
	value?: string
}
export function AccordionItem(props: AccordionItemProps) {
	return <details className={cn("flex flex-col border-t border-border", props.className)}>{props.children}</details>
}

export interface AccordionTriggerProps extends ViewProps {}
export function AccordionTrigger(props: AccordionTriggerProps) {
	return <summary className={cn("text-primary/75 select-none flex h-16 items-center", props.className)}>{props.children}</summary>
}

export interface AccordionContentProps extends ViewProps {}
export function AccordionContent(props: AccordionContentProps) {
	return <p className={cn("mb-5 text-muted-foreground", props.className)}>{props.children}</p>
}
