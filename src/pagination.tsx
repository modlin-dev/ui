import type { ViewProps } from "./globals"
import { cn } from "./utils"
import Button, { type ButtonProps } from "./button"
import Link, { type LinkProps } from "next/link"
import { IconChevronLeft, IconChevronRight, IconDots } from "@tabler/icons-react"

export interface PaginationProps extends ViewProps {}
export function Pagination(props: PaginationProps) {
	return <nav aria-label="pagination" {...props} className={cn("flex justify-center mx-auto", props.className)} />
}

export interface PaginationContentProps extends ViewProps {}
export function PaginationContent(props: PaginationContentProps) {
	return <ul {...props} className={cn("flex items-center gap-2", props.className)} />
}

export interface PaginationItemProps extends ViewProps {}
export function PaginationItem(props: PaginationItemProps) {
	return <ul {...props} />
}

export interface PaginationLinkProps extends ViewProps {
	/* @platform android, ios, web */
	isActive?: boolean
}
export function PaginationLink(props: PaginationLinkProps & LinkProps & ButtonProps) {
	return (
		<Button asChild variant={props.isActive ? "secondary" : "ghost"} size="icon-sm" shape="rounded" {...props}>
			<Link aria-current={props.isActive && "page"} href={props.href}>
				{props.children}
			</Link>
		</Button>
	)
}
export interface PaginationButtonProps extends ButtonProps {
	/* @platform android, ios, web */
	isActive?: boolean
}
export function PaginationButton(props: PaginationButtonProps) {
	return <Button variant={props.isActive ? "secondary" : "ghost"} size="icon-sm" shape="rounded" {...props} />
}

export interface PaginationPreviousProps extends PaginationButtonProps {}
export function PaginationPrevious(props: PaginationPreviousProps) {
	return (
		<PaginationButton label="Go to previous page" {...props}>
			<IconChevronLeft />
		</PaginationButton>
	)
}

export interface PaginationNextProps extends PaginationButtonProps {}
export function PaginationNext(props: PaginationNextProps) {
	return (
		<PaginationButton label="Go to previous page" {...props}>
			<IconChevronRight />
		</PaginationButton>
	)
}

export interface PaginationEllipsisProps extends ViewProps {}
export function PaginationEllipsis(props: PaginationEllipsisProps) {
	return (
		<span aria-hidden {...props} className={cn("flex items-center justify-center size-8 text-muted-foreground [&_svg:not([class*='size-'])]:size-4", props.className)}>
			<IconDots />
		</span>
	)
}
