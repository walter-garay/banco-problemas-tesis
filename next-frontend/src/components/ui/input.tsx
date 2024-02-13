import * as React from "react"

import { cn } from "@/lib/utils"
import { Label } from "@/components/ui/label"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-12 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 border-gray-300",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export function LabelWithInput({ ...props }) {
  return (
    <div className={`grid w-full items-center gap-2.5 ${props.className}`}>
      <Label htmlFor={props.htmlFor} className={`font-semibold`} > {...props.label} </Label>
      {props.children}
  </div>  
  )
}

export function InputWithLabel({ ...props }) {
  return (
    <div className="grid w-full items-center gap-1.5">
      <Input id={props.id} {...props}></Input>
  </div>  
  )
}

