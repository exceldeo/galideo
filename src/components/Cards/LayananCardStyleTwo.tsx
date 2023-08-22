import Image from "next/image";
import React from "react";

interface LayananCardStyleTwoProps {
  title: string;
  description: string;
  img: string;
  price: string;
}

function LayananCardStyleTwo(
  { title, description, img, price }: LayananCardStyleTwoProps,
  props: any
) {
  return (
    <div className="du-card w-[297.5px] bg-base-100 shadow-xl rounded-2xl p-[30px]">
      <figure>
        <Image
          src="/images/hero.png"
          alt="Shoes"
          width={410}
          height={273}
          className="rounded-2xl"
        />
      </figure>
      <div className="mt-[30px]">
        <h2 className="du-card-title">{title}</h2>
        <p className="line-clamp-2">{description}</p>
      </div>
      <div className="mt-[20px] flex flex-col">
        Mulai dari
        <span className="text-lg"> {price}</span>
      </div>
    </div>
  );
}

export default LayananCardStyleTwo;
