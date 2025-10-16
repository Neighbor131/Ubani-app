"use client";

import * as React from "react";

import { AlertBanner } from "@/components/AlertBanner";
import { ComposerSheet } from "@/components/ComposerSheet";
import { PostCard, type PostType } from "@/components/PostCard";
import { cn } from "@/lib/utils";

const mockPosts: Array<Parameters<typeof PostCard>[0]["post"]> = [
  {
    id: "1",
    author: { name: "Ayo Balogun", badge: "Organizer" },
    createdAt: "10 minutes ago",
    type: "ALERT",
    title: "Traffic diversion on Adebayo Street",
    body: "Road repairs are underway near the roundabout. Expect delays from 5-8pm tonight.",
    tags: ["Traffic", "Heads up"],
    distanceLabel: "120m away"
  },
  {
    id: "2",
    author: { name: "Ngozi Okafor", badge: "Helper" },
    createdAt: "25 minutes ago",
    type: "ERRAND",
    title: "Need ladder to fix balcony light",
    body: "Could anyone lend a tall ladder for an hour this evening? Happy to return with fresh pastries!",
    tags: ["Borrow", "Home"]
  }
];

const feedFilters: Array<{ label: string; type: PostType | "ALL" }> = [
  { label: "All", type: "ALL" },
  { label: "Errands", type: "ERRAND" },
  { label: "Alerts", type: "ALERT" },
  { label: "Listings", type: "LISTING" },
  { label: "Lost & Found", type: "LOST" }
];

export default function FeedPage() {
  const [activeFilter, setActiveFilter] = React.useState<PostType | "ALL">("ALL");

  const visiblePosts = React.useMemo(() => {
    if (activeFilter === "ALL") {
      return mockPosts;
    }

    return mockPosts.filter((post) => post.type === activeFilter);
  }, [activeFilter]);

  return (
    <section className="space-y-6">
      <header className="space-y-3">
        <h1 className="font-display text-3xl font-semibold text-stone-900 dark:text-stone-50">Neighborhood feed</h1>
        <p className="text-stone-600 dark:text-stone-300">Stories, errands, and alerts from neighbors within your Samezoblo radius.</p>
        <div className="flex flex-wrap gap-2">
          {feedFilters.map((filter) => (
            <button
              key={filter.label}
              type="button"
              onClick={() => setActiveFilter(filter.type)}
              aria-pressed={activeFilter === filter.type}
              className={cn(
                "rounded-full border px-4 py-1.5 text-xs font-semibold transition focus:outline-none focus:ring-2 focus:ring-primary/40",
                activeFilter === filter.type
                  ? "border-primary bg-primary text-primary-foreground shadow-sm"
                  : "border-stone-200 bg-white text-stone-500 hover:border-primary hover:text-primary dark:border-stone-700 dark:bg-stone-900 dark:text-stone-300"
              )}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </header>
      <ComposerSheet triggerLabel="Share with neighbors" />
      <AlertBanner title="Water outage in Samezoblo" description="City works estimate restoration by 4pm. Report if your building is back." tone="rose" />
      <div className="space-y-4">
        {visiblePosts.length ? (
          visiblePosts.map((post) => <PostCard key={post.id} post={post} />)
        ) : (
          <p className="rounded-2xl border border-dashed border-stone-300 p-6 text-sm text-stone-500 dark:border-stone-700 dark:text-stone-400">
            No posts in this category yet. Be the first to share an update with your Samezoblo.
          </p>
        )}
      </div>
    </section>
  );
}
