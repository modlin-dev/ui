"use client"
import { cn } from "./utils"
import { useEffect, useState } from "react"

const sizes = {
    sm: "w-9 h-5 p-0.5",
    lg: "w-14 h-8 p-1",
}
const thumb_sizes = {
    sm: "w-4 h-4",
    lg: "w-6 h-6",
}

export interface SwitchProps {
    checked?: boolean
    onChange?(checked: boolean): void
    disabled?: boolean
    // loading?: boolean

    size?: "sm" | "lg"

    label?: string

    required?: boolean // web
    name?: string // web
    value?: string // web
    id?: string // web
}
export default function Switch(props: Readonly<SwitchProps>) {
    const [checked, setChecked] = useState(props.checked ?? false)

    const onChange = props.onChange
    useEffect(() => {
        if (onChange) onChange(checked)
    }, [checked, onChange])

    return (
        <>
            <input
                type="checkbox"
                checked={checked}
                onChange={() => setChecked(v => !v)}
                disabled={props.disabled}
                aria-label={props.label}
                required={props.required}
                name={props.id}
                value={props.value}
                id={props.id}
                className="peer hidden"
            />
            <button
                type="button"
                role="switch"
                data-state={checked ? "checked" : "unchecked"}
                aria-checked={checked}
                onClick={() => setChecked(v => !v)}
                disabled={props.disabled}
                className={cn(
                    sizes[props.size ?? "lg"],
                    "rounded-full hover:cursor-pointer",
                    "transition transition-all transition-duration-150 ease",
                    "data-[state=checked]:bg-primary",
                    "data-[state=unchecked]:bg-foreground/10",
                )}
            >
                <div
                    data-state={checked ? "checked" : "unchecked"}
                    className={cn(
                        thumb_sizes[props.size ?? "lg"],
                        "rounded-full",
                        "transition transition-all transition-duration-150 ease",
                        "bg-background",
                        "data-[state=unchecked]:translate-x-0 data-[state=checked]:translate-x-[100%]",
                    )}
                ></div>
            </button>
        </>
    )
}
