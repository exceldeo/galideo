import Image from "next/image";
import React from "react";
import LayoutCard from "./LayoutCard";

interface LayananCardStyleOneProps {
  title: string;
  description: string;
  category: string;
  img: string;
  price: string;
  isBest: boolean;
}

function LayananCardStyleOne(
  {
    title,
    category,
    description,
    img,
    price,
    isBest,
  }: LayananCardStyleOneProps,
  props: any
) {
  return (
    <LayoutCard className="rounded-[30px] w-[615px] p-[50px]">
      <figure className="w-full flex justify-center">
        <Image
          src={img}
          alt="Shoes"
          width={410}
          height={273}
          className="rounded-2xl"
        />
      </figure>
      <div className="mt-[40px]">
        <div className="du-card-title text-2xl font-semibold">
          {title}
          {isBest && (
            <span className="text-primary text-sm"> Pilihan terbaik</span>
          )}
        </div>
        <p className="mt-[20px] font-normal">{category}</p>
        <p className="line-clamp-2 mt-[20px] font-light">{description}</p>
      </div>
      <div className="mt-[20px] flex flex-col font-light">
        Mulai dari
        <span className="text-xl font-semibold"> {price}</span>
      </div>
    </LayoutCard>
  );
}

export default LayananCardStyleOne;
