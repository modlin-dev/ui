"use client"
import { IconEye, IconEyeOff } from "@tabler/icons-react"
import Button from "./button"
import type { TextInputProps } from "./input"
import Input from "./input"
import { useState, type ReactNode } from "react"

export interface PasswordFieldProps extends TextInputProps {
	children?: ReactNode
}
export function PasswordField(props: PasswordFieldProps) {
	const [toggled, setToggled] = useState(false)

	return (
		<span className="relative group">
			<Input autoCapitalize="none" autoComplete="current-password" type={toggled ? "text" : "password"} {...props} />
			<span className="absolute top-0 right-0">
				<Button
					size="icon-md"
					shape="rounded"
					variant="ghost"
					onPress={() => setToggled(t => !t)}
					className="size-6.5 m-1.25 p-1 rounded-sm text-muted-foreground hover:text-foreground"
				>
					{toggled ? <IconEye /> : <IconEyeOff />}
				</Button>
			</span>
			{props.children}
		</span>
	)
}

export default PasswordField
