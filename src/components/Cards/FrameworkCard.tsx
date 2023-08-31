import Image from "next/image";
import React from "react";
import LayoutCard from "./LayoutCard";
import { H3, H4, H5, P } from "../Typography";

interface FrameworkCardProps {
  logo: string;
  title: string;
  description: string;
}

function FrameworkCard({ logo, title, description }: FrameworkCardProps) {
  return (
    <LayoutCard className="rounded-3xl flex  px-[30px] py-[20px] min-w-[260px] ">
      <Image
        src={logo}
        alt="tools"
        width={50}
        height={60}
        className="mr-[20px] object-contain"
      />
      <div className="flex flex-col">
        <H4>
          <span className="font-bold">{title}</span>
        </H4>
        <P>
          <span className="font-normal">{description}</span>
        </P>
      </div>
    </LayoutCard>
  );
}

export default FrameworkCard;
