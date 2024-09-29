import { Database } from "@/types/supabase";
import { createClient } from "@supabase/supabase-js";

export const createSupabaseClient = () => {
  return createClient<Database>(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_ANON_KEY!,
  );
};
