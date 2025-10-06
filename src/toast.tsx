export interface ToastOptions {
	description?: string
}
export function toast(title: string, _options?: ToastOptions) {
	const toast = document.createElement("div")
	toast.className =
		"transition transition-all transition-duration-250 ease-out absolute top-[-64px] p-4 rounded-2xl text-bold bg-white dark:bg-black inset-ring inset-ring-black/25"
	toast.replaceChildren(title)
	const toasts = document.getElementById("toasts")
	if (toasts) toasts.appendChild(toast)
	toast.style.top = "0px"
	return false
}
