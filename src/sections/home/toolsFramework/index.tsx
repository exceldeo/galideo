import { ParallaxCardTools } from "@/components/Helper/Parallax/ParallaxCardTools";
import React from "react";

const framework = [
  {
    title: "React",
    logo: "/images/hero.png",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, asperiores",
  },
  {
    title: "Gin",
    logo: "/images/hero.png",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, asperiores",
  },
  {
    title: "Laravel",
    logo: "/images/hero.png",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, asperiores",
  },
];

function ToolsFramework() {
  return (
    <section id="tools" className="w-full">
      <div className="flex w-full justify-between flex-col md:flex-row ">
        <div className="flex flex-col space-y-[50px] justify-center pr-[50px]">
          <div className="space-y-2">
            <div className="text-primary font-normal">Tools & Framework</div>
            <div className="text-2xl text-headline font-semibold">
              Yang kami gunkana untuk melayani anda
            </div>
            <p className="line-clamp-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem,
              asperiores laudantium magni, debitis ipsam dolore quae explicabo
              dolorum labore blanditiis, reiciendis eaque veritatis fugit.
              Reiciendis nihil amet eaque quasi? Et.
            </p>
          </div>
        </div>
        <div className="flex flex-col space-y-5  max-w-[807px] ">
          <ParallaxCardTools data={framework} baseVelocity={10} />
          <ParallaxCardTools data={framework} baseVelocity={-10} />
        </div>
      </div>
    </section>
  );
}

export default ToolsFramework;
