import { ParallaxCardTools } from "@/components/Helper/Parallax/ParallaxCardTools";
import React from "react";

const framework1 = [
  {
    title: "Flutter",
    logo: "/images/hero.png",
    description: "Mobile",
  },
  {
    title: "Figma",
    logo: "/images/hero.png",
    description: "Design",
  },
  {
    title: "React",
    logo: "/images/hero.png",
    description: "Web Frontend",
  },
  {
    title: "NextJS",
    logo: "/images/hero.png",
    description: "Web Frontend",
  },
  {
    title: "NodeJS",
    logo: "/images/hero.png",
    description: "Web Backend",
  },
  {
    title: "Laravel",
    logo: "/images/hero.png",
    description: "Web Backend",
  },
  {
    title: "MySQL",
    logo: "/images/hero.png",
    description: "Database",
  },
];

const framework2 = [
  {
    title: "Miro",
    logo: "/images/hero.png",
    description: "Design",
  },
  {
    title: "Kotlin",
    logo: "/images/hero.png",
    description: "Mobile",
  },
  {
    title: "Strapi",
    logo: "/images/hero.png",
    description: "Web Backend",
  },
  {
    title: "ExpressJS",
    logo: "/images/hero.png",
    description: "Web Backend",
  },
  {
    title: "PostgreSQL",
    logo: "/images/hero.png",
    description: "Database",
  },
  {
    title: "Redis",
    logo: "/images/hero.png",
    description: "Database",
  },
  {
    title: "MongoDB",
    logo: "/images/hero.png",
    description: "Database",
  },
];

function ToolsFramework() {
  return (
    <section id="tools" className="w-full">
      <div className="flex w-full justify-between flex-col md:flex-row ">
        <div className="flex flex-col space-y-[50px] justify-center pr-[50px]">
          <div className="space-y-5">
            <div className="text-primary font-normal text-lg">
              Tools & Framework
            </div>
            <div className="text-3xl text-headline font-medium">
              Kami Gunakan Tools & Framework Terbaik Untuk Melayani Anda
            </div>
            <p className="line-clamp-3 font-light">
              Kami tetap mengikuti perkembangan yang terbaru terkait Tools &
              Framework yang digunakan
            </p>
          </div>
        </div>
        <div className="flex flex-col space-y-5  max-w-[807px] ">
          <ParallaxCardTools data={framework1} baseVelocity={5} />
          <ParallaxCardTools data={framework2} baseVelocity={-5} />
        </div>
      </div>
    </section>
  );
}

export default ToolsFramework;
