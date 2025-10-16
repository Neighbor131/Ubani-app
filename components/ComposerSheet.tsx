"use client";

import * as React from "react";
import { Send, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ComposerSheetProps {
  triggerLabel?: string;
}

/**
 * Lightweight composer preview used on the home page and feed.
 */
export function ComposerSheet({ triggerLabel = "Compose" }: ComposerSheetProps) {
  const [value, setValue] = React.useState("");

  return (
    <div className="rounded-2xl border border-dashed border-stone-300 bg-white/70 p-4 transition dark:border-stone-700 dark:bg-stone-900/70">
      <div className="flex items-start gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/20 text-primary">
          <Sparkles className="h-5 w-5" />
        </span>
        <div className="flex-1 space-y-3">
          <textarea
            aria-label="Compose a new post"
            placeholder="Share what your Samezoblo should know..."
            value={value}
            onChange={(event) => setValue(event.target.value)}
            className="h-24 w-full resize-none rounded-2xl border border-stone-200 bg-white px-4 py-3 text-sm text-stone-700 shadow-inner focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/40 dark:border-stone-700 dark:bg-stone-900 dark:text-stone-100"
          />
          <div className="flex items-center justify-between text-xs text-stone-500 dark:text-stone-400">
            <span>Posts reach neighbors within your Samezoblo radius.</span>
            <Button
              type="button"
              className={cn("gap-2", value ? "bg-primary text-primary-foreground" : "bg-stone-200 text-stone-500 dark:bg-stone-800 dark:text-stone-400")}
              disabled={!value}
            >
              <Send className="h-4 w-4" />
              {triggerLabel}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
