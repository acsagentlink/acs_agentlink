"use client";

import * as React from "react";
import * as SwitchPrimitives from "@radix-ui/react-switch";
import { cn } from "@/lib/utils";

const Switch = React.forwardRef(({ className, checked, onCheckedChange, ...props }, ref) => {
  return (
    <SwitchPrimitives.Root
      className={cn(
        "relative flex h-8 w-20 cursor-pointer items-center rounded-full border p-1 transition-colors bg-white border-gray-300",
        className
      )}
      checked={checked}
      onCheckedChange={onCheckedChange} // This comes from react-hook-form's Controller
      ref={ref}
      {...props}
    >
      {/* Inactive Texts */}
      <span
        className={cn(
          "absolute left-2 transition-opacity duration-300",
          checked ? "text-gray-500" : "text-grayscale-header"
        )}
      >
        Yes
      </span>
      <span
        className={cn(
          "absolute right-2 transition-opacity duration-300",
          checked ? "text-grayscale-header" : "text-gray-500"
        )}
      >
        No
      </span>

      {/* Thumb */}
      <SwitchPrimitives.Thumb
        className={cn(
          "pointer-events-none block h-7 w-9 rounded-full bg-gray-900 text-white flex items-center justify-center shadow-lg transition-transform",
          checked ? "translate-x-0" : "translate-x-8"
        )}
      >
        {checked ? "Yes" : "No"}
      </SwitchPrimitives.Thumb>
    </SwitchPrimitives.Root>
  );
});

Switch.displayName = SwitchPrimitives.Root.displayName;

export { Switch };
