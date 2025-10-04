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

Heading.H1 = (props: Readonly<HeadingProps>) => {
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
Heading.H2 = (props: Readonly<HeadingProps>) => {
	return (
		<h1
			className={cn(
				"scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0",
				props.className,
			)}
		>
			{props.children}
		</h1>
	)
}
Heading.H3 = (props: Readonly<HeadingProps>) => {
	return (
		<h1
			className={cn(
				"scroll-m-20 text-2xl font-semibold tracking-tight",
				props.className,
			)}
		>
			{props.children}
		</h1>
	)
}
Heading.H4 = (props: Readonly<HeadingProps>) => {
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
Heading.H5 = (props: Readonly<HeadingProps>) => {
	return (
		<h4
			className={cn(
				"scroll-m-20 text-lg font-medium",
				props.className,
			)}
		>
			{props.children}
		</h4>
	)
}
Heading.H6 = (props: Readonly<HeadingProps>) => {
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
