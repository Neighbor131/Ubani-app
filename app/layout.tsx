import "./globals.css";

import type { ReactNode } from "react";
import type { Metadata } from "next";

import { ThemeProvider } from "@/components/theme-provider";
import { generalSans, pally } from "@/lib/fonts";

export const metadata: Metadata = {
  title: "Ubani — Hyperlocal community platform",
  description: "Connect with neighbors, share updates, and organize help within your Samezoblo."
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${pally.variable} ${generalSans.variable}`} suppressHydrationWarning>
      <body className="min-h-screen bg-stone-50 text-stone-900 transition-colors dark:bg-stone-950 dark:text-stone-100">
        <ThemeProvider>
          <div className="relative flex min-h-screen flex-col">
            <a
              href="#main-content"
              className="skip-link absolute left-4 top-4 -translate-y-full rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground focus:translate-y-0 focus:outline-none"
            >
              Skip to content
            </a>
            <header className="border-b border-stone-200 bg-white/80 backdrop-blur dark:border-stone-800 dark:bg-stone-900/70">
              <nav className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-4">
                <span className="font-display text-xl font-semibold text-primary">Ubani</span>
                <span className="text-sm text-stone-500 dark:text-stone-400">Your Samezoblo companion</span>
              </nav>
            </header>
            <main id="main-content" className="mx-auto flex w-full max-w-5xl flex-1 flex-col gap-6 px-6 py-10">
              {children}
            </main>
            <footer className="border-t border-stone-200 bg-white/80 py-6 text-center text-sm text-stone-500 dark:border-stone-800 dark:bg-stone-900/70 dark:text-stone-400">
              Built with care for neighborhoods everywhere.
            </footer>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
