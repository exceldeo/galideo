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
      <div className="flex flex-col space-y-[30px] items-center ">
        <div className="text-5xl font-semibold ">
          Kami Gunakan
          <span className="text-primary"> Tools & Framework</span>
          Terkini
        </div>
        <div className="mt-[20px] font-thin">
          Tersedia layanan dibawah ini untuk transformasi digital anda dan
          bisnis anda
        </div>

        <ParallaxCardTools data={framework1} baseVelocity={5} />
      </div>
    </section>
  );
}

export default ToolsFramework;
