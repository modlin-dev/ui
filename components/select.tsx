"use client"
import { IconChevronDown } from "@tabler/icons-react"
import Button from "./button"
import Text from "./text"
import { cn } from "@/lib/utils"
import React, { type ReactElement, type ReactNode, useState } from "react"

export interface SelectTriggerProps {
	placeholder?: string
	id?: string
	children?: string
}
export function SelectTrigger(props: SelectTriggerProps) {
	return (
		<button
			type="button"
			className={cn("flex items-center", "bg-(--background)")}
		>
			{props.placeholder}
		</button>
	)
}

export function Dropdown() {
	return (
		<div className="grid">
			<SelectTrigger placeholder="Select a gender" />
			<Button variant="outline" size="xl" className="text-(--description)">
				<Text className="flex grow-1">Country</Text>
				<IconChevronDown />
			</Button>
		</div>
	)
}

export interface SelectOptionProps {
	value: string
	children: ReactNode
	className?: string
	onClick?: () => void
}
export function SelectOption(
	props: Readonly<SelectOptionProps>,
): ReactElement<SelectOptionProps> {
	return (
		<button
			type="button"
			role="option"
			value={props.value}
			onClick={props.onClick}
			className={cn(
				"flex items-center h-12 px-4 gap-4",
				"select-none hover:bg-(--secondary)",
				// "[&>svg]:size-4 [&>svg]:scale-125",
                props.className
			)}
		>
			{props.children}
		</button>
	)
}

export interface SelectProps {
	defaultValue?: string
	placeholder: string
	value?: string
	name?: string
	id?: string
	children: ReactElement<SelectOptionProps>[]
}
export function Select(props: SelectProps) {
	const [expanded, setExpanded] = useState(false)
	const [value, setValue] = useState(props.defaultValue)
	const [selected, setSelected] = useState<ReactNode>(props.placeholder)

	const children: ReactElement[] = []
	for (let i = 0; i < props.children.length; i++) {
		const child = props.children[i]
		children.push(
			React.cloneElement(props.children[i], {
				onClick() {
					setValue(child.props.value)
					setSelected(child.props.children)
					setExpanded(false)
				},
			}),
		)
	}

	return (
		<div className="relative flex flex-col w-full max-w-56">
			<button
				type="button"
				role="combobox"
				aria-expanded={expanded}
				aria-autocomplete="none"
				aria-haspopup="listbox"
				value={value}
				name={props.name}
				id={props.id}
				onClick={() => setExpanded(!expanded)}
				// onBlur={() => setExpanded(false)}
				className={cn(
					"flex items-center gap-x-4",
					"[&>svg]:size-4 [&>svg]:scale-125",
					"focus:underline",
				)}
			>
				{selected}
				<IconChevronDown size={16} />
			</button>
			{expanded ? (
				<ul
					id={props.id}
					className={cn(
						"absolute flex flex-col w-full top-[100%] overflow-hidden",
						"rounded-2xl",
						"bg-(--background) shadow-[0_0_16px_0_var(--shadow)]",
						"animate-appear-tc",
					)}
				>
					{children}
				</ul>
			) : null}
		</div>
	)
}
