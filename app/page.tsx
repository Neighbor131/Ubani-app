import { AlertBanner } from "@/components/AlertBanner";
import { ComposerSheet } from "@/components/ComposerSheet";
import { PostCard } from "@/components/PostCard";

const samplePost = {
  id: "post-1",
  author: {
    name: "Chioma Adeyemi",
    badge: "Helper"
  },
  createdAt: "5 minutes ago",
  type: "ERRAND" as const,
  title: "Need help carrying groceries upstairs",
  body: "Just picked up a large grocery order from the co-op. Could use a quick hand getting it to the 3rd floor.",
  tags: ["Groceries", "Lift"]
};

export default function HomePage() {
  return (
    <div className="space-y-6">
      <AlertBanner
        title="Samezoblo outage updates"
        description="Power has been restored to 65% of homes. Share updates if your block is still down."
        tone="amber"
      />
      <section className="rounded-2xl border border-stone-200 bg-white p-6 shadow-soft dark:border-stone-800 dark:bg-stone-900">
        <h1 className="font-display text-3xl font-semibold text-stone-900 dark:text-stone-50">Welcome to Ubani</h1>
        <p className="mt-2 text-stone-600 dark:text-stone-300">
          Connect with your Samezoblo neighbors, share what&apos;s happening on your block, and lend a hand.
        </p>
        <div className="mt-6 flex flex-col gap-4">
          <ComposerSheet triggerLabel="Post to your block" />
          <PostCard post={samplePost} />
        </div>
      </section>
    </div>
  );
}
