import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { createSupabaseClient } from "@/lib/supabase";
import { Tables } from "@/types/supabase";
import { Quote, Star } from "lucide-react";

export default async function ReviewCarousel() {
  const supabase = createSupabaseClient();

  const { data: reviews } = await supabase
    .from("reviews")
    .select()
    .eq("site_id", process.env.SITE_ID!)
    .eq("stars", 5);

  if (!reviews) return <></>;

  return (
    <Carousel className="max-w-[80vw]">
      <CarouselContent>
        {reviews.map((review: Tables<"reviews">, index) => (
          <CarouselItem key={review.review_id}>
            <div className="flex flex-col items-center px-36">
              <Quote className="mb-4 h-12 w-12 text-emerald-700" />
              <p className="mb-4 text-center text-3xl font-semibold italic">
                {review.text}
              </p>
              <p className="text-xl font-semibold">{review.reviewer_name}</p>
              <div className="flex flex-row">
                {Array(5)
                  .fill(0)
                  .map((_, index) => (
                    <Star key={index} color="yellow" fill="yellow" />
                  ))}
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
