import Link from "next/link";
import { Button } from "@/components/ui/button";
import { createSupabaseClient } from "@/lib/supabase";
import CtaButton from "./cta-button";

export default async function Navbar() {
  const supabase = createSupabaseClient();

  const { data: siteData } = await supabase
    .from("sites")
    .select()
    .eq("site_id", process.env.SITE_ID!)
    .single();

  if (!siteData) return <></>;

  return (
    <nav className="absolute inset-x-0 top-0 z-10 flex items-center justify-between bg-transparent p-4">
      <Link href="/">
        <h3 className="font-bold">{(siteData as any).business_name}</h3>
      </Link>
      <div className="space-x-8 rounded-2xl bg-neutral-800 px-6 py-2 text-lg font-semibold italic">
        <Link href="/about-us" className="hover:text-primary">
          About Us
        </Link>
        <Link href="/services" className="hover:text-primary">
          Services
        </Link>
        <Link href="/reviews" className="hover:text-primary">
          Reviews
        </Link>
        <Link href="/contact" className="hover:text-primary">
          Contact
        </Link>
      </div>
      <div className="flex flex-row items-center gap-4">
        <CtaButton />
      </div>
    </nav>
  );
}
