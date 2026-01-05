import type { ChangeEvent, ReactNode } from "react"
import { cn } from "./utils"

export interface SelectProps {
	children?: ReactNode
	name?: string
	id?: string
	onChange?: (event: ChangeEvent<HTMLSelectElement>) => void
}
export function Select(props: SelectProps) {
	return (
		<select
			name={props.name}
			id={props.id}
			onChange={props.onChange}
			className={cn(
				"flex items-center h-12 px-4 rounded-2xl bg-background/25 backdrop-blur-sm inset-ring inset-ring-border",
				"open:inset-ring-primary/75 open:ring-4 open:ring-primary/10 dark:open:ring-primary/15 focus:inset-ring-primary/75 focus:ring-4 focus:ring-primary/10 dark:focus:ring-primary/15",
				"transition duration-150 ease-in",
			)}
		>
			{props.children}
		</select>
	)
}

export interface SelectItemProps {
	value: string
	children?: ReactNode
	className?: string
}
export function SelectItem(props: SelectItemProps) {
	return (
		<option
			className={cn(
				"gap-4 h-9 min-h-9 px-3 rounded-lg text-foreground hover:bg-secondary focus:bg-secondary checked:bg-secondary",
				"transition duration-150 ease-out",
				props.className,
			)}
			value={props.value}
		>
			{props.children}
		</option>
	)
}
