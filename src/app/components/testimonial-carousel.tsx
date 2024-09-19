import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "My garden was an overlooked and uninspiring part of my home, but now it's a breathtaking oasis thanks to the fantastic team that revamped it. I highly recommend their services to anyone wanting to elevate their outdoor space. I love spending time in my garden now, and it brings me so much joy!",
    name: "Emma L.",
    title: "Homeowner",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    quote:
      "The landscaping team transformed our backyard into a stunning retreat. Their attention to detail and creative design have made our outdoor space the envy of the neighborhood!",
    name: "Michael S.",
    title: "Property Owner",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    quote:
      "I never thought my small urban garden could look so lush and inviting. The team's expertise in maximizing space and selecting the perfect plants has given me a personal oasis in the heart of the city.",
    name: "Sarah T.",
    title: "City Dweller",
    image: "/placeholder.svg?height=80&width=80",
  },
];

export default function TestimonialCarousel() {
  return (
    <Carousel className="max-w-[80vw]">
      <CarouselContent>
        {testimonials.map((testimonial, index) => (
          <CarouselItem key={index}>
            <div className="flex flex-col items-center px-36">
              <Quote className="w-12 h-12 mb-4 text-emerald-700" />
              <p className="text-3xl text-center italic font-semibold mb-4">
                {testimonial.quote}
              </p>
              <div className="flex items-center mt-4">
                <img
                  alt={`${testimonial.name}'s profile`}
                  className="rounded-full mr-4"
                  height="80"
                  src={testimonial.image}
                  style={{
                    aspectRatio: "80/80",
                    objectFit: "cover",
                  }}
                  width="80"
                />
                <div className="text-left">
                  <p className="text-xl font-semibold">{testimonial.name}</p>
                  <p className="text-xl text-emerald-700">
                    {testimonial.title}
                  </p>
                </div>
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
