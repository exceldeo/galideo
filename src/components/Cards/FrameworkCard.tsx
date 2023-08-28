import Image from "next/image";
import React from "react";
import LayoutCard from "./LayoutCard";

interface FrameworkCardProps {
  logo: string;
  title: string;
  description: string;
}

function FrameworkCard({ logo, title, description }: FrameworkCardProps) {
  return (
    <LayoutCard className="rounded-2xl flex  px-[30px] py-[20px] min-w-[260px] ">
      <Image
        src="/images/hero.png"
        alt="hero"
        width={100}
        height={100}
        className="pr-[20px]"
      />
      <div className="flex flex-col">
        <div className="text-primary text-2xl">{title}</div>
        <div className="text-headline mt-[10px] text-sm">{description}</div>
      </div>
    </LayoutCard>
  );
}

export default FrameworkCard;
