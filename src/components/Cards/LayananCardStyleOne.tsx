import Image from "next/image";
import React from "react";
import LayoutCard from "./LayoutCard";
import { H3, H4, P } from "../Typography";

interface LayananCardStyleOneProps {
  title: string;
  description: string;
  category: string[];
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
    <LayoutCard className="rounded-[30px] w-full p-[50px]">
      <figure className="w-full flex justify-center h-[219px]">
        <Image src={img} alt="layanan" width={327} height={219} />
      </figure>
      <div className="mt-[40px]">
        <H3>
          {title}
          {isBest && (
            <span className="text-primary text-sm"> Pilihan terbaik</span>
          )}
        </H3>
        <P className="mt-[20px]">{description}</P>
        <div className="flex">
          {category.map((item, i) => {
            return (
              <LayoutCard
                key={"c-" + i}
                className="bg-[#F5F5F5] rounded-[10px] px-[10px] py-[5px] text-xs text-[#565656] mt-[10px] mr-[10px]"
              >
                {item}
              </LayoutCard>
            );
          })}
        </div>
      </div>
      <div className="mt-[20px] flex flex-col font-light">
        <P>Mulai dari</P>

        <H4 className="">
          {" "}
          <span className="font-semibold">{price}</span>
        </H4>
      </div>
    </LayoutCard>
  );
}

export default LayananCardStyleOne;
