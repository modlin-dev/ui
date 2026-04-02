import { Fragment, type JSX, type ReactNode } from "react"
import type { ViewProps } from "./globals"
import { cn } from "./utils"

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
	renderItem(item: {
		item: ItemT
		index: number
		separators: {
			highlight: () => void
			unhighlight: () => void
			updateProps: (select: "leading" | "trailing", newProps: unknown) => void
		}
	}): JSX.Element
	keyExtractor?: (item: ItemT, index: number) => string
	ItemSeparatorComponent?: ReactNode
}
export function FlatList<Item>(props: FlatListProps<Item>) {
	return (
		<ul style={props.style} className={props.className}>
			{props.data.map((item, index) => (
				<Fragment key={props.keyExtractor ? props.keyExtractor(item, index) : index}>
					<li>
						{props.renderItem({
							item,
							index,
							separators: {
								highlight: () => {},
								unhighlight: () => {},
								updateProps: () => {}
							}
						})}
					</li>
					{props.ItemSeparatorComponent}
				</Fragment>
			))}
		</ul>
	)
}

export default View
