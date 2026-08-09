// import { clsx, type ClassValue } from "clsx"
// import { twMerge } from "tailwind-merge"
// export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs))

export { cn } from "cnfast"

export function mergeProps(childProps = {}, parentProps: Record<string, unknown> = {}) {
	const result: Record<string, unknown> = { ...childProps }

	for (const key of Object.keys(parentProps)) {
		const parentValue = parentProps[key]
		if (parentValue !== undefined) {
			result[key] = parentValue
		}
	}

	return result
}
