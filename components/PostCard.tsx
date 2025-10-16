import { BadgeCheck, MapPin } from "lucide-react";

import { cn } from "@/lib/utils";

export type PostType = "ERRAND" | "ALERT" | "LISTING" | "LOST" | "FOUND";

export interface PostCardProps {
  post: {
    id: string;
    author: {
      name: string;
      badge?: string;
    };
    createdAt: string;
    type: PostType;
    title: string;
    body: string;
    tags?: string[];
    distanceLabel?: string;
  };
  className?: string;
}

const typeCopy: Record<PostType, { label: string; tone: string }> = {
  ERRAND: { label: "Errand", tone: "bg-teal-100 text-teal-500" },
  ALERT: { label: "Alert", tone: "bg-rose-100 text-rose-500" },
  LISTING: { label: "Listing", tone: "bg-amber-100 text-amber-500" },
  LOST: { label: "Lost", tone: "bg-indigo-100 text-indigo-500" },
  FOUND: { label: "Found", tone: "bg-primary/20 text-primary-foreground" }
};

export function PostCard({ post, className }: PostCardProps) {
  const meta = typeCopy[post.type];
  return (
    <article className={cn("rounded-2xl border border-stone-200 bg-white p-5 shadow-soft dark:border-stone-800 dark:bg-stone-900", className)}>
      <header className="flex items-center justify-between">
        <div>
          <p className="font-display text-lg text-stone-900 dark:text-stone-50">{post.author.name}</p>
          <div className="flex items-center gap-2 text-xs text-stone-500 dark:text-stone-400">
            <span>{post.createdAt}</span>
            {post.distanceLabel ? (
              <span className="flex items-center gap-1">
                <MapPin className="h-3 w-3" aria-hidden />
                {post.distanceLabel}
              </span>
            ) : null}
          </div>
        </div>
        <div className="flex items-center gap-2">
          {post.author.badge ? (
            <span className="inline-flex items-center gap-1 rounded-full bg-stone-100 px-3 py-1 text-xs font-medium text-stone-600 dark:bg-stone-800 dark:text-stone-300">
              <BadgeCheck className="h-3 w-3" aria-hidden />
              {post.author.badge}
            </span>
          ) : null}
          <span className={cn("rounded-full px-3 py-1 text-xs font-semibold", meta.tone)}>{meta.label}</span>
        </div>
      </header>
      <h3 className="mt-4 font-display text-xl text-stone-900 dark:text-stone-50">{post.title}</h3>
      <p className="mt-2 text-sm text-stone-600 dark:text-stone-300">{post.body}</p>
      {post.tags && post.tags.length ? (
        <div className="mt-4 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span key={tag} className="rounded-full bg-stone-100 px-3 py-1 text-xs font-medium text-stone-500 dark:bg-stone-800 dark:text-stone-300">
              #{tag}
            </span>
          ))}
        </div>
      ) : null}
    </article>
  );
}
