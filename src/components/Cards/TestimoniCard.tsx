import Image from "next/image";
import React from "react";
import LayoutCard from "./LayoutCard";
import { H5, P } from "../Typography";

interface TestimoniCardProps {
  title: string;
  description: string;
  name: string;
  job?: string;
  image: string;
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
    <LayoutCard className="rounded-3xl text-sm space-y-4 flex flex-col  px-[30px] py-[20px] min-w-[400px] ">
      <div className="space-y-2">
        <H5>
          <span className="font-semibold">{title}</span>
        </H5>
        <P>
          <span className="font-normal">&quot;{description}&quot;</span>
        </P>
      </div>
      <div className="flex items-center">
        <Image
          src={image}
          alt="pelanggan"
          width={100}
          height={100}
          className="mr-[20px] rounded-full object-cover h-14 w-14"
        />
        <div className="flex flex-col space-y-1">
          <P>
            <span className="font-semibold">{name}</span>
          </P>
          <div className="">{job}</div>
          <div className="font-light">Menggunakan layanan {layanan}</div>
        </div>
      </div>
    </LayoutCard>
  );
}

export default TestimoniCard;
