import { createClient } from "@supabase/supabase-js";

/**
 * Supabase browser client configured via environment variables.
 * The typed client is consumed by hooks and data fetching utilities.
 */
export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL ?? "",
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? ""
);
