import type { ChangeEvent, ReactNode } from "react"
import { cn } from "./utils"
import type { ViewProps } from "./globals"

const size = {
	sm: "h-8 px-2.5 text-sm rounded-lg",
	md: "h-9 px-3 rounded-[9px] text-sm",
	lg: "h-11 px-3 rounded-[14px]",
	xl: "h-12 px-4 rounded-2xl"
}

export interface SelectProps extends ViewProps {
	size?: keyof typeof size
	defaultValue?: string
	name?: string
	id?: string
	onChange?: (event: ChangeEvent<HTMLSelectElement>) => void
}
export function Select(props: SelectProps) {
	return (
		<select
			defaultValue={props.defaultValue}
			name={props.name}
			id={props.id}
			onChange={props.onChange}
			className={cn(
				"flex items-center bg-background/25 backdrop-blur-sm inset-ring inset-ring-border",
				"open:inset-ring-primary/75 open:ring-4 open:ring-primary/10 dark:open:ring-primary/15 focus:inset-ring-primary/75 focus:ring-4 focus:ring-primary/10 dark:focus:ring-primary/15",
				"transition duration-150 ease-in",
				size[props.size ?? "xl"],
				props.className
			)}
		>
			{props.children}
		</select>
	)
}

export interface SelectItemProps {
	disabled?: boolean
	selected?: boolean
	hidden?: boolean
	value: string
	children?: ReactNode
	className?: string
}
export function SelectItem(props: SelectItemProps) {
	return (
		<option
			dir="rtl"
			className={cn(
				"justify-between gap-4 h-9 min-h-9 px-3 rounded-lg text-foreground hover:bg-secondary focus:bg-secondary checked:bg-secondary",
				"transition duration-150 ease-out",
				props.className
			)}
			value={props.value}
			disabled={props.disabled}
			selected={props.selected}
			hidden={props.hidden}
		>
			{props.children}
		</option>
	)
}
