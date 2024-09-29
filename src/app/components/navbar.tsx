import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { createSupabaseClient } from "@/lib/supabase";

export default async function Navbar() {
  const supabase = createSupabaseClient();

  const { data: siteData, error: siteDataError } = await supabase
    .from("sites")
    .select()
    .eq("site_id", process.env.SITE_ID!)
    .single();

  if (!siteData) return <></>;

  return (
    <nav className="relative z-10 flex items-center justify-between p-4">
      <h3 className="font-bold">{(siteData as any).business_name}</h3>
      <div className="space-x-8 text-lg font-semibold italic">
        <Link href="#" className="hover:text-emerald-400">
          Demos
        </Link>
        <Link href="#" className="hover:text-emerald-400">
          About Us
        </Link>
        <Link href="#" className="hover:text-emerald-400">
          Services
        </Link>
        <Link href="#" className="hover:text-emerald-400">
          Projects
        </Link>
        <Link href="#" className="hover:text-emerald-400">
          Contact
        </Link>
      </div>
      <div className="flex flex-row items-center gap-4">
        <ShoppingCart />
        <Button className="bg-[#497f64]">GET STARTED</Button>
      </div>
    </nav>
  );
}
