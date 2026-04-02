"use client"
import ExternalLink, { type LinkProps as ExternalLinkProps } from "next/link"
import { useState, type ReactNode } from "react"
import { cn } from "./utils"
import { IconCopy, IconCopyCheck } from "@tabler/icons-react"

export interface LinkProps extends ExternalLinkProps {
	copy?: string
	className?: string
	children?: ReactNode
	copyable?: boolean
}
export default function Link(props: LinkProps) {
	const [copied, setCopied] = useState(false)

	if (props.copyable || props.copy) {
		return (
			<span className="group">
				<ExternalLink {...props} className={cn("transition duration-250 ease hover:underline text-primary/75 hover:text-primary", props.className)}>
					{props.children}
				</ExternalLink>
				<span className="size-5 ml-1.5 transition duration-250 ease opacity-0 text-muted-foreground group-hover:opacity-100 hover:opacity-100 hover:text-foreground">
					{copied ? (
						<IconCopyCheck
							size={16}
							onClick={async () => {
								try {
									await navigator.clipboard.writeText(props.copy || props.href.toString())
									setCopied(true)
								} catch {
									setCopied(false)
								}
							}}
							className="absolute inline m-0.5 transition duration-250 ease hover:cursor-pointer hover:text-foreground"
						/>
					) : (
						<IconCopy
							size={16}
							onClick={async () => {
								try {
									await navigator.clipboard.writeText(props.copy || props.href.toString())
									setCopied(true)
								} catch {
									setCopied(false)
								}
							}}
							className="absolute inline m-0.5 transition duration-250 ease hover:cursor-pointer hover:text-foreground"
						/>
					)}
				</span>
			</span>
		)
	}
	return <ExternalLink {...props} className={cn("transition duration-250 ease text-primary/75 hover:underline hover:text-primary", props.className)} />
}
