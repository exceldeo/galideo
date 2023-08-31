import LayoutCard from "@/components/Cards/LayoutCard";
import LogoPelangganCard from "@/components/Cards/LogoPelangganCard";
import { H3, H5, P } from "@/components/Typography";
import React from "react";

const pelanggan1 = [
  {
    img: "/images/customer/its.png",
  },
  {
    img: "/images/customer/sidoarjo.png",
  },
  {
    img: "/images/customer/tuban.png",
  },
  {
    img: "/images/customer/unair.png",
  },
];

function ListLogoCard() {
  return (
    <div className="flex flex-row space-x-5 justify-center">
      {pelanggan1.map((item, i) => {
        return <LogoPelangganCard key={i} img={item.img} />;
      })}
      <LayoutCard className=" h-[100px] rounded-2xl space-y-1 flex flex-col justify-center px-[20px] py-[10px]">
        <H3>
          <span className="font-bold">20+</span>
        </H3>
        <P>
          <span className="font-normal">Pelanggan lainnya</span>
        </P>
      </LayoutCard>
    </div>
  );
}

export default ListLogoCard;
