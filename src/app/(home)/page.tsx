import Image from "next/image";
import { Globe, Trophy } from "lucide-react";
import ServiceCard from "../components/service-card";
import TestimonialCarousel from "../components/review-carousel";
import { createSupabaseClient } from "@/lib/supabase";
import CtaButton from "../components/cta-button";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

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
    <main className="bg-stone-900 text-white">
      {/* Hero Section */}
      <section className="mx-4 mb-24 grid grid-cols-2 gap-36 pt-36">
        <div className="flex items-center space-x-4">
          <h1 className="text-8xl font-bold uppercase italic">
            {pageContent.hero_text}
          </h1>
        </div>

        <div className="flex flex-col gap-4">
          <Card className="w-full rounded-xl p-4">
            <CardContent>
              <h2 className="mb-2 font-bold text-primary">1700+</h2>
              <p className="font-semibold">Projects Completed</p>
            </CardContent>
            <CardFooter>
              <CtaButton variant="secondary" />
            </CardFooter>
          </Card>

          {/* Tagline */}
          <p className="max-w-2xl text-xl">{pageContent.hero_subtext}</p>
        </div>
      </section>

      {/* Card grid section */}
      <section className="mx-4 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {/* Card 1 */}
        <Card className="overflow-hidden rounded-3xl bg-primary text-white">
          <CardContent className="p-6">
            <h3 className="mb-4 text-2xl font-bold">
              100% eco-friendly practices
            </h3>
            <p className="mb-4">
              Let us help you turn your vision into reality and create a
              landscape that you'll love for years to come.
            </p>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-primary"
            >
              Explore Project →
            </Button>
          </CardContent>
        </Card>

        {/* Card 2 */}
        <Card
          className="relative overflow-hidden rounded-3xl bg-cover bg-center"
          style={{
            backgroundImage: "url('/placeholder.svg?height=400&width=300')",
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          <CardContent className="relative flex h-full flex-col justify-end p-6 text-white">
            <h2 className="mb-2 text-6xl font-bold">602+</h2>
            <h3 className="mb-4 text-2xl font-bold">PROJECTS COMPLETED</h3>
            <p>
              Whether you're looking for a simple garden makeover or a complete
              landscape transformation, we are here.
            </p>
          </CardContent>
        </Card>

        {/* Card 3 */}
        <Card className="overflow-hidden rounded-3xl bg-primary text-primary-foreground">
          <CardContent className="p-6">
            <h3 className="mb-4 text-3xl font-bold">Get in Touch</h3>
            <p className="mb-4">
              Ready to transform your outdoor space? Contact us today to
              schedule a consultation and start your journey towards a beautiful
            </p>
            <Button className="bg-primary text-white hover:bg-primary">
              Contact Us →
            </Button>
          </CardContent>
        </Card>

        {/* Card 4 */}
        <Card
          className="relative overflow-hidden rounded-3xl bg-cover bg-center"
          style={{
            backgroundImage: "url('/placeholder.svg?height=400&width=300')",
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          <CardContent className="relative flex h-full flex-col justify-end p-6 text-white">
            <div className="mb-4 h-16 w-16 rounded-full bg-primary"></div>
            <h2 className="mb-2 text-6xl font-bold">10+</h2>
            <h3 className="text-2xl font-bold">YEARS OF EXPERIENCE</h3>
          </CardContent>
        </Card>
      </section>

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
          <CtaButton />
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
            <CtaButton variant="secondary" />
          </div>
        </div>
      </section>
    </main>
  );
}
