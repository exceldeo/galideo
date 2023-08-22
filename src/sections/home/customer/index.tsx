import { ParallaxCardTestimoni } from "@/components/Helper/Parallax/ParallaxCardTestimoni";
import React from "react";
import ListLogoCard from "./ListLogoCard";

function Customer() {
  return (
    <section id="customer" className="pt-[80px] w-full">
      <div className="flex w-full justify-between flex-col sm:flex-row ">
        <div className="flex flex-col space-y-5 max-w-[1000px] ">
          <ListLogoCard />
        </div>
        <div className="flex flex-col space-y-[50px] justify-center pr-[50px]">
          <div className="space-y-2">
            <div className="text-primary font-normal">Daftar Pelanggan</div>
            <div className="text-2xl text-headline font-semibold">
              Pelanggan Setia Kami
            </div>
            <p className="line-clamp-3">
              Sudah Membuktikan Layanan Yang Di Berikan Dan Puas Dengan Kinerja
              Kami
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Customer;
