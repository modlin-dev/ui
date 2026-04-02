import { cn } from "./utils"

export interface SkeletonProps {
	className?: string
}
export function Skeleton(props: SkeletonProps) {
	return <div className={cn("animate-pulse rounded-lg bg-muted", props.className)} />
}
