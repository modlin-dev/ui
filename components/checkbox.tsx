"use client"
import { useEffect, useState } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

export interface CheckboxProps {
	checked?: boolean
	onChange?(checked: boolean): void
	disabled?: boolean
	// loading?: boolean
	label?: string

	required?: boolean // web
	name?: string // web
	value?: string // web
	id?: string // web
}
export default function Checkbox(props: Readonly<CheckboxProps>) {
	const [checked, setChecked] = useState<boolean>(props.checked ?? false)

	const onChange = props.onChange
	useEffect(() => {
		if (onChange) onChange(checked)
	}, [checked, onChange])

	return (
		<>
			<input
				type="checkbox"
				checked={checked}
				onChange={() => setChecked(v => !v)}
				disabled={props.disabled}
				aria-label={props.label}
				required={props.required}
				name={props.name}
				value={props.value}
				id={props.id}
				className="peer hidden"
			/>
			<button
				type="button"
				role="checkbox"
				data-state={checked ? "checked" : "unchecked"}
				aria-checked={checked}
				onClick={() => setChecked(v => !v)}
				disabled={props.disabled}
				className={cn(
					"w-4 h-4 rounded-sm hover:cursor-pointer",
					"transition transition-all transition-duration-150 ease",
					"data-[state=unchecked]:bg-white data-[state=unchecked]:dark:bg-black",
					"data-[state=checked]:bg-black data-[state=checked]:dark:bg-white",
					"data-[state=checked]:disabled:bg-black/50 dark:data-[state=checked]:disabled:bg-white/50",
					"data-[state=unchecked]:inset-ring",
					"data-[state=unchecked]:inset-ring-black/50 data-[state=unchecked]:dark:inset-ring-white/50",
					"data-[state=unchecked]:disabled:inset-ring-black/25 data-[state=unchecked]:dark:disabled:inset-ring-white/25",
				)}
			>
				<Image
					src={"/check.svg"}
					alt="Check"
					width={16}
					height={16}
					className="dark:invert select-none"
				/>
			</button>
		</>
	)
}
