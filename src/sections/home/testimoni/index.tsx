import { ParallaxCardTestimoni } from "@/components/Helper/Parallax/ParallaxCardTestimoni";
import React from "react";

const testimoni = [
  {
    title: "Saya Puas",
    image: "/images/hero.png",
    description: "Layanan yang diberikan sangat memuaskan",
    name: "Rizky",
    job: "Mahasiswa",
    layanan: "Web Development",
  },
  {
    title: "Saya Puas",
    image: "/images/hero.png",
    description: "Layanan yang diberikan sangat memuaskan",
    name: "Rizky",
    job: "Mahasiswa",
    layanan: "Web Development",
  },
  {
    title: "Saya Puas",
    image: "/images/hero.png",
    description: "Layanan yang diberikan sangat memuaskan",
    name: "Rizky",
    job: "Mahasiswa",
    layanan: "Web Development",
  },
];

function Testimoni() {
  return (
    <section id="testimoni" className="pt-[80px] w-full">
      <div className="flex w-full justify-between flex-col sm:flex-row ">
        <div className="flex flex-col space-y-[50px] justify-center pr-[50px]">
          <div className="space-y-2">
            <div className="text-primary font-normal">
              Dari Pelanggan Terkati
            </div>
            <div className="text-2xl text-headline font-semibold">
              Testimoni Layanan Kami
            </div>
          </div>
        </div>
        <div className="flex flex-col space-y-5 max-w-[1000px] ">
          <ParallaxCardTestimoni data={testimoni} baseVelocity={5} />
        </div>
      </div>
    </section>
  );
}

export default Testimoni;
