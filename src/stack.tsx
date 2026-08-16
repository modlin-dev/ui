import { forwardRef } from "react"
import { cn } from "./utils"
import type { ViewProps } from "./view"

export interface StackProps extends ViewProps {
	ref?: React.Ref<HTMLDivElement>
	alignment?: "leading" | "trailing"
	spacing?: number
}
export const Stack = forwardRef<HTMLDivElement, StackProps>((props, ref) => {
	return (
		<div ref={ref} {...props} className={cn("flex flex-col", props.className)}>
			{props.children}
		</div>
	)
})

export { Stack as VStack }

export const HStack = forwardRef<HTMLDivElement, StackProps>((props, ref) => {
	return (
		<div ref={ref} {...props} className={cn("flex", props.className)}>
			{props.children}
		</div>
	)
})

export default Stack
