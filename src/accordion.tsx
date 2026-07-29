import { IconChevronDown } from "@tabler/icons-react"
import type { ViewProps } from "./globals"
import { cn } from "./utils"

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
	return <details className={cn("flex flex-col pt-4 mb-4 not-first:border-t border-border group peer", props.className)}>{props.children}</details>
}

export interface AccordionTriggerProps extends ViewProps {}
export function AccordionTrigger(props: AccordionTriggerProps) {
	return (
		<summary className={cn("text-primary/75 select-none flex items-center justify-between transition duration-250 ease hover:text-foreground hover:underline", props.className)}>
			<span>{props.children}</span>
            <IconChevronDown size={16} className="transition duration-250 ease group-open:rotate-180" />
		</summary>
	)
}

export interface AccordionContentProps extends ViewProps {}
export function AccordionContent(props: AccordionContentProps) {
	return <p className={cn("mt-2 text-muted-foreground", props.className)}>{props.children}</p>
}
