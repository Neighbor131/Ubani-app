"use client";

import type { ComponentProps } from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";

import { cn } from "@/lib/utils";

export const Avatar = AvatarPrimitive.Root;
export const AvatarImage = AvatarPrimitive.Image;
export const AvatarFallback = AvatarPrimitive.Fallback;

export function StyledAvatar({ className, children, ...props }: ComponentProps<typeof AvatarPrimitive.Root>) {
  return (
    <AvatarPrimitive.Root
      className={cn("flex h-10 w-10 items-center justify-center rounded-full bg-primary/20 text-primary", className)}
      {...props}
    >
      {children}
    </AvatarPrimitive.Root>
  );
}
