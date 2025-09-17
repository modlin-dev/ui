import { cn } from "@/lib/utils"

export interface FooterProps {
	children: React.ReactNode
}
export default function Footer(
	props: Readonly<FooterProps> & React.HTMLAttributes<HTMLElement>,
) {
	return <div className={cn("flex", props.className)}>{props.children}</div>
}
