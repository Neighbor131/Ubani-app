# Ubani

Ubani is a hyperlocal Samezoblo platform that helps neighbors connect, share alerts, and coordinate errands within a trusted radius.

## Getting started

```bash
pnpm install # or npm install
pnpm run dev
```

Create a `.env` file with Supabase credentials and a `DATABASE_URL` before running Prisma commands.

## Tooling overview

- **Next.js App Router** with TypeScript for page routing and API handlers.
- **Tailwind CSS** + shadcn-inspired primitives for the design system.
- **Prisma** models for Users, Samezoblos, Posts, Memberships, Chats, and Ratings.
- **Supabase client** ready for realtime features.

Seed the database with:

```bash
pnpm prisma migrate dev --name init
pnpm prisma db seed
```

The UI includes scaffolded pages for onboarding, feed, chat, and profile, plus reusable components like `PostCard`, `ComposerSheet`, and `AlertBanner`.
