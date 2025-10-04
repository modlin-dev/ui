export interface TooltipProps {
	children: string
}
export default function Tooltip(props: TooltipProps) {
	return (
		<div>
			<div className="p-2 rounded-lg text-xs text-white bg-black dark:bg-white">
				<p>{props.children}</p>
			</div>
			<button type="button">Hover</button>
		</div>
	)
}
