import { cn } from "./utils"
import Image, { type ImageProps } from "next/image"

export interface AvatarProps extends ImageProps {
	fallback: string
}
export default function Avatar({ fallback, ...props }: Readonly<AvatarProps>) {
	const show = false

	return (
		<span className={cn("relative flex shrink-0 size-8 overflow-hidden rounded-full inset-ring inset-ring-border text-sm font-medium leading-none", props.className)}>
			{show ? (
				<Image {...props} className="aspect-square size-full" />
			) : (
				<span className="flex items-center justify-center w-full">{fallback.slice(0, 3).toUpperCase()}</span>
			)}
		</span>
	)
}
