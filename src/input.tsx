import type { ChangeEvent, FocusEvent, HTMLInputAutoCompleteAttribute, InvalidEvent } from "react"
import type { Variant } from "./globals"
import { cn } from "./utils"

const variants: Record<Variant, string> = {
	primary: cn(
		"bg-background",
		"placeholder:text-muted-foreground disabled:text-disabled",
		"inset-ring inset-ring-border disabled:inset-ring-disabled focus:inset-ring-primary/75",
		// "border border-border disabled:border-disabled focus:border-primary/75",
		"focus:ring-4 focus:ring-primary/10 dark:focus:ring-primary/15",
		"invalid:inset-ring-red",
		// "data-[invalid=true]:border data-[invalid=true]:border-red/50 data-[invalid=true]:focus:border-red",
		"data-[invalid=true]:inset-ring-red/50 data-[invalid=true]:focus:inset-ring-red/75",
		"data-[invalid=true]:focus:ring-4 data-[invalid=true]:focus:ring-red/10",
	),
	secondary: cn(
		"bg-secondary",
		"placeholder:text-muted-foreground disabled:text-disabled",
		"inset-ring inset-ring-border disabled:inset-ring-disabled focus:inset-ring-primary/75",
		// "border border-border disabled:border-disabled focus:border-primary/75",
		"focus:ring-4 focus:ring-primary/10 dark:focus:ring-primary/15",
		"invalid:inset-ring-red",
		// "data-[invalid=true]:border data-[invalid=true]:border-red/50 data-[invalid=true]:focus:border-red",
		"data-[invalid=true]:inset-ring-red/50 data-[invalid=true]:focus:inset-ring-red/75",
		"data-[invalid=true]:focus:ring-4 data-[invalid=true]:focus:ring-red/10",
	),
	destructive: cn(
		"bg-background/25 backdrop-blur-sm",
		"placeholder:text-muted-foreground disabled:text-disabled",
		"inset-ring inset-ring-red/50 disabled:inset-ring-red/25 focus:inset-ring-red/75",
		"focus:ring-4 focus:ring-red/10",
		// "border border-red/50 disabled:border-red/25 focus:border-red",
		"focus:ring-4 focus:ring-red/5",
	),
	outline: cn(),
	ghost: cn(),
	link: cn(),
	none: cn("text-()"),
}

const sizes = {
	sm: cn(),
	md: cn("h-9 px-3 rounded-[9px] text-sm"),
	lg: cn(),
	xl: cn("h-12 px-4 rounded-2xl"),
	none: cn(),
}

type InputType = "text" | "password" | "email" | "number" | "tel" | "url" | "file"
type InputMode = "search" | "text" | "email" | "tel" | "url" | "none" | "numeric" | "decimal"
type BlurEvent = FocusEvent<HTMLInputElement, Element>

export interface InputProps {
	/** @android @ios @web */
	placeholder?: string
	/** @android @ios @web */
	defaultValue?: string
	/** @android @ios @web */
	inputMode?: InputMode
	/** @android @ios @web */
	value?: string
	/** @android @ios @web */
	readOnly?: boolean
	/** @android @ios @web */
	maxLength?: number
	/** @android @ios @web */
	autoCapitalize?: "none" | "sentences" | "words" | "characters"
	/** @android @ios @web */
	autoComplete?: HTMLInputAutoCompleteAttribute
	/** @android @ios @web */
	autoCorrect?: boolean
	/** @android @ios @web */
	variant?: Variant
	/** @android @ios @web */
	size?: keyof typeof sizes
	/** @web */
	id?: string
	/** @web */
	type?: InputType
	/** @web */
	name?: string
	/** @web */
	required?: boolean // validation
	/** @web */
	disabled?: boolean
	/** @web */
	pattern?: string // validation
	/** @web */
	min?: number | string // validation
	/** @web */
	max?: number | string // validation
	/** @web */
	minLength?: number // validation
	/** @web */
	invalid?: boolean
	/** @web */
	describedby?: string
	/** @web */
	className?: string
	/** @android @ios @web */
	onChange?(event: ChangeEvent<HTMLInputElement>): void
	/** @android @ios @web */
	onFocus?(event: FocusEvent<HTMLInputElement>): void
	/** @android @ios @web */
	onBlur?(event: BlurEvent): void
	/** @web */
	onInvalid?(event: InvalidEvent<HTMLInputElement>): void
}
const Input = (props: Readonly<InputProps>) => {
	return (
		<input
			type={props.type ?? "text"}
			inputMode={props.inputMode}
			placeholder={props.placeholder}
			defaultValue={props.defaultValue}
			value={props.value}
			name={props.name}
			min={props.min}
			max={props.max}
			minLength={props.minLength}
			maxLength={props.maxLength}
			pattern={props.pattern}
			required={props.required}
			readOnly={props.readOnly}
			disabled={props.disabled}
			id={props.id}
			autoCapitalize={props.autoCapitalize}
			autoComplete={props.autoComplete}
			autoCorrect={props.autoCorrect ? "on" : "off"}
			aria-describedby={props.describedby}
			data-invalid={props.invalid}
			onChange={props.onChange}
			onFocus={props.onFocus}
			onBlur={props.onBlur}
			onInvalid={props.onInvalid}
			className={cn(
				"peer flex items-center w-full",
				"transition duration-250 ease",
				variants[props.variant ?? "primary"],
				sizes[props.size ?? "xl"],
				props.className,
			)}
		/>
	)
}
export default Input
