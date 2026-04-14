import { Fragment, type JSX, type ReactComponentElement, type ReactNode } from "react"
import type { ViewProps } from "./globals"
import { cn } from "./utils"
import Separator from "./separator"

export function View(props: ViewProps) {
	return <div {...props} />
}

export interface StackProps extends ViewProps {
	alignment?: "leading" | "trailing"
	spacing?: number
}
export function Stack(props: StackProps) {
	return <div className={cn("flex flex-col", props.className)}>{props.children}</div>
}

export interface ScrollViewProps extends ViewProps {}
export function ScrollView(props: ScrollViewProps) {
	return (
		<div style={props.style} className={cn("flex flex-col overflow-y-auto", props.className)}>
			{props.children}
		</div>
	)
}

export interface FlatListProps<ItemT> extends ViewProps {
	data: ItemT[]
	draggable?: boolean
	renderItem(item: {
		item: ItemT
		index: number
		separators: {
			highlight: () => void
			unhighlight: () => void
			updateProps: (select: "leading" | "trailing", newProps: unknown) => void
		}
	}): JSX.Element | null
	keyExtractor?: (item: ItemT, index: number) => string
	ItemSeparatorComponent?: JSX.Element | React.FC
	ListFooterComponent?: JSX.Element | React.FC
}
export function FlatList<Item>({ renderItem, keyExtractor, ItemSeparatorComponent, ListFooterComponent, ...props }: FlatListProps<Item>) {
	const size = props.data.length - 1
	const Separator = typeof ItemSeparatorComponent === "function" ? <ItemSeparatorComponent /> : ItemSeparatorComponent
	const Footer = typeof ListFooterComponent === "function" ? <ListFooterComponent /> : ListFooterComponent

	return (
		<ul style={props.style} className={props.className}>
			{props.data.map((item, index) => {
				const comp = renderItem({
					item,
					index,
					separators: {
						highlight: () => {},
						unhighlight: () => {},
						updateProps: () => {}
					}
				})
				if (comp) {
					return (
						<Fragment key={keyExtractor ? keyExtractor(item, index) : index}>
							<li draggable={props.draggable}>{comp}</li>
							{index !== size && Separator}
						</Fragment>
					)
				}
			})}
			{Footer}
		</ul>
	)
}

export default View
