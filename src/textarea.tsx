import { cn } from "./utils"

export interface TextareaProps {
	type?: "text" | "password" | "email" | "number" | "tel" | "url" | "file"
	disabled?: boolean
	placeholder?: string
	value?: string
	maxLength?: number
	minLength?: number
	required?: boolean
	name?: string
	id?: string
	onChange?: (value: string) => void
	width?: number | string
	className?: string
}
export default function Textarea(props: Readonly<TextareaProps>) {
	const { onChange } = props

	return (
		<textarea
			disabled={props.disabled}
			placeholder={props.placeholder}
			value={props.value}
			maxLength={props.maxLength}
			minLength={props.minLength}
			required={props.required}
			name={props.name}
			id={props.id}
			onChange={onChange ? e => onChange(e.target.value) : undefined}
			style={{
				width: props.width,
			}}
			className={cn(
				"transition-duration-150 transition-all ease-in",
				"h-12 rounded-2xl px-4",
				"flex items-center",
				"bg-white/25 backdrop-blur-lg dark:bg-black/25",
				"placeholder:text-black/50 placeholder:dark:text-white/50",
				"disabled:text-black/25 disabled:dark:text-white/25",
				"inset-ring inset-ring-black/25 dark:inset-ring-white/25",
				"focus:inset-ring-black/50 focus:dark:inset-ring-white/50",
				props.className,
			)}
		/>
	)
}
