import { cn } from "./utils"

export const size = {
	xs: cn(),
	sm: cn("min-h-8 rounded-lg p-3 py-2"),
	md: cn(),
	lg: cn(),
	xl: cn("min-h-12 rounded-2xl px-4 py-3")
}
export const variant = { 
    primary: cn(),
    secondary: cn(),
    none: cn(),
}

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
	size?: keyof typeof size
    variant?: keyof typeof variant
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
				width: props.width
			}}
			className={cn(
				"transition-duration-150 transition-all ease-in",
				"flex items-center",
				"placeholder:text-muted-foreground",
				"disabled:text-disabled",
				"inset-ring inset-ring-border focus:inset-ring-primary/75 focus:ring-4 focus:ring-primary/15",
				size[props.size ?? "xl"],
				props.className
			)}
		/>
	)
}
