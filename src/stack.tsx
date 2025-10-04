import { cn } from "./utils"

interface StackProps {
	align?: "start" | "center" | "end"
	justify?: "start" | "center" | "end"
	gap?: number
	direction?: "uphold" | "reverse"
	children: React.ReactNode
}

function Stack({
	align,
	justify,
	gap,
	direction,
	children,
	...props
}: React.HTMLAttributes<HTMLElement> & Readonly<StackProps>) {
	return (
		<div
			{...props}
			className={cn(`flex flex-col`, props.className)}
			style={{
				alignItems: align,
				justifyContent: justify,
				gap: gap,
				...props.style,
			}}
		>
			{children}
		</div>
	)
}
export { Stack as VStack }

export function HStack(
	props: React.HTMLAttributes<HTMLDivElement> & StackProps,
) {
	return (
		<div
			{...props}
			className={`${props.className} flex`}
			style={{
				alignItems: props.align,
				justifyContent: props.justify,
				gap: props.gap,
				...props.style,
			}}
		>
			{props.children}
		</div>
	)
}

export default Stack
