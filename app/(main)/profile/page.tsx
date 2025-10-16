import { BadgeCheck, Crown, Leaf } from "lucide-react";

import { Button } from "@/components/ui/button";

const badges = [
  { icon: Leaf, label: "Helper", description: "Completed 12 errands for neighbors" },
  { icon: BadgeCheck, label: "Trusted", description: "Verified by 8 nearby residents" },
  { icon: Crown, label: "Organizer", description: "Hosts monthly Samezoblo cleanups" }
];

export default function ProfilePage() {
  return (
    <section className="space-y-6">
      <header className="flex flex-col gap-4 rounded-2xl border border-stone-200 bg-white p-6 shadow-soft dark:border-stone-800 dark:bg-stone-900 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="font-display text-3xl font-semibold text-stone-900 dark:text-stone-50">Amaka I.</h1>
          <p className="mt-1 text-stone-600 dark:text-stone-300">Joined Samezoblo · 4 years · Block Captain</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">Edit profile</Button>
          <Button>Invite neighbor</Button>
        </div>
      </header>
      <div className="grid gap-6 lg:grid-cols-3">
        <section className="rounded-2xl border border-stone-200 bg-white p-6 dark:border-stone-800 dark:bg-stone-900 lg:col-span-2">
          <h2 className="font-display text-xl text-stone-900 dark:text-stone-50">About</h2>
          <p className="mt-3 text-sm text-stone-600 dark:text-stone-300">
            Passionate about keeping our street connected. I coordinate errands for elders and help maintain the community garden.
          </p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            <div className="rounded-xl bg-stone-100 p-4 text-sm text-stone-600 dark:bg-stone-800 dark:text-stone-200">
              <p className="font-semibold text-stone-700 dark:text-stone-100">Skills</p>
              <p>Event planning, first aid, bike repairs</p>
            </div>
            <div className="rounded-xl bg-stone-100 p-4 text-sm text-stone-600 dark:bg-stone-800 dark:text-stone-200">
              <p className="font-semibold text-stone-700 dark:text-stone-100">Preferred help</p>
              <p>Grocery runs, school pickups, night patrol</p>
            </div>
          </div>
        </section>
        <aside className="space-y-4 rounded-2xl border border-stone-200 bg-white p-6 dark:border-stone-800 dark:bg-stone-900">
          <h2 className="font-display text-xl text-stone-900 dark:text-stone-50">Badges</h2>
          <ul className="space-y-3 text-sm text-stone-600 dark:text-stone-300">
            {badges.map((badge) => {
              const Icon = badge.icon;
              return (
                <li key={badge.label} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-full bg-primary/20 text-primary">
                    <Icon className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="font-semibold text-stone-700 dark:text-stone-100">{badge.label}</p>
                    <p>{badge.description}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </aside>
      </div>
    </section>
  );
}
