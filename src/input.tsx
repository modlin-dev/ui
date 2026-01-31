import { type ChangeEvent, type FocusEvent, type HTMLInputAutoCompleteAttribute, forwardRef } from "react"
import type { Variant } from "./globals"
import { cn } from "./utils"

export const input_variant: Record<Variant, string> = {
	primary: cn(
		"bg-background/25 backdrop-blur-sm",
		"placeholder:text-muted-foreground disabled:text-disabled",
		"inset-ring inset-ring-border disabled:inset-ring-disabled focus:inset-ring-primary/75",
		// "border border-border disabled:border-disabled focus:border-primary/75",
		"focus:ring-4 focus:ring-primary/10 dark:focus:ring-primary/15",
		"invalid:inset-ring-red",
		// "data-[invalid=true]:border data-[invalid=true]:border-red/50 data-[invalid=true]:focus:border-red",
		"data-[invalid=true]:inset-ring-red/50 data-[invalid=true]:focus:inset-ring-red/75",
		"data-[invalid=true]:focus:ring-4 data-[invalid=true]:focus:ring-red/10",
	),
	secondary: cn(),
	destructive: cn(
		"bg-background",
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
}
const Input = forwardRef<HTMLInputElement, Readonly<InputProps>>((props, ref) => {
	const { onChange } = props

	return (
		<input
			ref={ref}
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
			onChange={onChange}
			onFocus={props.onFocus}
			onBlur={props.onBlur}
			onInvalid={e => e.preventDefault()}
			id={props.id}
			autoCapitalize={props.autoCapitalize}
			autoComplete={props.autoComplete}
			autoCorrect={props.autoCorrect ? "on" : "off"}
			aria-describedby={props.describedby}
			data-invalid={props.invalid}
			className={cn(
				"flex items-center w-full h-12 px-4",
				"transition transition-duration-150 transition-[box-shadow] ease-in",
				"peer rounded-2xl",
				input_variant[props.variant ?? "primary"],
				props.className,
			)}
		/>
	)
})
export default Input
