"use client"
import type { ReactElement, ReactNode } from "react"
import Button, { type ButtonProps } from "./button"
import Label, { type LabelProps } from "./label"
import { IconChevronDown, IconLoader2 } from "@tabler/icons-react"
import { cn } from "./utils"
import type { ViewProps } from "./globals"
import React, { useEffect, useState } from "react"
import { Skeleton } from "./skeleton"

export interface SidebarProps extends ViewProps {
	collasped?: boolean
	size?: "sm" | "lg"
}
export function Sidebar(props: SidebarProps) {
	return <div className={cn("flex flex-col w-full h-full p-4 gap-4 sm:max-w-68", props.className)}>{props.children}</div>
}

export interface SidebarHeaderProps extends ViewProps {}
export function SidebarHeader(props: SidebarHeaderProps) {
	return <div className={cn("flex flex-col gap-4", props.className)}>{props.children}</div>
}
export interface SidebarContentProps extends ViewProps {}
export function SidebarContent(props: SidebarContentProps) {
	return <div className={cn("flex flex-col gap-4 flex-1 min-h-0 overflow-y-auto [scrollbar-width:none]", props.className)}>{props.children}</div>
}
export interface SidebarFooterProps extends ViewProps {}
export function SidebarFooter(props: SidebarFooterProps) {
	return <div className={cn("flex flex-col gap-4", props.className)}>{props.children}</div>
}

export interface SidebarMenuItemProps extends ViewProps {}
export const SidebarMenuItem = (props: SidebarMenuItemProps) => {
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
			size={props.collapsed ? "icon-md" : "md"}
			shape="rounded"
			{...props}
			className={cn(
				"justify-start p-2.25 truncate [&>svg]:shrink-0",
				// "[&>svg]:size-5",
				// "sm:[&>svg]:size-4 sm:[&>svg]:scale-115",
				// "p-3 gap-3 rounded-xl",
				// "sm:h-9 sm:text-sm/4 sm:p-2.5 sm:gap-2.5 sm:rounded-[10px]",
				props.selected && "bg-secondary",
				props.className
			)}
		>
			{props.children}
		</Button>
	)
}

export interface SidebarGroupLabelProps extends Omit<LabelProps, "htmlFor"> {
	expanded?: boolean
}
export const SidebarGroupLabel = (props: SidebarGroupLabelProps) => {
	return (
		<Label
			htmlFor=""
			{...props}
			className="justify-end gap-2.25 w-full h-9 p-2.25 text-muted-foreground truncate hover:text-foreground hover:cursor-pointer transition duration-250 ease [&>svg]:size-4.5 z-1"
		>
			{props.children}
			<IconChevronDown className={cn("shrink-0 ml-auto transition duration-250 ease", !props.expanded && "-rotate-90")} />
		</Label>
	)
}

export interface SidebarGroupContentProps extends ViewProps {
	expanded?: boolean
	loading?: boolean
}
export const SidebarGroupContent = (props: SidebarGroupContentProps) => {
	return (
		<ul hidden={!(props.expanded ?? true)} className={cn("flex flex-col", props.className)}>
			{props.children}
			{props.loading && (
				<SidebarMenuItem>
					<SidebarMenuButton className="text-muted-foreground">
						<Skeleton className="size-4.5 rounded-full" />
						<Skeleton className="w-full h-4" />
					</SidebarMenuButton>
				</SidebarMenuItem>
			)}
		</ul>
	)
}

export interface SidebarGroupProps {
	id?: string
	expanded?: boolean
	children?: ReactNode
	className?: string
}
export const SidebarGroup = (props: SidebarGroupProps) => {
	const children = React.Children.toArray(props.children)
	const first = children[0] as ReactElement<SidebarGroupLabelProps>
	const last = children[1] as ReactElement<SidebarGroupContentProps>

	const [expanded, setExpanded] = useState(props.expanded)
	const [mounted, setMounted] = useState(false)

	const key = props.id ?? "group"
	const label = React.cloneElement(first, {
		expanded,
		onPress: () => setExpanded(!expanded)
	})
	const content = React.cloneElement(last, {
		expanded
	})

	useEffect(() => {
		setMounted(true)
		const saved = localStorage.getItem(key)
		if (saved) setExpanded(saved === "true")
	}, [key])

	useEffect(() => {
		if (mounted) localStorage.setItem(key, expanded ? "true" : "false")
	}, [expanded, mounted, key])

	return (
		<div className={cn("flex flex-col", props.className)}>
			{label}
			{content}
		</div>
	)
}
