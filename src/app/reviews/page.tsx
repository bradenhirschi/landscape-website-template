import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { createSupabaseClient } from "@/lib/supabase";
import { Tables } from "@/types/supabase";
import { ArrowRight, Quote, Star } from "lucide-react";
import Link from "next/link";
import CtaButton from "../components/cta-button";

export default async function ReviewsPage() {
  const supabase = createSupabaseClient();

  const { data: siteData } = await supabase
    .from("sites")
    .select()
    .eq("site_id", process.env.SITE_ID!)
    .single();

  const { data: pageContent } = await supabase
    .from("home_pages")
    .select()
    .eq("site_id", process.env.SITE_ID!)
    .single();

  const { data: reviews } = await supabase
    .from("reviews")
    .select()
    .eq("site_id", process.env.SITE_ID!)
    .eq("stars", 5);

  if (!siteData || !pageContent || !reviews) return <></>;

  return (
    <main className="bg-stone-900 text-white">
      {/* Hero section */}
      <section className="relative flex h-[80vh] items-center justify-center bg-[url(https://cdn.prod.website-files.com/66695921e784b293b5398f0c%2F66714544668cb09ad9c0b99a_6014805_Flower_Garden_1280x720-poster-00001.jpg)] bg-cover">
        <div className="pointer-events-none absolute inset-0 bg-black/30" />

        <div className="z-10 flex flex-col items-center justify-center gap-4 text-center">
          <h1 className="text-8xl font-bold uppercase italic">Reviews</h1>
          <p className="mx-auto max-w-2xl text-2xl font-light">
            See what homeowners and businesses have to say about{" "}
            {siteData.business_name}
          </p>
          <div className="flex flex-row items-center gap-8">
            <CtaButton />
            <Link
              href="#reviews"
              className="flex flex-row text-lg font-semibold italic underline"
            >
              Explore reviews <ArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* Reviews section */}
      <section id="#reviews" className="grid grid-cols-2 gap-12 p-12">
        {reviews.map((review: Tables<"reviews">) => (
          <Card key={review.review_id}>
            <CardHeader>
              <Quote className="mb-4 h-12 w-12 text-emerald-700" />
              <CardTitle className="text-2xl">{review.reviewer_name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>"{review.text}"</p>
            </CardContent>
          </Card>
        ))}
      </section>
    </main>
  );
}
