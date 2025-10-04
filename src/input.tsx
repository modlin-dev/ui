import {
	type ChangeEventHandler,
	type FocusEventHandler,
	type HTMLInputAutoCompleteAttribute,
	type InputEventHandler,
	forwardRef,
} from "react"
import { input_variant, type Variant } from "./global"
import { cn } from "./utils"

export interface InputProps {
	variant?: Variant

	type?: "text" | "password" | "email" | "number" | "tel" | "url" | "file"
	inputMode?:
		| "search"
		| "text"
		| "email"
		| "tel"
		| "url"
		| "none"
		| "numeric"
		| "decimal"
	placeholder?: string
	defaultValue?: string

	name?: string
	pattern?: string // validation
	min?: number | string // validation
	max?: number | string // validation
	maxLength?: number // validation
	minLength?: number // validation
	required?: boolean // validation

	readOnly?: boolean
	disabled?: boolean

	value?: string
	onChange?: ChangeEventHandler<HTMLInputElement>
	onInput?: InputEventHandler<HTMLInputElement>
	onBlur?: FocusEventHandler<HTMLInputElement>

	id?: string
	autoComplete?: HTMLInputAutoCompleteAttribute
	// onChange?: (value: string) => void
	className?: string
	invalid?: boolean
    describedby?: string
}
const Input = forwardRef<HTMLInputElement, Readonly<InputProps>>(
	(props, ref) => {
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
				onBlur={props.onBlur}
				onInvalid={e => e.preventDefault()}
				id={props.id}
				autoComplete={props.autoComplete}
				data-invalid={props.invalid}
                aria-describedby={props.describedby}
				className={cn(
					"flex items-center w-full h-12 px-4",
					"peer rounded-2xl",
					"transition transition-duration-150 transition-[border,box-shadow] ease-in",
					input_variant[props.variant ?? "primary"],
					props.className,
				)}
			/>
		)
	},
)
export default Input
