import { cloneElement } from "react"
import type { ViewProps } from "./globals"
import { cn, mergeProps } from "./utils"

export interface ItemProps extends ViewProps {
	asChild?: boolean
}
export function Item(props: ItemProps) {
	if (props.asChild) {
		const children = props.children as React.ReactHTMLElement<HTMLElement>
		const itemProps = {
			className: cn("flex gap-2 p-4 hover:bg-secondary [&>svg]:size-4 transition duration-250 ease", props.className, children.props.className)
		}
		return cloneElement(children, mergeProps(children.props, itemProps))
	}
	return <li className={cn("flex gap-2 p-4 hover:bg-secondary [&>svg]:size-4 transition duration-250 ease", props.className)} />
}

export default Item
