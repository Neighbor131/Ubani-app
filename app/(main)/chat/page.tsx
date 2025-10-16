import { Paperclip, Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import { StyledAvatar } from "@/components/ui/avatar";

const messages = [
  {
    id: "m1",
    author: "You",
    body: "Hi Uche! Saw your post about the ladder. I have one you can borrow.",
    timestamp: "2:35 pm",
    alignment: "right" as const
  },
  {
    id: "m2",
    author: "Uche",
    body: "Amazing, thank you! Could you drop by No. 12 later today?",
    timestamp: "2:36 pm",
    alignment: "left" as const
  }
];

export default function ChatPage() {
  return (
    <section className="flex h-full flex-col gap-6">
      <header className="space-y-2">
        <h1 className="font-display text-3xl font-semibold text-stone-900 dark:text-stone-50">Messages</h1>
        <p className="text-stone-600 dark:text-stone-300">Continue the conversation and coordinate errands securely.</p>
      </header>
      <div className="flex flex-1 flex-col overflow-hidden rounded-2xl border border-stone-200 bg-white dark:border-stone-800 dark:bg-stone-900">
        <div className="border-b border-stone-200 p-4 dark:border-stone-800">
          <div className="flex items-center gap-3">
            <StyledAvatar>U</StyledAvatar>
            <div>
              <p className="font-display text-lg text-stone-900 dark:text-stone-50">Uche N.</p>
              <p className="text-xs text-stone-500 dark:text-stone-400">Helper badge · 50m away</p>
            </div>
          </div>
        </div>
        <div className="flex-1 space-y-4 overflow-y-auto p-4">
          {messages.map((message) => (
            <div key={message.id} className={`flex ${message.alignment === "right" ? "justify-end" : "justify-start"}`}>
              <div className={`max-w-xs rounded-2xl px-4 py-3 text-sm ${message.alignment === "right" ? "bg-primary text-primary-foreground" : "bg-stone-100 text-stone-700 dark:bg-stone-800 dark:text-stone-100"}`}>
                <p>{message.body}</p>
                <span className="mt-1 block text-[10px] opacity-70">{message.timestamp}</span>
              </div>
            </div>
          ))}
        </div>
        <form className="flex items-center gap-2 border-t border-stone-200 p-4 dark:border-stone-800">
          <Button type="button" variant="ghost" size="icon" className="text-stone-500">
            <Paperclip className="h-4 w-4" />
          </Button>
          <input
            type="text"
            placeholder="Send a message"
            className="flex-1 rounded-full border border-stone-200 bg-white px-4 py-2 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 dark:border-stone-700 dark:bg-stone-950 dark:text-stone-100"
          />
          <Button type="submit" className="gap-2">
            <Send className="h-4 w-4" />
            Send
          </Button>
        </form>
      </div>
    </section>
  );
}
