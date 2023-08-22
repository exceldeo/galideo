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
];

const pelanggan2 = [
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
    <div className="flex flex-col space-y-3">
      <div className="flex flex-row space-x-5">
        {pelanggan1.map((item, i) => {
          return <LogoPelangganCard key={i} img={item.img} />;
        })}
      </div>
      <div className="flex flex-row space-x-5">
        {pelanggan1.map((item, i) => {
          return <LogoPelangganCard key={i} img={item.img} />;
        })}
        <div className=" h-[100px] bg-base-100 rounded-2xl justify-center px-[20px] py-[10px] flex flex-col">
          <div className="text-2xl font-semibold">20+</div>
          <div className="text-md">Pelanggan lainnya</div>
        </div>
      </div>
    </div>
  );
}

export default ListLogoCard;
