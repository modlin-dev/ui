"use client"
import Button, { type ButtonProps } from "./button"

export type CopyStatus = "success" | "failed" | "none"

export interface CopyProps extends ButtonProps {
	copy?: string
	copied?: boolean
	onCopy?: (copied: boolean) => void | Promise<void>
	onStatusChange?: (status: CopyStatus) => void | Promise<void>
}
export function Copy(props: CopyProps) {
	return (
		<Button
			size="none"
			variant="none"
			{...props}
			onPress={async e => {
				if (props.copy) {
					if (navigator.clipboard) {
						try {
							await navigator.clipboard.writeText(props.copy)
							if (props.onCopy) await props.onCopy(true)
							if (props.onStatusChange) await props.onStatusChange("success")
						} catch {
							if (props.onCopy) await props.onCopy(false)
							if (props.onStatusChange) await props.onStatusChange("failed")
						}
					}
				}
				await props.onPress?.(e)
			}}
		/>
	)
}

export default Copy
