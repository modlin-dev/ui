export interface RadioGroupItemProps {
	value: string
	name?: string
	id?: string
}
export function RadioGroupItem(props: Readonly<RadioGroupItemProps>) {
	return (
		<input
			type="radio"
			value={props.value}
			name={props.name}
			id={props.id}
		></input>
	)
}

export interface RadioGroupProps {
	default?: string
	name?: string
	required?: boolean
	children: React.ReactNode
}
export function RadioGroup(props: Readonly<RadioGroupProps>) {
	return (
		<fieldset
			defaultValue={props.default}
			name={props.name}
			className="grid gap-3"
		>
			{props.children}
		</fieldset>
	)
}
