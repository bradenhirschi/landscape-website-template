import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Globe, ShoppingCart, Trophy } from "lucide-react";
import ServiceCard from "./components/service-card";
import TestimonialCarousel from "./components/review-carousel";
import { createSupabaseClient } from "@/lib/supabase";
import Navbar from "./components/navbar";

export default async function LandscapingLandingPage() {
  const supabase = createSupabaseClient();

  const { data: pageContent, error: pageContentError } = await supabase
    .from("home_pages")
    .select()
    .eq("site_id", process.env.SITE_ID!)
    .single();

  if (pageContentError) console.error(pageContentError);

  if (!pageContent) return <></>;

  return (
    <div className="min-h-screen bg-stone-900 text-white">
      <div className="relative bg-[url(https://cdn.prod.website-files.com/66695921e784b293b5398f0c%2F66714544668cb09ad9c0b99a_6014805_Flower_Garden_1280x720-poster-00001.jpg)] bg-cover">
        <div className="pointer-events-none absolute inset-0 bg-black/30" />

        <Navbar />

        {/* Hero Section */}
        <section className="flex h-[70vh] items-center justify-center">
          <div className="z-10 text-center">
            <h1 className="mb-4 text-8xl font-bold uppercase italic">
              {pageContent.hero_text}
            </h1>
            <p className="mx-auto max-w-2xl text-2xl font-light">
              {pageContent.hero_subtext}
            </p>
          </div>
        </section>
      </div>

      {/* We Create Awesome Landscape Section */}
      <section className="px-8 py-32">
        <div className="flex flex-row">
          <h1 className="text-left uppercase italic">
            {pageContent.feature_text}
          </h1>
          <div className="flex flex-grow" />
          <h5 className="max-w-[50%]">{pageContent.feature_subtext}</h5>
        </div>

        <div className="mt-16 grid h-96 gap-8 md:grid-cols-3">
          <div className="relative">
            <Image
              src="https://images.pexels.com/photos/28216688/pexels-photo-28216688/free-photo-of-autumn-camping.png"
              alt="Landscaping Work"
              fill
              className="rounded-[3rem]"
            />
          </div>
          <div className="relative md:col-span-2">
            <Image
              src="https://images.pexels.com/photos/28216688/pexels-photo-28216688/free-photo-of-autumn-camping.png"
              alt="Landscaping Work"
              fill
              className="rounded-[3rem] md:col-span-2"
            />
          </div>
        </div>
      </section>

      {/* Why Trust Us Section */}
      <section className="bg-emerald-50 px-4 py-16">
        <div className="mb-12 flex flex-row items-end">
          <h1 className="uppercase italic text-black">
            {pageContent.services_text}
          </h1>
          <div className="flex-grow" />
          <Button>{pageContent.cta_button_text}</Button>
        </div>

        <div className="md:col-gap-[70px] relative grid grid-rows-2 bg-emerald-50 p-8 md:grid-cols-3 md:grid-rows-1">
          <div className="relative mb-8 md:mb-0">
            <Image
              src="https://images.pexels.com/photos/28216688/pexels-photo-28216688/free-photo-of-autumn-camping.png"
              alt="Autumn camping landscape"
              fill
              className="h-full w-full rounded-[3rem] object-cover"
            />
          </div>
          <div className="col-span-2 grid grid-cols-2 gap-8 md:pl-8">
            <ServiceCard
              icon={<Globe className="h-10 w-10 text-white" />}
              title="Expertise and Experience"
              description="With years of experience in landscaping and gardening, our skilled team is equipped to handle projects of any size and complexity."
            />
            <ServiceCard
              icon={<Trophy className="h-10 w-10 text-white" />}
              title="Commercial Landscaping"
              description="Our services include landscape design, installation, and maintenance for office buildings, hotels, shopping centers, and more."
            />
            <ServiceCard
              icon={<Globe className="h-10 w-10 text-white" />}
              title="Urban and Public Spaces"
              description="We work with planners and community groups to create and maintain urban emerald spaces, promoting wellness and sustainability."
            />
            <ServiceCard
              icon={<Trophy className="h-10 w-10 text-white" />}
              title="Custom Garden Designs"
              description="Every landscape has its own story. We offer bespoke garden design services tailored to your unique preferences and requirements."
            />
          </div>
        </div>
      </section>

      {/* Testimonial Carousel Section */}
      <section className="flex w-full flex-col items-center bg-stone-900 py-32">
        <TestimonialCarousel />
      </section>

      {/* Call to Action Section */}
      <section className="bg-stone-900 p-8">
        <div className="flex flex-col gap-8 rounded-[3rem] bg-[url(https://cdn.prod.website-files.com/66695921e784b293b5398f0c%2F66714544668cb09ad9c0b99a_6014805_Flower_Garden_1280x720-poster-00001.jpg)] px-24 py-36">
          <div className="flex flex-row">
            <h1 className="mb-4 uppercase italic">{pageContent.cta_text}</h1>
            <div className="flex-grow" />
            <p className="mb-8 text-2xl font-light">
              {pageContent.cta_subtext}
            </p>
          </div>
          <div className="flex items-start">
            <Button variant={"secondary"}>{pageContent.cta_button_text}</Button>
          </div>
        </div>
      </section>

      {/* Footer */}
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
    </div>
  );
}
