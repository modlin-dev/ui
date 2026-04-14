import type { ViewProps } from "./globals"
import { cn } from "./utils"

export function Kbd(props: ViewProps) {
	return (
		<kbd
			{...props}
			className={cn(
				"pointer-events-none inline-flex h-5 w-fit min-w-5 items-center justify-center gap-1 rounded-sm bg-muted px-1 font-icons text-xs text-foreground select-none",
				props.className
			)}
		/>
	)
}

export function KbdGroup(props: ViewProps) {
	return <kbd {...props} className={cn("inline-flex items-center gap-1", props.className)} />
}

export default Kbd
