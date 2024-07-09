import { link } from "fs";
import Link from "next/link";

const projects = [
  {
    id: 1,
    name: "Stripe Cards",
    source:
      "https://stripe.com/gb?utm_campaign=UK_en_Search_Brand_Stripe_EXA-2032860449&utm_medium=cpc&utm_source=google&ad_content=604272871169&utm_term=stripe&utm_matchtype=e&utm_adposition=&utm_device=m&gad_source=1&gbraid=0AAAAADKNRO6A0tC4eYyHUQ8B95watY66w&gclid=Cj0KCQjwsuSzBhCLARIsAIcdLm4Aguv2FxlN2gRk_tv6iGWBvlDSBijzUIftECfFwEaWiYK3ErbSAp4aAstUEALw_wcB#:~:text=Build%20a%20fintech%20offering%20with%20banking%2Das%2Da%2Dservice",
    description:
      "This animation shows a list of cards that translates in, with the last card falling, fading out and translating back in. This signifies that multiple cards can be issued and expired cards can the renewed.",
    link: "/stripe-cards",
  },
  {
    id: 2,
    name: "Timeline Animation",
    source: "#",
    description: "Coming soon",
    link: "#",
  },
];

const Page = () => {
  return (
    <main className=" min-h-screen p-24 bg-[#FDFDFC]">
      <div className="max-w-[600px] mx-auto">
        <div className=" ml-4">
          <h1 className="text-4xl">Design Engineering Library</h1>
          <p className="mt-3">
            A library of cool designs & animations i find interesting.
          </p>
        </div>

        <div className="  grid grid-cols-1 gap-2 mt-8 text-[#425466]">
          {projects.map((project) => (
            <Link
              key={project.id}
              className="flex flex-col p-4 max-w-[500px] hover:bg-[#f3f3f2] rounded-[8px] gap-2"
              href={project.link}
            >
              <h2 className="text-lg font-bold text-[#0a2540]">
                {project.name}
              </h2>
              <p className="text-sm leading-[1.5rem]">{project.description}</p>
              <p className="text-blue-500 text-sm">More details →</p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Page;
