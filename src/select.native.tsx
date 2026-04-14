import type { ChangeEvent, ReactNode } from "react"
import { cn } from "./utils"
import type { ViewProps } from "./globals"
import { cva, type VariantProps } from "class-variance-authority"

const selectVariants = cva("flex items-center transition duration-150 ease-in", {
	variants: {
		variant: {
			primary:
				"bg-background/25 backdrop-blur-sm inset-ring inset-ring-border open:inset-ring-primary/75 open:ring-4 open:ring-primary/10 dark:open:ring-primary/15 focus:inset-ring-primary/75 focus:ring-4 focus:ring-primary/10 dark:focus:ring-primary/15",
			secondary: "",
			none: ""
		},
		size: {
			sm: "gap-2.5 h-8 px-2.5 text-sm rounded-lg",
			md: "gap-3 h-9 px-3 rounded-[9px] text-sm",
			lg: "gap-3 h-11 px-3 rounded-[14px]",
			xl: "gap-4 h-12 px-4 rounded-2xl",
			none: ""
		}
	},
	defaultVariants: {
		variant: "primary",
		size: "xl"
	}
})

export interface SelectProps extends ViewProps, VariantProps<typeof selectVariants> {
	defaultValue?: string
    value?: string
	onChange?: (event: ChangeEvent<HTMLSelectElement>) => void
	name?: string
	id?: string
}
export function Select(props: SelectProps) {
	return (
		<select
			defaultValue={props.defaultValue}
            value={props.value}
			name={props.name}
			id={props.id}
			onChange={props.onChange}
			className={cn(selectVariants({
				variant: props.variant,
				size: props.size,
				className: props.className
			}))}
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
			// dir="rtl"
			className={cn(
				"gap-3 h-9 min-h-9 px-3 rounded-lg text-foreground hover:bg-secondary focus:inset-ring focus:inset-ring-border checked:bg-secondary",
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
