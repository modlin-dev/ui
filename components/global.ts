import { cn } from "@/lib/utils"

export type Variant =
	| "primary"
	| "secondary"
	| "destructive"
	| "outline"
	| "ghost"
	| "link"
	| "none"
export type Variants = Record<Variant, string>

export const input_variant: Variants = {
	primary: cn(
		"bg-background",
		"placeholder:text-description disabled:text-disabled",
		// "inset-ring inset-ring-(--disabled) disabled:inset-ring-(--outline) focus:inset-ring-(--description)",
		"border border-disabled disabled:border-outline focus:border-description",
		"focus:ring-4 focus:ring-foreground/5",
		"invalid:inset-ring-red",
	),
	secondary: cn(),
	destructive: cn(
		"bg-background",
		"placeholder:text-description disabled:text-disabled",
		// "inset-ring inset-ring-(--red)/50 disabled:inset-ring-(--red)/25 focus:inset-ring-(--red)",
		"border border-red/50 disabled:border-red/25 focus:border-red",
		"focus:ring-4 focus:ring-red/5",
	),
	outline: cn(),
	ghost: cn(),
	link: cn(),
	none: cn("text-()"),
}
