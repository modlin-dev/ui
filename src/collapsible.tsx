"use client"
import { createContext, useContext, useState, useCallback, type ReactNode } from "react"
import type { ViewProps } from "./globals"

export interface CollapsibleContext {
	open: boolean
	toggle(): void
}
const CollapsibleContext = createContext<CollapsibleContext | null>(null)

export interface CollapsibleProps {
	defaultOpen?: boolean
	open?: boolean
	onOpenChange?(open: boolean): void
	children?: ReactNode
}
export function Collapsible(props: CollapsibleProps) {
	const [uncontrolledOpen, setUncontrolledOpen] = useState(props.defaultOpen || false)
	const open = props.open ?? uncontrolledOpen

	const toggle = useCallback(() => {
		const nextOpen = !open
		if (!props.open) setUncontrolledOpen(nextOpen)
		props.onOpenChange?.(nextOpen)
	}, [props.open, open, props.onOpenChange])

	return <CollapsibleContext.Provider value={{ open, toggle }}>{props.children}</CollapsibleContext.Provider>
}

export function useCollapsible() {
	const context = useContext(CollapsibleContext)
	if (!context) throw new Error("`useCollapsible` must be used within a `Collapsible`")
	return context
}

export interface CollapsibleTriggerProps extends ViewProps {}
export function CollapsibleTrigger(props: CollapsibleTriggerProps) {
	const { toggle } = useCollapsible()
	return <button type="button" onClick={toggle} {...props} />
}

export function CollapsibleContent(props: ViewProps) {
	const { open } = useCollapsible()
	if (!open) return null
	return props.children
}
