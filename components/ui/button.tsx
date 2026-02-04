"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils"; // Utility to merge class names

// CVA (class-variance-authority) button variants
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring cursor-pointer disabled:opacity-50 [&_svg]:size-4 [&_svg]:shrink-0 hover-elevate active-elevate-2 transition-all duration-300 hover:shadow-2xl hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 ease-out",
  {
    variants: {
      variant: {
        default: 
          "bg-gradient-to-br from-primary to-primary/90 text-primary-foreground shadow-lg " +
          "hover:bg-primary-darker",
        
        outline: 
          "border-2 border-primary/50 bg-primary/5 text-primary shadow-sm backdrop-blur-sm " +
          "hover:bg-primary hover:text-primary-foreground hover:border-primary hover:shadow-xl ",

        secondary: 
          "bg-secondary text-secondary-foreground shadow-md " +
          "hover:bg-secondary/80 hover:shadow-lg " +
          "active:scale-[0.98] ",

        destructive: 
          "bg-destructive text-destructive-foreground shadow-lg " +
          "hover:bg-destructive/90 hover:shadow-xl ",

        success: 
          "bg-success text-white shadow-lg " +
          "hover:bg-success/90 hover:shadow-xl ",

        ghost: 
          "bg-white/10 backdrop-blur-md border border-white/20 text-foreground shadow-xl " +
          "hover:bg-white/20 hover:border-white/40 hover:shadow-2xl " +
          "before:absolute before:inset-0 before:rounded-lg before:bg-gradient-to-br before:from-white/20 before:to-transparent before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300 " +
          "relative overflow-hidden ",
        
        gradient: 
          "bg-gradient-to-r from-primary via-primary/80 to-secondary text-white shadow-lg " +
          "hover:shadow-2xl hover:from-primary/90 hover:via-primary/70 hover:to-secondary/90 ",

        glow: 
          "bg-white text-primary shadow-lg " +
          "hover:shadow-[0_0_30px_rgba(var(--primary-rgb),0.5)] hover:shadow-primary/50 ",
      },
      size: {
        default: "min-h-9 px-4 py-2",
        sm: "min-h-8 rounded-md px-3 text-xs",
        lg: "min-h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

// Button props interface
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

// ForwardRef Button component
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
