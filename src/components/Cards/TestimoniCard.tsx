import Image from "next/image";
import React from "react";
import LayoutCard from "./LayoutCard";

interface TestimoniCardProps {
  title: string;
  description: string;
  name: string;
  job?: string;
  image?: string;
  layanan?: string;
}

function TestimoniCard({
  title,
  description,
  name,
  job,
  image,
  layanan,
}: TestimoniCardProps) {
  return (
    <LayoutCard className="rounded-2xl text-sm space-y-3 flex flex-col  px-[30px] py-[20px] min-w-[400px] ">
      <div className="font-semibold">{title}</div>
      <div>&quot;{description}&quot;</div>
      <div className="flex">
        <Image
          src="/images/hero.png"
          alt="hero"
          width={100}
          height={100}
          className="pr-[20px]"
        />
        <div className="flex flex-col">
          <div className="font-semibold">{name}</div>
          <div className="">{job}</div>
          <div className="font-light text-xs">
            Menggunakan layanan {layanan}
          </div>
        </div>
      </div>
    </LayoutCard>
  );
}

export default TestimoniCard;
