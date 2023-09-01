import LayoutCard from "@/components/Cards/LayoutCard";
import { H2, H4, P } from "@/components/Typography";
import Image from "next/image";
import React from "react";

function QuoteSection() {
  return (
    <section id="quote">
      <LayoutCard className="rounded-3xl">
        <div className="flex flex-col">
          <div className="p-14">
            <H2>Kami Siap Melayani</H2>
            <H4>Kepuasan Pelanggan Kami Menjadi Fokus Perhatian Kami</H4>
          </div>
          <Image
            width={262}
            height={201}
            src="/icons/hand_with_lamp.png"
            alt="hero"
            className="scale-150 rotate-70 transform-gpu"
          />
        </div>
      </LayoutCard>
    </section>
  );
}

export default QuoteSection;
