import type { ChangeEvent, FocusEvent, HTMLInputAutoCompleteAttribute, InvalidEvent, ReactNode } from "react"
import { cn } from "./utils"
import { cva, type VariantProps } from "class-variance-authority"

export const textInputVariants = cva("peer flex items-center w-full transition duration-250 ease", {
	variants: {
		variant: {
			primary: cn(
				"bg-background inset-ring inset-ring-border placeholder:text-muted-foreground disabled:text-disabled focus:inset-ring-primary/75 focus:ring-4 focus:ring-primary/10 dark:focus:ring-primary/15 invalid:inset-ring-red",
				"data-[invalid=true]:inset-ring-red/50 data-[invalid=true]:focus:inset-ring-red/75",
				"data-[invalid=true]:focus:ring-4 data-[invalid=true]:focus:ring-red/10"
			),
			// "border border-border disabled:border-disabled focus:border-primary/75",
			// "data-[invalid=true]:border data-[invalid=true]:border-red/50 data-[invalid=true]:focus:border-red",
			secondary: cn(
				"bg-secondary inset-ring inset-ring-border placeholder:text-muted-foreground disabled:text-disabled focus:inset-ring-primary/75 focus:ring-4 focus:ring-primary/10 dark:focus:ring-primary/15 invalid:inset-ring-red",
				"data-[invalid=true]:inset-ring-red/50 data-[invalid=true]:focus:inset-ring-red/75",
				"data-[invalid=true]:focus:ring-4 data-[invalid=true]:focus:ring-red/10"
			),
			// "border border-border disabled:border-disabled focus:border-primary/75",
			// "data-[invalid=true]:border data-[invalid=true]:border-red/50 data-[invalid=true]:focus:border-red",
			destructive: cn(
				"bg-background/25 backdrop-blur-sm",
				"placeholder:text-muted-foreground disabled:text-disabled",
				"inset-ring inset-ring-red/50 disabled:inset-ring-red/25 focus:inset-ring-red/75",
				"focus:ring-4 focus:ring-red/10",
				// "border border-red/50 disabled:border-red/25 focus:border-red",
				"focus:ring-4 focus:ring-red/5"
			),
			none: ""
		},
		size: {
			sm: "gap-2 h-8 px-3 rounded-lg text-sm",
			md: "gap-2.25 h-9 px-3 rounded-[9px] text-sm",
			lg: "gap-2.75 h-11 px-3.5 rounded-xl",
			xl: "gap-3 h-12 px-4 rounded-2xl",
			none: ""
		},
        shape: {
            square: "",
            rounded: "",
            pill: "rounded-full"
        }
	},
	defaultVariants: {
		variant: "primary",
		size: "xl"
	}
})

type InputType = "text" | "password" | "email" | "number" | "tel" | "url" | "file"
type InputMode = "search" | "text" | "email" | "tel" | "url" | "none" | "numeric" | "decimal"
type BlurEvent = FocusEvent<HTMLInputElement, Element>

export interface TextInputProps extends VariantProps<typeof textInputVariants> {
	/** @android @ios @web */
	placeholder?: string
	/** @android @ios @web */
	defaultValue?: string
	/** @android @ios @web */
	value?: string
	/** @android @ios @web */
	inputMode?: InputMode
	/** @android @ios @web */
	autoCapitalize?: "none" | "sentences" | "words" | "characters"
	/** @android @ios @web */
	autoComplete?: HTMLInputAutoCompleteAttribute
	/** @android @ios @web */
	autoCorrect?: boolean
	/** @android @ios @web */
	autoFocus?: boolean
	/** @android @ios @web */
	readOnly?: boolean
	/** @android @ios @web */
	maxLength?: number
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
	onChangeText?(text: string): void
	/** @android @ios @web */
	onFocus?(event: FocusEvent<HTMLInputElement>): void
	/** @android @ios @web */
	onBlur?(event: BlurEvent): void
	/** @web */
	onInvalid?(event: InvalidEvent<HTMLInputElement>): void
}
export function TextInput(props: TextInputProps) {
	const onChangeText = props.onChangeText
	return (
		<input
			type={props.type ?? "text"}
			placeholder={props.placeholder}
			defaultValue={props.defaultValue}
			value={props.value}
			inputMode={props.inputMode}
			autoCapitalize={props.autoCapitalize}
			autoComplete={props.autoComplete}
			autoCorrect={props.autoCorrect ? "on" : "off"}
			autoFocus={props.autoFocus}
			readOnly={props.readOnly}
			maxLength={props.maxLength}
			name={props.name}
			min={props.min}
			max={props.max}
			minLength={props.minLength}
			pattern={props.pattern}
			required={props.required}
			disabled={props.disabled}
			id={props.id}
			aria-describedby={props.describedby}
			data-invalid={props.invalid}
			onChange={onChangeText ? e => onChangeText(e.target.value) : props.onChange}
			onFocus={props.onFocus}
			onBlur={props.onBlur}
			onInvalid={props.onInvalid}
			className={cn(
				textInputVariants({
					variant: props.variant,
					size: props.size,
					className: props.className
				})
			)}
		/>
	)
}
export default TextInput

export function Prompt(props: TextInputProps) {
	return <TextInput variant="none" size="none" {...props} />
}
export interface InputGroupProps extends TextInputProps {
	children?: ReactNode
}
export function InputGroup(props: InputGroupProps) {
	return (
		<span
			className={cn(
				textInputVariants({
					variant: props.variant,
					size: props.size,
					className: props.className
				})
			)}
		>
			{props.children}
		</span>
	)
}
