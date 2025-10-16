import type { ComponentType, SVGProps } from "react";
import { AlertTriangle, Info, MapPin, Radar } from "lucide-react";

import { cn } from "@/lib/utils";

type Tone = "amber" | "rose" | "teal" | "indigo";

const toneConfig: Record<Tone, { icon: ComponentType<SVGProps<SVGSVGElement>>; wrapper: string; accent: string }> = {
  amber: {
    icon: AlertTriangle,
    wrapper: "border-amber-400/40 bg-amber-100 text-amber-500",
    accent: "bg-amber-400"
  },
  rose: {
    icon: Radar,
    wrapper: "border-rose-400/40 bg-rose-100 text-rose-500",
    accent: "bg-rose-400"
  },
  teal: {
    icon: MapPin,
    wrapper: "border-teal-400/40 bg-teal-100 text-teal-500",
    accent: "bg-teal-400"
  },
  indigo: {
    icon: Info,
    wrapper: "border-indigo-400/40 bg-indigo-100 text-indigo-500",
    accent: "bg-indigo-400"
  }
};

interface AlertBannerProps {
  title: string;
  description?: string;
  tone?: Tone;
}

/**
 * Announcement banner used for outages or community-wide alerts.
 */
export function AlertBanner({ title, description, tone = "indigo" }: AlertBannerProps) {
  const { icon: Icon, wrapper, accent } = toneConfig[tone];
  return (
    <section className={cn("flex items-start gap-3 rounded-2xl border p-4", wrapper)} role="status" aria-live="polite">
      <span className={cn("mt-1 h-2 w-2 rounded-full", accent)} aria-hidden />
      <Icon className="mt-1 h-5 w-5 flex-shrink-0" aria-hidden />
      <div className="space-y-1 text-sm">
        <p className="font-display text-base font-semibold">{title}</p>
        {description ? <p className="text-sm opacity-80">{description}</p> : null}
      </div>
    </section>
  );
}
