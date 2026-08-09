"use client"
import { createContext, useContext, useState, useCallback, type ReactNode } from "react"
import Button, { type ButtonProps } from "./button"
import Label, { type LabelProps } from "./label"
import { cn } from "./utils"
import type { ViewProps } from "./globals"
import { Skeleton } from "./skeleton"
import { IconLayoutSidebarLeftCollapse, IconLayoutSidebarLeftExpand } from "@tabler/icons-react"
import { useMobile } from "./use-mobile"

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
	return <li {...props} className={cn("flex flex-col", props.className)} />
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
	asChild?: boolean
}
export const SidebarGroupLabel = (props: SidebarGroupLabelProps) => {
	return (
		<Label
			htmlFor=""
			{...props}
			className={cn("text-start gap-2.25 w-full h-9 p-2.25 text-muted-foreground truncate transition duration-250 ease [&>svg]:size-4.5", props.className)}
		>
			{props.children}
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
	return <div {...props} className={cn("flex flex-col", props.className)} />
}

export interface SidebarContextProps {
	open: boolean
	setOpen(open: boolean): void
	openMobile: boolean
	setOpenMobile(open: boolean): void
	isMobile: boolean
	toggleSidebar(): void
}
export const SidebarContext = createContext<SidebarContextProps | null>(null)

export function useSidebar() {
	const context = useContext(SidebarContext)
	if (!context) throw new Error("useSidebar must be used within a SidebarProvider.")
	return context
}

export interface SidebarProviderProps {
	defaultOpen?: boolean
	open?: boolean
	onOpenChange?: (open: boolean) => void
	children?: ReactNode
}
export function SidebarProvider(props: SidebarProviderProps) {
	const [uncontrolledOpen, setUncontrolledOpen] = useState(props.defaultOpen ?? true)
	const [uncontrolledMobileOpen, setUncontrolledMobileOpen] = useState(props.defaultOpen ?? false)
	const { isMobile } = useMobile()
	const open = props.open ?? uncontrolledOpen
	const openMobile = props.open ?? uncontrolledMobileOpen

	const setOpen = useCallback(
		(value: boolean) => {
			if (!props.open) setUncontrolledOpen(value)
			props.onOpenChange?.(value)
		},
		[props.open, props.onOpenChange]
	)
	const setOpenMobile = useCallback(
		(value: boolean) => {
			if (!props.open) setUncontrolledMobileOpen(value)
			props.onOpenChange?.(value)
		},
		[props.open, props.onOpenChange]
	)

	const toggleSidebar = useCallback(() => {
		if (!isMobile) {
			setOpen(!open)
		} else {
			setOpenMobile(!openMobile)
		}
	}, [setOpen, setOpenMobile, open, openMobile, isMobile])

	return <SidebarContext.Provider value={{ open, setOpen, openMobile, setOpenMobile, isMobile, toggleSidebar }}>{props.children}</SidebarContext.Provider>
}

export function SidebarTrigger(props: ButtonProps) {
	const { open, toggleSidebar } = useSidebar()

	return (
		<Button variant="outline" size="icon-md" shape="rounded" onPress={toggleSidebar} {...props}>
			{open ? <IconLayoutSidebarLeftCollapse /> : <IconLayoutSidebarLeftExpand />}
		</Button>
	)
}
