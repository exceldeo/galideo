import LayoutCard from "@/components/Cards/LayoutCard";
import { H2, H4, P } from "@/components/Typography";
import Image from "next/image";
import React from "react";

function QuoteSection() {
  return (
    <section id="quote">
      <LayoutCard className="rounded-3xl  overflow-hidden ">
        <div className="flex flex-col">
          <div className="pt-14 px-14">
            <H2>Kami Siap Melayani</H2>
            <H4>Kepuasan Pelanggan Kami Menjadi Fokus Perhatian Kami</H4>
          </div>
          <div className="max-h-64   overflow-hidden">
            <Image
              width={150}
              height={150}
              src="/icons/hand_with_lamp.png"
              alt="hero"
              className="scale-150  rotate-72 ml-32 -mt-10 transform-gpu object-fill"
            />
          </div>
        </div>
      </LayoutCard>
    </section>
  );
}

export default QuoteSection;
