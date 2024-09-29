import { Button } from "@/components/ui/button";

export default function AboutUsPage() {
  const pageContent = {
    ourValuesTitle: "Our Values",
    ourValues: [
      "We source only the best products to ensure your garden thrives.",
      "We are committed to eco-friendly practices and products that promote sustainable gardening.",
      "Our knowledgeable staff is passionate about gardening and landscaping.",
    ],
    viewMoreButtonText: "View More",
    advanceSkillsTitle: "Our Advance Skills.",
    advanceSkillsDescription:
      "We believe that everyone deserves to enjoy the benefits of a well-designed outdoor space, and we are dedicated to making that vision a reality for you.",
    trustUsTitle: "Why Trust Us With Your Landscape?",
    startPartnershipButtonText: "Start a Partnership",
    trustedByClientsTitle: "Trusted by Clients",
    trustedByClientsDescription:
      "We are honored to serve a diverse array of clients who share our passion for creating beautiful, and sustainable outdoor spaces.",
  };

  return (
    <>
      <section className="grid grid-cols-3">
        <div className="flex flex-col bg-stone-800 p-20">
          <h1 className="mb-12 uppercase italic">
            {pageContent.ourValuesTitle}
          </h1>
          <ul className="mb-8 list-disc text-xl">
            {pageContent.ourValues.map((value, index) => (
              <li key={index}>{value}</li>
            ))}
          </ul>
          <Button className="bg-white text-black">
            {pageContent.viewMoreButtonText}
          </Button>
        </div>
        <div className="h-full w-full bg-[url(https://images.pexels.com/photos/28216688/pexels-photo-28216688/free-photo-of-autumn-camping.png)]" />
        <div className="flex flex-col bg-emerald-50 p-20 text-black">
          <h2 className="mb-4 italic">{pageContent.advanceSkillsTitle}</h2>
          <p className="mb-8 text-lg italic">
            {pageContent.advanceSkillsDescription}
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
          {pageContent.trustedByClientsTitle}
        </h1>
        <p className="mb-20 max-w-[800px] text-center text-2xl font-extralight">
          {pageContent.trustedByClientsDescription}
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
    </>
  );
}
