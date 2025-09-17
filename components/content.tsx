import { cn } from "@/lib/utils"

export interface ContentProps {
	children: React.ReactNode
}
export default function Content(
	props: Readonly<ContentProps> & React.HTMLAttributes<HTMLElement>,
) {
	return <div className={cn("flex", props.className)}>{props.children}</div>
}
