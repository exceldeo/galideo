import Button from "@/components/Buttons";
import LayoutCard from "@/components/Cards/LayoutCard";
import { H1, H4 } from "@/components/Typography";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

function Hero() {
  return (
    <section id="home" className=" md:container container-mobile">
      <LayoutCard className="rounded-[80px] ">
        <div className="flex w-full justify-between flex-col-reverse lg:flex-row">
          <div className="flex flex-col space-y-[40px] lg:w-2/3  justify-center pl-[60px] lg:pr-[0px] pr-[60px] py-[60px]">
            <H1>Siapa Kami?</H1>
            <H4>
              berpengalaman dalam mengembangkan solusi software dan talenta
              digital untuk membantu bisnis Anda bertransformasi ke era digital
            </H4>
            <H4>
              Kami beralamatkan di jalan bumi cikoneng indah blok k no 20
              kabupaten bandung jawa barat.
            </H4>
          </div>
          <div className="flex justify-center lg:pr-[80px] pt-[60px] lg:pb-[10px]">
            <Image
              width={402}
              height={401}
              src="/images/hero2.png"
              alt="hero"
            />
          </div>
        </div>
      </LayoutCard>
    </section>
  );
}

export default Hero;
