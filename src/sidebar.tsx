import type { ReactNode } from "react"
import Button, { type ButtonProps } from "./button"
import Label from "./label"
import { IconChevronDown } from "@tabler/icons-react"
import { cn } from "./utils"

export const SidebarMenuItem = (props: { className?: string; children?: ReactNode }) => {
	return <li className={cn("flex flex-col", props.className)}>{props.children}</li>
}
export interface SidebarMenuButtonProps extends ButtonProps {
	selected?: boolean
	collapsed?: boolean
}
export const SidebarMenuButton = (props: SidebarMenuButtonProps) => {
	return (
		<Button
			variant="ghost"
			size={props.collapsed ? "icon" : "md"}
			{...props}
			className={cn(
				"justify-start truncate",
				"p-2.25 gap-2.25 rounded-[18px] corner-squircle",
				"[&>svg]:size-4.5",
				// "[&>svg]:size-5",
				// "sm:[&>svg]:size-4 sm:[&>svg]:scale-115",
				// "p-3 gap-3 rounded-xl",
				// "sm:h-9 sm:text-sm/4 sm:p-2.5 sm:gap-2.5 sm:rounded-[10px]",
				props.selected && "bg-secondary",
				props.collapsed && "size-9",
				props.className,
			)}
		>
			{props.children}
		</Button>
	)
}

export interface SidebarGroupLabel {
	expanded?: boolean
	children?: ReactNode
	className?: string
}
export const SidebarGroupLabel = (props: SidebarGroupLabel) => {
	return (
		<Label
			htmlFor=""
			className="justify-end gap-2.25 w-full h-9 p-2.25 text-muted-foreground truncate hover:text-foreground hover:cursor-pointer transition ease-out duration-200 overflow-hidden"
		>
			<p className="shrink-1 grow-1">{props.children}</p>
			<IconChevronDown size={16} className={cn("transition shrink-0", !props.expanded && "-rotate-90")} />
		</Label>
	)
}
export const SidebarGroupContent = (props: { children?: ReactNode; className?: string }) => {
	return <ul className={cn("flex flex-col", props.className)}>{props.children}</ul>
}

export interface SidebarGroupProps {
	children?: ReactNode
	className?: string
}
export const SidebarGroup = (props: SidebarGroupProps) => {
	return <div className={cn("flex flex-col", props.className)}>{props.children}</div>
}
