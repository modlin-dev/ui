"use client"
import { IconChevronDown, IconSelector } from "@tabler/icons-react"
import Button from "./button"
import Text from "./text"
import { cn } from "./utils"
import React, { type ReactElement, type ReactNode, useState } from "react"

export interface SelectTriggerProps {
    placeholder?: string
    id?: string
    children?: string
}
export function SelectTrigger(props: SelectTriggerProps) {
    return (
        <button type="button" className={cn("flex items-center", "bg-(--background)")}>
            {props.placeholder}
        </button>
    )
}

export function Dropdown() {
    return (
        <div className="grid">
            <SelectTrigger placeholder="Select a gender" />
            <Button variant="outline" size="xl" className="text-(--description)">
                <Text className="flex grow-1">Country</Text>
                <IconChevronDown />
            </Button>
        </div>
    )
}

export interface SelectItemProps {
    value: string
    children: ReactNode
    className?: string
    onPress?: () => void
}
export function SelectItem(props: Readonly<SelectItemProps>): ReactElement<SelectItemProps> {
    return (
        <button
            type="button"
            role="option"
            value={props.value}
            onClick={props.onPress}
            className={cn(
                "flex items-center min-h-12 px-4 gap-4",
                "select-none hover:bg-secondary",
                // "[&>svg]:size-4 [&>svg]:scale-125",
                props.className,
            )}
        >
            {props.children}
        </button>
    )
}
export interface SelectContentProps {
    defaultValue: string
    children?: ReactNode
}
export function SelectContent(props: SelectContentProps) {
    const [value, setValue] = useState<string>(props.defaultValue)
    const [expanded, setExpanded] = useState(false)
    const enhanced = React.Children.map(props.children, child => {
        // We don't use Radix
        const children = child as ReactElement<SelectItemProps>
        if (!React.isValidElement(children)) return children

        // Add/override props here
        return React.cloneElement(children, {
            onPress() {
                setValue(children.props.value)
                setExpanded(false)
            },
        })
    })

    return (
        <div className="relative flex">
            <button
                type="button"
                role="combobox"
                aria-expanded={expanded}
                aria-autocomplete="none"
                aria-haspopup="listbox"
                value={value}
                id="country"
                onClick={() => setExpanded(!expanded)}
                // onBlur={() => setExpanded(false)}
                className={cn("absolute flex items-center justify-center gap-1 px-4 h-12")}
            >
                <p className="font-medium w-6 h-6">{value}</p>
                <IconSelector size={16} className="text-muted-foreground" />
            </button>
            <ul
                className={cn(
                    "absolute top-[100%] flex flex-col mt-2 w-full max-h-72 overflow-auto",
                    "rounded-2xl",
                    "bg-background shadow-[0_0_16px_0_var(--shadow)]",
                    "animate-popup origin-top-left",
                )}
            >
                {enhanced}
            </ul>
        </div>
    )
}

export interface SelectProps {
    defaultValue?: string
    placeholder: string
    value?: string
    name?: string
    id?: string
    children: ReactElement<SelectItemProps>[]
}
export function Select(props: SelectProps) {
    const [expanded, setExpanded] = useState(false)
    const [value, setValue] = useState(props.defaultValue)
    const [selected, setSelected] = useState<ReactNode>(props.placeholder)

    const children: ReactElement[] = []
    for (let i = 0; i < props.children.length; i++) {
        const child = props.children[i]
        if (React.isValidElement<SelectItemProps>(child)) {
            children.push(
                React.cloneElement(child as ReactElement<SelectItemProps>, {
                    onPress() {
                        setValue(child.props.value)
                        setSelected(child.props.children)
                        setExpanded(false)
                    },
                }),
            )
        }
    }

    return (
        <div className="relative flex flex-col w-full max-w-56">
            <button
                type="button"
                role="combobox"
                aria-expanded={expanded}
                aria-autocomplete="none"
                aria-haspopup="listbox"
                value={value}
                name={props.name}
                id={props.id}
                onClick={() => setExpanded(!expanded)}
                // onBlur={() => setExpanded(false)}
                className={cn("flex items-center gap-x-4", "[&>svg]:size-4 [&>svg]:scale-125", "focus:underline")}
            >
                {selected}
                <IconChevronDown size={16} />
            </button>
            {expanded ? (
                <ul
                    id={props.id}
                    className={cn(
                        "absolute flex flex-col w-full top-[100%] overflow-hidden",
                        "rounded-2xl",
                        "bg-(--background) shadow-[0_0_16px_0_var(--shadow)]",
                        "animate-appear-tc",
                    )}
                >
                    {children}
                </ul>
            ) : null}
        </div>
    )
}
