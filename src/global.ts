import { cn } from "./utils"

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
		"inset-ring inset-ring-border disabled:inset-ring-disabled focus:inset-ring-primary/75",
		// "border border-border disabled:border-disabled focus:border-primary/75",
		"focus:ring-4 focus:ring-primary/10",
		"invalid:inset-ring-red",
		// "data-[invalid=true]:border data-[invalid=true]:border-red/50 data-[invalid=true]:focus:border-red",
		"data-[invalid=true]:inset-ring-red/50 data-[invalid=true]:focus:inset-ring-red/75",
		"data-[invalid=true]:focus:ring-4 data-[invalid=true]:focus:ring-red/10",
	),
	secondary: cn(),
	destructive: cn(
		"bg-background",
		"placeholder:text-description disabled:text-disabled",
		"inset-ring inset-ring-red/50 disabled:inset-ring-red/25 focus:inset-ring-red/75",
		"focus:ring-4 focus:ring-red/10",
		// "border border-red/50 disabled:border-red/25 focus:border-red",
		"focus:ring-4 focus:ring-red/5",
	),
	outline: cn(),
	ghost: cn(),
	link: cn(),
	none: cn("text-()"),
}
