import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Globe, ShoppingCart, Trophy } from "lucide-react";
import ServiceCard from "./components/service-card";
import TestimonialCarousel from "./components/testimonial-carousel";

export default function LandscapingLandingPage() {
  return (
    <div className="min-h-screen bg-stone-900 text-white">
      <div className="relative bg-cover bg-[url(https://cdn.prod.website-files.com/66695921e784b293b5398f0c%2F66714544668cb09ad9c0b99a_6014805_Flower_Garden_1280x720-poster-00001.jpg)]">
        <div className="absolute inset-0 bg-black/30 pointer-events-none" />
        {/* Navigation */}
        <nav className="flex justify-between items-center p-4">
          <img
            className="h-auto w-28"
            src="https://cdn.prod.website-files.com/66eaf0d87d8ac57ad8310276/66eaf0d87d8ac57ad83103b3_Logo.webp"
          />
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
              `` Contact
            </Link>
          </div>
          <div className="flex flex-row items-center gap-4">
            <ShoppingCart />
            <Button className="bg-[#497f64]">GET STARTED</Button>
          </div>
        </nav>

        {/* Hero Section */}
        <section className=" h-[70vh] flex items-center justify-center">
          <div className="z-10 text-center">
            <h1 className="text-8xl italic font-bold mb-4">ABOUT US</h1>
            <p className="text-2xl font-light max-w-2xl mx-auto">
              Whether you’re a seasoned gardener or just beginning your journey
              into the world of landscaping, we are here to support and inspire
              you every step of the way.
            </p>
          </div>
        </section>
      </div>

      {/* We Create Awesome Landscape Section */}
      <section className="py-32 px-8">
        <div className="flex flex-row">
          <h1 className="italic text-left">WE CREATE AWESOME LANDSCAPES</h1>
          <div className="flex flex-grow" />
          <h5 className="max-w-[50%]">
            We specialize in transforming ordinary spaces into extraordinary
            landscapes that captivate the senses and enrich the environment.
          </h5>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8 h-96">
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
              className="md:col-span-2 rounded-[3rem]"
            />
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="grid grid-cols-3">
        <div className="p-20 flex flex-col bg-stone-800">
          <h1 className="italic mb-12">OUR VALUES</h1>
          <ul className="text-xl list-disc mb-8">
            <li>
              We source only the best products to ensure your garden thrives.
            </li>
            <li>
              We are committed to eco-friendly practices and products that
              promote sustainable gardening.
            </li>
            <li>
              Our knowledgeable staff is passionate about gardening and
              landscaping.
            </li>
          </ul>
          <Button className="bg-white text-black">View More</Button>
        </div>
        <div className="h-full w-full bg-[url(https://images.pexels.com/photos/28216688/pexels-photo-28216688/free-photo-of-autumn-camping.png)]" />
        <div className="p-20 flex flex-col bg-emerald-50 text-black">
          <h2 className="italic mb-4">Our advance skills.</h2>
          <p className="italic text-lg mb-8">
            We believe that everyone deserves to enjoy the benefits of a
            well-designed outdoor space, and we are dedicated to making that
            vision a reality for you.
          </p>
          <ul className="flex flex-col gap-8">
            <li className="italic text-lg border-b-4 border-emerald-700">
              Expertise
            </li>
            <li className="italic text-lg border-b-4 border-emerald-700">
              Sustainability
            </li>
            <li className="italic text-lg border-b-4 border-emerald-700">
              Quality
            </li>
          </ul>
        </div>
      </section>

      {/* Why Trust Us Section */}
      <section className="py-16 px-4 bg-emerald-50">
        <div className="flex flex-row items-end mb-12">
          <h1 className="text-black italic uppercase">
            Why trust us with your
            <br />
            landscape?
          </h1>
          <div className="flex-grow" />
          <Button>Start a partnership</Button>
        </div>

        <div className="relative grid grid-rows-2 md:grid-rows-1 md:grid-cols-3 md:col-gap-[70px] bg-emerald-50 p-8">
          <div className="relative mb-8 md:mb-0">
            <Image
              src="https://images.pexels.com/photos/28216688/pexels-photo-28216688/free-photo-of-autumn-camping.png"
              alt="Autumn camping landscape"
              fill
              className="rounded-[3rem] object-cover w-full h-full"
            />
          </div>
          <div className="col-span-2 grid grid-cols-2 md:pl-8 gap-8">
            <ServiceCard
              icon={<Globe className="w-10 h-10 text-white" />}
              title="Expertise and Experience"
              description="With years of experience in landscaping and gardening, our skilled team is equipped to handle projects of any size and complexity."
            />
            <ServiceCard
              icon={<Trophy className="w-10 h-10 text-white" />}
              title="Commercial Landscaping"
              description="Our services include landscape design, installation, and maintenance for office buildings, hotels, shopping centers, and more."
            />
            <ServiceCard
              icon={<Globe className="w-10 h-10 text-white" />}
              title="Urban and Public Spaces"
              description="We work with planners and community groups to create and maintain urban emerald spaces, promoting wellness and sustainability."
            />
            <ServiceCard
              icon={<Trophy className="w-10 h-10 text-white" />}
              title="Custom Garden Designs"
              description="Every landscape has its own story. We offer bespoke garden design services tailored to your unique preferences and requirements."
            />
          </div>
        </div>

        {/* Grass image */}
        {/* <div className="absolute bottom-0 inset-0 w-full h-[40rem]">
          <div className="relative h-full w-full">
            <Image
              alt="grass"
              fill
              src="https://cdn.prod.website-files.com/66eaf0d87d8ac57ad8310276/66eaf0d87d8ac57ad83103a9_986ce11201d59228b44fcde7c2348bc5.webp"
            />
          </div>
        </div> */}
      </section>

      {/* Trusted by Clients Section */}
      <section className="py-32 px-4 bg-emerald-50 text-black flex flex-col items-center ">
        <h1 className="italic mb-8 text-center">TRUSTED BY CLIENTS</h1>
        <p className="text-center max-w-[800px] text-2xl font-extralight mb-20">
          We are honored to serve a diverse array of clients who share our
          passion for creating beautiful, and sustainable outdoor spaces.
        </p>
        <div className="grid grid-cols-6 justify-center space-x-8">
          {[1, 2, 3, 4, 5, 6].map((index) => (
            <div
              key={index}
              className="w-36 h-36 bg-lime-300/50 rounded-full"
            ></div>
          ))}
        </div>
      </section>

      {/* Testimonial Carousel Section */}
      <section className="w-full flex flex-col items-center py-32 bg-stone-900">
        <TestimonialCarousel />
      </section>

      {/* Call to Action Section */}
      <section className="p-8 bg-stone-900">
        <div className="flex flex-col py-36 px-24 gap-8 rounded-[3rem] bg-[url(https://cdn.prod.website-files.com/66695921e784b293b5398f0c%2F66714544668cb09ad9c0b99a_6014805_Flower_Garden_1280x720-poster-00001.jpg)]">
          <div className="flex flex-row">
            <h1 className="italic uppercase mb-4">
              MAKE YOUR DREAM GARDEN INTO REALITY
            </h1>
            <div className="flex-grow" />
            <p className="text-2xl font-light mb-8">
              Transform your outdoor space into something special. Contact us
              today for a free consultation!
            </p>
          </div>
          <div className="flex items-start">
            <Button variant={"secondary"}>Start a partnership</Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-900 pt-32 pb-8 px-8">
        <div className="mx-auto grid grid-cols-3 md:grid-cols-6 gap-8">
          <div className="col-span-3">
            <h1 className="italic mb-4 uppercase">
              We would love to hear from you.
            </h1>
            <p className="text-xl font-light mb-12">
              Feel free to reach our if you want to collaborate with us, or
              simply have a chat
            </p>
            <Button className="bg-emerald-700">Become a client</Button>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">CONTACT US</h3>
            <p>123 Garden Street, emerald City, 12345</p>
            <p>Phone: (123) 456-7890</p>
            <p>Email: info@landscaping.com</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">FOLLOW US</h3>
            <div className="flex space-x-4">
              {["Facebook", "Twitter", "Instagram", "LinkedIn"].map(
                (social) => (
                  <Link
                    key={social}
                    href="#"
                    className="hover:text-emerald-400"
                  >
                    {social}
                  </Link>
                )
              )}
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">QUICK LINKS</h3>
            <ul className="space-y-2">
              {["Home", "About", "Services", "Projects", "Contact"].map(
                (link) => (
                  <li key={link}>
                    <Link href="#" className="hover:text-emerald-400">
                      {link}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          <p>&copy; 2023 Landscaping Company. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
