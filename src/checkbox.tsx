"use client"
import { useRef, type ChangeEvent, type ReactElement, type ReactNode } from "react"
import { cn } from "./utils"

export interface ViewProps {
	children?: ReactNode
	className?: string
}

export interface CheckboxProps {
	/** @android @ios @web */
	disabled?: boolean
	/** @android @ios @web */
	defaultChecked?: boolean
	/** @android @ios @web */
	checked?: boolean
	/** @android @ios @web */
	label?: string
	/** @web */
	required?: boolean
	/** @web */
	name?: string
	/** @web */
	id?: string
	/** @web */
	asChild?: boolean
	/** @android @ios @web */
	onChange?(checked: boolean): void
	// note: dropped support for RHF to add native support
	/** @deprecated @use checked */
	value?: string
	/** @deprecated @use onChange */
	onValueChange?(event: ChangeEvent<HTMLInputElement>): void
}
export default function Checkbox(props: Readonly<CheckboxProps>): ReactElement<CheckboxProps> {
	const input = useRef<HTMLInputElement>(null)

	return (
		<>
			<input
				ref={input}
				type="checkbox"
				disabled={props.disabled}
				onChange={e => {
					// const checked = e.target.checked
					// if (button.current) {
					// button.current.ariaChecked = checked ? "true" : "false"
					// button.current.setAttribute("data-state", checked ? "checked" : "unchecked")
					// }
					props.onChange?.(e.target.checked)
				}}
				checked={props.checked}
				defaultChecked={props.defaultChecked}
				required={props.required}
				aria-label={props.label}
				name={props.name}
				value={props.value}
				id={props.id}
				className="peer hidden"
			/>
			<button
				type="button"
				role="checkbox"
				// data-state={checked ? "checked" : "unchecked"}
				aria-checked={input.current?.checked}
				onClick={async e => {
					if (input.current) {
						input.current.checked = !input.current.checked
						props.onChange?.(input.current.checked)
					}
					// e.currentTarget.ariaChecked = checked ? "true" : "false"
					// e.currentTarget.setAttribute("data-state", checked ? "checked" : "unchecked")
				}}
				disabled={props.disabled}
				className={cn(
					"w-4 h-4 rounded-sm hover:cursor-pointer text-background",
					"bg-background inset-ring inset-ring-muted-foreground peer-checked:bg-primary peer-checked:inset-ring-0 focus:inset-ring-foreground disabled:inset-ring-border peer-checked:disabled:bg-primary/50"
					// "data-[state=unchecked]:inset-ring",
					// "data-[state=unchecked]:bg-background data-[state=unchecked]:inset-ring-muted-foreground",
					// "data-[state=unchecked]:disabled:inset-ring-border",
					// "data-[state=checked]:bg-primary data-[state=checked]:disabled:bg-primary/50",
					// "transition duration-150 ease"
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
