import LayoutCard from "@/components/Cards/LayoutCard";
import LogoPelangganCard from "@/components/Cards/LogoPelangganCard";
import React from "react";

const pelanggan1 = [
  {
    img: "/images/hero.png",
  },
  {
    img: "/images/hero.png",
  },
  {
    img: "/images/hero.png",
  },
  {
    img: "/images/hero.png",
  },
  {
    img: "/images/hero.png",
  },
];

function ListLogoCard() {
  return (
    <div className="flex flex-row space-x-5 justify-center">
      {pelanggan1.map((item, i) => {
        return <LogoPelangganCard key={i} img={item.img} />;
      })}
      <LayoutCard className=" h-[100px] rounded-2xl  flex flex-col justify-center px-[20px] py-[10px]">
        <div className="text-2xl font-semibold">20+</div>
        <div className="text-md">Pelanggan lainnya</div>
      </LayoutCard>
    </div>
  );
}

export default ListLogoCard;
