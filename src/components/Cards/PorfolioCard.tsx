import Image from "next/image";
import React from "react";
import LayoutCard from "./LayoutCard";
import { H3, H4, P } from "../Typography";
import LayoutCard1 from "./LayoutCard1";
import Button from "../Buttons";

interface PorfolioCardProps {
  title: string;
  description: string;
  category: string[];
  img: string;
  link: string;
}

function PorfolioCard(
  { title, category, description, img, link }: PorfolioCardProps,
  props: any
) {
  return (
    <LayoutCard className="rounded-[30px] w-full p-[50px]">
      <figure className="w-full flex justify-center h-[219px]">
        <Image
          src={img}
          alt="layanan"
          width={327}
          height={219}
          className="rounded-[30px]"
        />
      </figure>
      <div className="mt-[20px] space-y-5">
        <div className="flex">
          {category.map((item, i) => {
            return (
              <LayoutCard1
                key={"c-" + i}
                className="bg-[#F5F5F5] rounded-[10px] px-[10px] py-[5px] text-xs text-[#565656] mt-[10px] mr-[10px]"
              >
                {item}
              </LayoutCard1>
            );
          })}
        </div>
        <H3>{title}</H3>
        <P className="line-clamp-3 h-20">{description}</P>
      </div>
      <div className="mt-[20px] flex flex-col font-light">
        <Button buttonType="primary" size="md" className="text-white">
          Lihat Disini
        </Button>
      </div>
    </LayoutCard>
  );
}

export default PorfolioCard;
