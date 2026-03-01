import type { ReactElement, ReactHTMLElement, ReactNode } from "react"
import Button, { type ButtonProps } from "./button"
import Label, { type LabelProps } from "./label"
import { IconChevronDown } from "@tabler/icons-react"
import { cn } from "./utils"
import type { ViewProps } from "./globals"
import React, { useState } from "react"
import { Postpone } from "next/dist/server/app-render/dynamic-rendering"

export interface SidebarProps extends ViewProps {}
export function Sidebar(props: SidebarProps) {
	return <div className={cn("flex flex-col w-full h-full p-4 gap-4 sm:max-w-68", props.className)}>{props.children}</div>
}
export interface SidebarHeaderProps extends ViewProps {}
export function SidebarHeader(props: SidebarHeaderProps) {
	return <div className={cn("flex flex-col gap-4", props.className)}>{props.children}</div>
}
export interface SidebarContentProps extends ViewProps {}
export function SidebarContent(props: SidebarContentProps) {
	return <div className={cn("flex flex-col gap-4 mb-auto", props.className)}>{props.children}</div>
}
export interface SidebarFooterProps extends ViewProps {}
export function SidebarFooter(props: SidebarFooterProps) {
	return <div className={cn("flex flex-col gap-4", props.className)}>{props.children}</div>
}

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

export interface SidebarGroupLabel extends Omit<LabelProps, "htmlFor"> {
	expanded?: boolean
}
export const SidebarGroupLabel = (props: SidebarGroupLabel) => {
	return (
		<Label
			htmlFor=""
			{...props}
			className="justify-end gap-2.25 w-full h-9 p-2.25 text-muted-foreground truncate hover:text-foreground hover:cursor-pointer transition duration-250 ease overflow-hidden z-1"
		>
			<p className="shrink-1 grow-1">{props.children}</p>
			<IconChevronDown size={16} className={cn("transition shrink-0", !props.expanded && "-rotate-90")} />
		</Label>
	)
}
export const SidebarGroupContent = (props: { children?: ReactNode; className?: string }) => {
	return (
		<ul className={cn("flex flex-col di", props.className)}>
			{props.children}
		</ul>
	)
}

export interface SidebarGroupProps {
	expanded?: boolean
	children?: ReactNode
	className?: string
}
export const SidebarGroup = (props: SidebarGroupProps) => {
	const [expanded, setExpanded] = useState(props.expanded)

	const children = React.Children.toArray(props.children)
	const label = React.cloneElement(children[0] as ReactElement<SidebarGroupLabel>, {
		expanded,
		onPress: () => setExpanded(!expanded),
	})
	const content_children = children[1] as ReactHTMLElement<HTMLElement>
	const content = React.cloneElement(content_children, {
		className: cn(expanded ? "dropdown" : "dropup", content_children.props.className),
	})

	return (
		<div className={cn("flex flex-col", props.className)}>
			{label}
			{content}
		</div>
	)
}
