"use client"
import { IconEye, IconEyeOff, IconEyeX } from "@tabler/icons-react"
import Button from "./button"
import type { InputProps } from "./input"
import Input from "./input"
import { useState } from "react"

export interface PasswordFieldProps extends InputProps {}
export function PasswordField(props: PasswordFieldProps) {
	const [toggled, setToggled] = useState(false)

	return (
		<span className="relative group">
			<Input autoCapitalize="none" autoComplete="current-password" type={toggled ? "text" : "password"} {...props} />
			<Button size="icon-sm" shape="rounded" variant="ghost" onPress={() => setToggled(t => !t)} className="absolute top-0 right-0 m-1.5 size-6 p-1 rounded-sm opacity-0 hover:opacity-100 group-hover:opacity-100">
				{toggled ? <IconEye /> : <IconEyeOff />}
			</Button>
		</span>
	)
}

export default PasswordField
