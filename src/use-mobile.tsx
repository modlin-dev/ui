import { useEffect, useState } from "react"

const BREAKPOINT = 640

export function useMobile(): { isMobile: boolean } {
	const [isMobile, setIsMobile] = useState<boolean>(false)

	useEffect(() => {
		const mediaQuery = window.matchMedia(`(max-width: ${BREAKPOINT - 1}px)`)

		const handleChange = (e: MediaQueryListEvent) => {
			setIsMobile(e.matches)
		}

		setIsMobile(mediaQuery.matches)
		mediaQuery.addEventListener("change", handleChange)

		return () => mediaQuery.removeEventListener("change", handleChange)
	}, [])

	return { isMobile }
}
