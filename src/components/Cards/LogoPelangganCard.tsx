import Image from "next/image";
import React from "react";
import LayoutCard from "./LayoutCard";

interface LogoPelangganCardProps {
  img: string;
}

function LogoPelangganCard({ img }: LogoPelangganCardProps, props: any) {
  return (
    <LayoutCard className="w-[100px] h-[100px] rounded-2xl  flex items-center justify-center px-[20px] py-[10px]">
      <Image
        src="/images/hero.png"
        alt="logo pelanggan"
        width={410}
        height={273}
        objectFit="cover"
      />
    </LayoutCard>
  );
}

export default LogoPelangganCard;
