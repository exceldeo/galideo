import React from "react";
import LayoutCard from "./LayoutCard";
import { H3, H5 } from "../Typography";

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
    <LayoutCard className="rounded-[30px] w-full p-[50px] space-y-5">
      <LayoutCard className="rounded-full p-[10px] w-[40px]">
        <div className="flex justify-center font-semibold">{index}</div>
      </LayoutCard>
      <H3>{title}</H3>
      <H5>{description}</H5>
    </LayoutCard>
  );
}

export default FokusLayananCard;
