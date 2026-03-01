import type { ViewProps } from "./globals";
import { cn } from "./utils";

export interface StackProps extends ViewProps {
    alignment?: "leading" | "trailing"
    spacing?: number
}
export function Stack(props: StackProps) {
    return <div className={cn("flex flex-col", props.className)}>{props.children}</div>
}
