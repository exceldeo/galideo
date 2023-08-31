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
        src={img}
        alt="logo pelanggan"
        width={60}
        height={60}
        className="object-none max-w-[60px] max-h-[60px]"
      />
    </LayoutCard>
  );
}

export default LogoPelangganCard;
