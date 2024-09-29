import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { createSupabaseClient } from "@/lib/supabase";
import { Database, Tables } from "@/types/supabase";
import { Quote, Star } from "lucide-react";

// const reviews = [
//   {
//     quote:
//       "My garden was an overlooked and uninspiring part of my home, but now it's a breathtaking oasis thanks to the fantastic team that revamped it. I highly recommend their services to anyone wanting to elevate their outdoor space. I love spending time in my garden now, and it brings me so much joy!",
//     name: "Emma L.",
//     title: "Homeowner",
//     image: "/placeholder.svg?height=80&width=80",
//   },
//   {
//     quote:
//       "The landscaping team transformed our backyard into a stunning retreat. Their attention to detail and creative design have made our outdoor space the envy of the neighborhood!",
//     name: "Michael S.",
//     title: "Property Owner",
//     image: "/placeholder.svg?height=80&width=80",
//   },
//   {
//     quote:
//       "I never thought my small urban garden could look so lush and inviting. The team's expertise in maximizing space and selecting the perfect plants has given me a personal oasis in the heart of the city.",
//     name: "Sarah T.",
//     title: "City Dweller",
//     image: "/placeholder.svg?height=80&width=80",
//   },
// ];

export default async function ReviewCarousel() {
  const supabase = createSupabaseClient();
  const { data: reviews, error: reviewsError } = await supabase
    .from("reviews")
    .select()
    .eq("site_id", process.env.SITE_ID!);

  if (!reviews) return <></>;

  return (
    <Carousel className="max-w-[80vw]">
      <CarouselContent>
        {reviews
          .filter((review: Tables<"reviews">) => review.stars === 5)
          .map((review: Tables<"reviews">, index) => (
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
