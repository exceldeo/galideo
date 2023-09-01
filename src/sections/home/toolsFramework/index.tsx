import { ParallaxCardTools } from "@/components/Helper/Parallax/ParallaxCardTools";
import { H2, H4, H5 } from "@/components/Typography";
import React from "react";

const framework1 = [
  {
    title: "Flutter",
    logo: "/icons/flutter.png",
    description: "Mobile",
  },
  {
    title: "Figma",
    logo: "/icons/figma.png",
    description: "Design",
  },
  {
    title: "React",
    logo: "/icons/react.png",
    description: "Web Frontend",
  },
  {
    title: "NextJS",
    logo: "/icons/nextjs.png",
    description: "Web Frontend",
  },
  {
    title: "NodeJS",
    logo: "/icons/nodejs.webp",
    description: "Web Backend",
  },
  {
    title: "Laravel",
    logo: "/icons/laravel.png",
    description: "Web Backend",
  },
  {
    title: "MySQL",
    logo: "/icons/mysql.png",
    description: "Database",
  },
  {
    title: "Miro",
    logo: "/icons/miro.png",
    description: "Design",
  },
  {
    title: "Kotlin",
    logo: "/icons/kotlin.png",
    description: "Mobile",
  },
  {
    title: "Strapi",
    logo: "/icons/stapi.png",
    description: "Web Backend",
  },
  {
    title: "ExpressJS",
    logo: "/icons/expressjs.png",
    description: "Web Backend",
  },
  {
    title: "PostgreSQL",
    logo: "/icons/postgresql.png",
    description: "Database",
  },
  {
    title: "Redis",
    logo: "/icons/redis.jpg",
    description: "Database",
  },
  {
    title: "MongoDB",
    logo: "/icons/monggodb.png",
    description: "Database",
  },
];

function ToolsFramework() {
  return (
    <section id="tools" className="w-full">
      <div className="flex flex-col space-y-[30px] items-center ">
        <div className="flex flex-col items-center ">
          <H2>
            Kami Gunakan
            <span className="text-primary"> Tools & Framework</span>
          </H2>
          <H4 className="">
            Tersedia layanan dibawah ini untuk transformasi digital anda dan
            bisnis anda
          </H4>
        </div>

        <ParallaxCardTools data={framework1} baseVelocity={3} />
      </div>
    </section>
  );
}

export default ToolsFramework;
