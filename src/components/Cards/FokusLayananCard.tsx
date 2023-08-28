import Image from "next/image";
import React from "react";
import LayoutCard from "./LayoutCard";

interface FokusLayananCardProps {
  title: string;
  description: string;
  index: string;
}

function FokusLayananCard(
  { title, description, index }: FokusLayananCardProps,
  props: any
) {
  return (
    <LayoutCard className="rounded-[30px] w-[615px] p-[50px] space-y-5">
      <LayoutCard className="rounded-full p-[10px] w-[40px]">
        <div className="flex justify-center font-semibold">{index}</div>
      </LayoutCard>
      <h2 className="text-gray-600 text-3xl font-bold">{title}</h2>
      <p className="line-clamp-4 font-light mt-[30px]">{description}</p>
    </LayoutCard>
  );
}

export default FokusLayananCard;
