import { ParallaxCardTestimoni } from "@/components/Helper/Parallax/ParallaxCardTestimoni";
import React from "react";
import ListLogoCard from "./ListLogoCard";
import { H2, H4 } from "@/components/Typography";

function Customer() {
  return (
    <section id="customer" className="md:container container-mobile">
      <div className="flex flex-col items-center text-center">
        <H2>
          Daftar
          <span className="text-primary"> Pelanggan Setia</span>
        </H2>
        <H4 className="">
          Tersedia layanan dibawah ini untuk transformasi digital anda dan
          bisnis anda
        </H4>
      </div>
      <div className="mt-[60px]">
        <ListLogoCard />
      </div>
    </section>
  );
}

export default Customer;
