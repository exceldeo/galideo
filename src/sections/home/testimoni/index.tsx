import { ParallaxCardTestimoni } from "@/components/Helper/Parallax/ParallaxCardTestimoni";
import { H2, H4 } from "@/components/Typography";
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
    <section id="testimoni" className="w-full">
      <div className="flex w-full flex-col">
        <div className="flex flex-col items-center text-center">
          <H2>
            <span className="text-primary">Testimoni </span>
            Pelanggan Kami
          </H2>
          <H4 className="">
            Tersedia layanan dibawah ini untuk transformasi digital anda dan
            bisnis anda
          </H4>
        </div>
        <div className="flex flex-col space-y-5 mt-[60px]">
          <ParallaxCardTestimoni data={testimoni} baseVelocity={3} />
        </div>
      </div>
    </section>
  );
}

export default Testimoni;
