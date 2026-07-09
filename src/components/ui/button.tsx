import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../utils/cn";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-bold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-emerald hover:-translate-y-0.5 hover:brightness-110",
        gold: "bg-gold-gradient text-accent-foreground shadow-gold hover:-translate-y-0.5",
        whatsapp:
          "bg-gradient-to-br from-[#1ebe57] to-[#128c3a] text-white shadow-[0_12px_28px_-8px_rgba(18,140,58,0.55)] hover:-translate-y-0.5",
        outline:
          "border border-border bg-transparent text-foreground hover:bg-muted",
        "outline-light":
          "border border-white/50 bg-white/10 text-white backdrop-blur-md hover:bg-white/20",
        secondary:
          "bg-secondary text-secondary-foreground hover:brightness-95",
        ghost: "hover:bg-muted text-foreground",
      },
      size: {
        default: "h-11 px-6 py-2",
        sm: "h-9 px-4 text-xs",
        lg: "h-12 px-8 text-base",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
);
Button.displayName = "Button";

export { buttonVariants };
