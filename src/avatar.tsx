"use client"
import { useState } from "react"
import { cn } from "./utils"
import Image, { type ImageProps } from "next/image"

export interface AvatarProps extends ImageProps {
    size?: number
	fallback: string
}
export default function Avatar({ fallback, ...props }: Readonly<AvatarProps>) {
	const [error, setError] = useState(false)
	if (!error) {
		return (
			<span
				className={cn(
					"relative flex shrink-0 overflow-hidden rounded-full bg-background ring ring-border text-sm font-medium leading-none",
					props.className,
				)}
			>
				<Image width={props.size ?? 32} height={props.size ?? 32} onError={() => setError(true)} {...props} className={cn("size-full", props.className)} />
			</span>
		)
	}
	return (
		<span
			className={cn(
				"relative flex shrink-0 size-8 overflow-hidden rounded-full bg-background ring ring-border text-sm font-medium leading-none",
				props.className,
			)}
		>
			<span className="flex items-center justify-center w-full font-mono text-sm">{fallback.slice(0, 3).toUpperCase()}</span>
		</span>
	)
}
