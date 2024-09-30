import { Button } from "@/components/ui/button";
import { createSupabaseClient } from "@/lib/supabase";
import Link from "next/link";

export default async function CtaButton({
  variant,
}: {
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link";
}) {
  const supabase = createSupabaseClient();
  const { data: pageContent } = await supabase
    .from("home_pages")
    .select()
    .eq("site_id", process.env.SITE_ID!)
    .single();

  return (
    <Button asChild variant={variant}>
      <Link href="/contact">
        {pageContent?.cta_button_text ?? "Contact Us"}
      </Link>
    </Button>
  );
}
