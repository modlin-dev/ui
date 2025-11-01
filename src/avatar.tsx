import { cn } from "./utils"
import Image, { type ImageProps } from "next/image"

export interface AvatarProps extends ImageProps {
	fallback: string
}
export default function Avatar({ fallback, ...props }: Readonly<AvatarProps>) {
	const show = false

	return (
		<span
			className={cn(
				"relative flex shrink-0 size-8 overflow-hidden rounded-full ring ring-(--outline)",
				props.className,
			)}
		>
			{show ? (
				<Image {...props} className="aspect-square size-full" />
			) : (
				<span className="flex items-center justify-center w-full text-sm font-medium leading-none">
					{fallback.slice(0, 3).toUpperCase()}
				</span>
			)}
		</span>
	)
}
