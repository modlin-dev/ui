import { cn } from "./utils"

export interface HeadingProps {
	children: React.ReactNode
	className?: string
}
export default function Heading(props: Readonly<HeadingProps>) {
	return (
		<h1
			className={cn(
				"scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance",
				props.className,
			)}
		>
			{props.children}
		</h1>
	)
}

export function Heading1(props: Readonly<HeadingProps>) {
	return (
		<h1
			className={cn(
				"scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance",
				props.className,
			)}
		>
			{props.children}
		</h1>
	)
}
export function Heading2(props: Readonly<HeadingProps>) {
	return (
		<h2
			className={cn(
				"scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0",
				props.className,
			)}
		>
			{props.children}
		</h2>
	)
}
export function Heading3(props: Readonly<HeadingProps>) {
	return (
		<h3
			className={cn(
				"scroll-m-20 text-2xl font-semibold tracking-tight",
				props.className,
			)}
		>
			{props.children}
		</h3>
	)
}
export function Heading4(props: Readonly<HeadingProps>) {
	return (
		<h4
			className={cn(
				"scroll-m-20 text-xl font-semibold tracking-tight",
				props.className,
			)}
		>
			{props.children}
		</h4>
	)
}
export function Heading5(props: Readonly<HeadingProps>) {
	return (
		<h5
			className={cn(
				"scroll-m-20 text-lg font-medium",
				props.className,
			)}
		>
			{props.children}
		</h5>
	)
}
export function Heading6(props: Readonly<HeadingProps>) {
	return (
		<h6
			className={cn(
				"scroll-m-20 text-base font-medium",
				props.className,
			)}
		>
			{props.children}
		</h6>
	)
}
