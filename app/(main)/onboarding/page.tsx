import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";

export default function OnboardingPage() {
  return (
    <section className="space-y-6">
      <header className="space-y-2">
        <h1 className="font-display text-3xl font-semibold text-stone-900 dark:text-stone-50">Join your Samezoblo</h1>
        <p className="max-w-2xl text-stone-600 dark:text-stone-300">
          Use GPS or confirm your street manually to connect with neighbors. Ubani keeps your exact address private while ensuring you see what&apos;s relevant around you.
        </p>
      </header>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-stone-200 bg-white p-6 dark:border-stone-800 dark:bg-stone-900">
          <h2 className="font-display text-xl text-stone-900 dark:text-stone-50">Use current location</h2>
          <p className="mt-2 text-sm text-stone-600 dark:text-stone-300">
            We&apos;ll determine your Samezoblo radius based on GPS to keep updates close to home.
          </p>
          <Button className="mt-4 w-full gap-2">
            <MapPin className="h-4 w-4" />
            Detect my location
          </Button>
        </div>
        <div className="rounded-2xl border border-stone-200 bg-white p-6 dark:border-stone-800 dark:bg-stone-900">
          <h2 className="font-display text-xl text-stone-900 dark:text-stone-50">Enter address manually</h2>
          <p className="mt-2 text-sm text-stone-600 dark:text-stone-300">
            Choose your building or block to join the conversation with trusted neighbors.
          </p>
          <form className="mt-4 space-y-3">
            <label className="block text-sm font-medium text-stone-700 dark:text-stone-200" htmlFor="street">
              Street address
            </label>
            <input
              id="street"
              type="text"
              placeholder="15 Asuquo Lane"
              className="w-full rounded-xl border border-stone-300 bg-white px-4 py-3 text-sm text-stone-700 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/40 dark:border-stone-700 dark:bg-stone-950 dark:text-stone-100"
            />
            <Button type="submit" className="w-full">
              Continue
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
