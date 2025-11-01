"use client"
import { useEffect, useRef, useState, type ChangeEventHandler, type ReactElement, type ReactNode } from "react"
import { cn } from "./utils"
import { setConfig } from "next/config"

export interface ViewProps {
	children?: ReactNode
	className?: string
}

export interface CheckboxProps {
	disabled?: boolean
	onChange?: ChangeEventHandler<HTMLInputElement> // web
	onValueChange?(checked: boolean): void | Promise<void> // web
	checked?: boolean
	defaultChecked?: boolean
	// loading?: boolean
	label?: string

	required?: boolean // web
	name?: string // web
	id?: string // web
	value?: string
}
export default function Checkbox(props: Readonly<CheckboxProps>): ReactElement<CheckboxProps> {
	const input = useRef<HTMLInputElement>(null)
	const button = useRef<HTMLInputElement>(null)
	let checked = props.checked || props.defaultChecked || false

	return (
		<>
			<input
				ref={input}
				type="checkbox"
				disabled={props.disabled}
				onChange={e => {
					checked = !checked
					e.target.checked = checked
					if (button.current) {
						button.current.ariaChecked = checked ? "true" : "false"
						button.current.setAttribute("data-state", checked ? "checked" : "unchecked")
					}
				}}
				checked={checked}
				defaultChecked={props.defaultChecked}
				required={props.required}
				aria-label={props.label}
				name={props.name}
				value={props.value}
				id={props.id}
				className="peer hidden"
			/>
			<button
				ref={button}
				type="button"
				role="checkbox"
				data-state={checked ? "checked" : "unchecked"}
				aria-checked={checked}
				onClick={async e => {
					checked = !checked
					if (input.current) input.current.checked = checked
					e.currentTarget.ariaChecked = checked ? "true" : "false"
					e.currentTarget.setAttribute("data-state", checked ? "checked" : "unchecked")
				}}
				disabled={props.disabled}
				className={cn(
					"w-4 h-4 rounded-sm hover:cursor-pointer text-background",
					"data-[state=unchecked]:inset-ring",
					"data-[state=unchecked]:bg-background data-[state=unchecked]:inset-ring-muted-foreground",
					"data-[state=unchecked]:disabled:inset-ring-border",
					"data-[state=checked]:bg-primary data-[state=checked]:disabled:bg-primary/50",
					"transition transition-all transition-duration-150 ease",
				)}
			>
				<svg width={16} height={16} viewBox="0 0 16 16" fill="none">
					<title>Check</title>
					<path d="M12 5L9 8L6.5 10.5L4 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
				</svg>
			</button>
		</>
	)
}
