import { IconLoader2 } from "@tabler/icons-react"
import { cn } from "./utils"

export function Spinner({ className, ...props }: React.ComponentProps<"svg">) {
  return (
    <IconLoader2
      role="status"
      aria-label="Loading..."
      className={cn("animate-spin", className)}
      {...props}
    />
  )
}

export default Spinner
