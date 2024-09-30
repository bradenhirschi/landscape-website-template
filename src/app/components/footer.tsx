import { Button } from "@/components/ui/button";
import { createSupabaseClient } from "@/lib/supabase";

export default async function Footer() {
  const supabase = createSupabaseClient();

  const { data: pageContent, error: pageContentError } = await supabase
    .from("home_pages")
    .select()
    .eq("site_id", process.env.SITE_ID!)
    .single();

  if (pageContentError) console.error(pageContentError);

  if (!pageContent) return <></>;

  return (
    <footer className="bg-stone-900 px-8 pb-8 pt-32">
      <div className="mx-auto grid grid-cols-3 gap-8 md:grid-cols-6">
        <div className="col-span-3">
          <h1 className="mb-4 uppercase italic">
            {pageContent.contact_us_text}
          </h1>
          <p className="mb-12 text-xl font-light">
            {pageContent.contact_us_subtext}
          </p>
          <Button className="bg-emerald-700">
            {pageContent.cta_button_text}
          </Button>
        </div>
        <div>
          <h3 className="mb-4 text-xl font-bold">
            {pageContent.contact_us_text}
          </h3>
          <p>{pageContent.contact_address}</p>
        </div>
        <div>
          <h3 className="mb-4 text-xl font-bold">Phone</h3>
          <p>{pageContent.contact_phone}</p>
        </div>
        <div>
          <h3 className="mb-4 text-xl font-bold">Email</h3>
          <p>{pageContent.contact_email}</p>
        </div>
      </div>
    </footer>
  );
}
