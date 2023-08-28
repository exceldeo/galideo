import { ParallaxCardTestimoni } from "@/components/Helper/Parallax/ParallaxCardTestimoni";
import React from "react";
import ListLogoCard from "./ListLogoCard";

function Customer() {
  return (
    <section id="customer" className="pt-[80px] w-full">
      <div className="flex flex-col space-y-[30px] items-center ">
        <div className="text-5xl font-semibold ">
          Daftar
          <span className="text-primary"> Pelanggan Setia</span>
          Kami
        </div>
        <div className="mt-[20px] font-thin">
          Tersedia layanan dibawah ini untuk transformasi digital anda dan
          bisnis anda
        </div>
      </div>
      <div className="mt-[60px]">
        <ListLogoCard />
      </div>
    </section>
  );
}

export default Customer;
