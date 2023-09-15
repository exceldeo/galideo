import Button from "@/components/Buttons";
import LayoutCard from "@/components/Cards/LayoutCard";
import { H1, H2, H3, H4, H5 } from "@/components/Typography";
import { useMediaQuery } from "@/hooks";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

function Hero() {
  const md = useMediaQuery("md");
  return (
    <section id="home" className=" w-full md:container container-mobile">
      <LayoutCard className="rounded-[80px] p-[60px]">
        <div className="flex w-full justify-between flex-col lg:flex-row">
          <div className="flex flex-col space-y-[20px] md:space-y-[40px] md:w-2/3 w-full justify-center">
            {md ? (
              <H1>Naikkan Level Ke Transformasi Digital</H1>
            ) : (
              <H2>Naikkan Level Ke Transformasi Digital</H2>
            )}
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
          <div className="justify-center lg:flex hidden">
            {/* bounce image framer */}
            <motion.div
              initial={{ y: -10 }}
              animate={{ y: 20 }}
              transition={{
                repeat: Infinity,
                repeatType: "reverse",
                duration: 2,
                ease: "easeInOut",
              }}
            >
              <Image
                width={462}
                height={401}
                src="/images/hero1.png"
                alt="hero"
              />
            </motion.div>
          </div>
        </div>
      </LayoutCard>
    </section>
  );
}

export default Hero;
