import Button from "@/components/Buttons";
import Image from "next/image";
import React from "react";

function Hero() {
  return (
    <section id="home" className=" w-full ">
      <div className="flex w-full justify-between flex-col md:flex-row   bg-background rounded-3xl">
        <div className="flex flex-col space-y-[50px] w-1/2 px-16 justify-center ">
          <div className="text-5xl font-[500] text-headline">
            Naikkan Level Ke Transformasi Digital
          </div>
          <div className="font-normal">
            Mari kembangkan skill digital bersama kelas kami dan membangun
            bisnis bertransformasi digital
          </div>
          <div className="space-x-2">
            <Button buttonType="primary" size="sm">
              <div className="font-light"> Porfolio</div>
            </Button>
            {/* <Button buttonType="primary" outlined={true} size="sm">
              <div className="font-light"> Bootcamp</div>
            </Button> */}
          </div>
        </div>
        <div className="flex ">
          <Image
            width={800}
            height={800}
            src="/images/hero.png"
            alt="hero"
            className=" rounded-3xl"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
