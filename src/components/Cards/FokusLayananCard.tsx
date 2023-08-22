import Image from "next/image";
import React from "react";

interface FokusLayananCardProps {
  title: string;
  description: string;
  img: string;
}

function FokusLayananCard(
  { title, description, img }: FokusLayananCardProps,
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
      <div className="mt-[40px]">
        <h2 className="du-card-title text-xl font-normal">{title}</h2>
        <p className="line-clamp-4 font-light mt-[30px]">{description}</p>
      </div>
    </div>
  );
}

export default FokusLayananCard;
