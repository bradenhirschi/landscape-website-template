import { Button } from "@/components/ui/button";
import { createSupabaseClient } from "@/lib/supabase";

export default async function AboutUsPage() {
  const supabase = createSupabaseClient();

  const { data: pageContent, error: pageContentError } = await supabase
    .from("home_pages")
    .select()
    .eq("site_id", process.env.SITE_ID!)
    .single();

  if (pageContentError) console.error(pageContentError);

  if (!pageContent) return <></>;

  return (
    <main>
      {/* Hero Section */}
      <section className="relative bg-[url(https://cdn.prod.website-files.com/66695921e784b293b5398f0c%2F66714544668cb09ad9c0b99a_6014805_Flower_Garden_1280x720-poster-00001.jpg)] bg-cover">
        <div className="pointer-events-none absolute inset-0 bg-black/30" />
        <div className="flex h-[80vh] items-center justify-center">
          <div className="z-10 text-center">
            <h1 className="mb-4 text-8xl font-bold uppercase italic">
              About Us
            </h1>
            <p className="mx-auto max-w-2xl text-2xl font-light">
              {pageContent.hero_subtext}
            </p>
          </div>
        </div>
      </section>

      {/* Our values section */}
      <section className="grid grid-cols-3">
        <div className="flex flex-col bg-stone-800 p-20">
          <h1 className="mb-12 uppercase italic">
            {/* {pageContent.ourValuesTitle} */}
          </h1>
          <ul className="mb-8 list-disc text-xl">
            {/* {pageContent.ourValues.map((value, index) => (
              <li key={index}>{value}</li>
            ))} */}
          </ul>
          <Button className="bg-white text-black">
            {/* {pageContent.viewMoreButtonText} */}
          </Button>
        </div>
        <div className="h-full w-full bg-[url(https://images.pexels.com/photos/28216688/pexels-photo-28216688/free-photo-of-autumn-camping.png)]" />
        <div className="flex flex-col bg-emerald-50 p-20 text-black">
          <h2 className="mb-4 italic">
            {/* {pageContent.advanceSkillsTitle} */}
          </h2>
          <p className="mb-8 text-lg italic">
            {/* {pageContent.advanceSkillsDescription} */}
          </p>
          <ul className="flex flex-col gap-8">
            <li className="border-b-4 border-emerald-700 text-lg italic">
              Expertise
            </li>
            <li className="border-b-4 border-emerald-700 text-lg italic">
              Sustainability
            </li>
            <li className="border-b-4 border-emerald-700 text-lg italic">
              Quality
            </li>
          </ul>
        </div>
      </section>

      {/* Trusted by Clients Section */}
      <section className="flex flex-col items-center bg-emerald-50 px-4 py-32 text-black">
        <h1 className="mb-8 text-center uppercase italic">
          {/* {pageContent.trustedByClientsTitle} */}
        </h1>
        <p className="mb-20 max-w-[800px] text-center text-2xl font-extralight">
          {/* {pageContent.trustedByClientsDescription} */}
        </p>
        <div className="grid grid-cols-6 justify-center space-x-8">
          {[1, 2, 3, 4, 5, 6].map((index) => (
            <div
              key={index}
              className="h-36 w-36 rounded-full bg-lime-300/50"
            ></div>
          ))}
        </div>
      </section>
    </main>
  );
}
