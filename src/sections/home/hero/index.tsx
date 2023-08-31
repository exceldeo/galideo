import Button from "@/components/Buttons";
import LayoutCard from "@/components/Cards/LayoutCard";
import { H1, H4 } from "@/components/Typography";
import Image from "next/image";
import React from "react";

function Hero() {
  return (
    <section id="home" className=" w-full container">
      <LayoutCard className="rounded-[80px] p-[60px]">
        <div className="flex w-full justify-between flex-col md:flex-row">
          <div className="flex flex-col space-y-[40px] w-2/3  justify-center">
            <H1>Naikkan Level Ke Transformasi Digital</H1>
            <H4>
              Mari kembangkan skill digital bersama kelas kami dan membangun
              bisnis bertransformasi digital
            </H4>
            <div className="space-x-2">
              <Button buttonType="primary" size="md">
                <div className="font-light"> Porfolio</div>
              </Button>
              {/* <Button buttonType="primary" outlined={true} size="sm">
              <div className="font-light"> Bootcamp</div>
            </Button> */}
            </div>
          </div>
          <div className="flex justify-center">
            <Image
              width={462}
              height={401}
              src="/images/hero1.png"
              alt="hero"
              objectFit="cover"
            />
          </div>
        </div>
      </LayoutCard>
    </section>
  );
}

export default Hero;
