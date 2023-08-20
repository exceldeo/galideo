import LayananCard from "@/components/Cards/LayananCard";
import React from "react";

function Layanan() {
  return (
    <section id="layanan" className="pt-[80px] flex flex-col items-center">
      <div className="text-5xl">
        Layanan
        <span className="text-primary"> Kami</span>
      </div>
      <div className="mt-[20px]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, asperiores
        laudantium magni, debitis ipsam dolore quae explicabo dolorum labore
        blanditiis, reiciendis eaque veritatis fugit. Reiciendis nihil amet
        eaque quasi? Et.
      </div>
      <div className="flex space-x-[30px] mt-[50px]">
        {[...Array(4)].map((_, i) => {
          return (
            <LayananCard
              key={i}
              title="Bootcamp"
              description={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, asperiores
            laudantium magni, debitis ipsam dolore quae explicabo dolorum labore
            blanditiis, reiciendis eaque veritatis fugit. Reiciendis nihil amet`}
              price="Rp. 1.000.000"
              img="/images/hero.png"
            />
          );
        })}
      </div>
    </section>
  );
}

export default Layanan;
