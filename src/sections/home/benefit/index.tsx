import Image from "next/image";
import React from "react";
import { AiFillCheckCircle } from "react-icons/ai";

const benefit = [
  "Talent designer dan developer kami professional serta berpengalaman di perusahaan multinasional",
  "Menggunakan metode pengerjaan agile sehingga lebih cepat terselesaikan",
  "Skema harga yang cukup bersaing",
];

function Benefit() {
  return (
    <section id="benefit" className=" w-full">
      <div className="flex w-full justify-between flex-col md:flex-row ">
        <div className="flex flex-col space-y-[50px] w-2/3 justify-center pr-[50px]">
          <div>
            <div className="text-primary text-lg">
              Transformasi Digital Industri 4.0
            </div>
            <div className="text-3xl font-medium text-headline mt-[20px]">
              Saat nya transformasikan bisnis anda ke digital bersama kami
            </div>
          </div>
          <div className="flex flex-col space-y-4">
            {benefit.map((item, i) => {
              return (
                <div className="grid grid-cols-12 items-center" key={"b" + i}>
                  <div className="flex justify-center">
                    <AiFillCheckCircle className="text-primary" size={32} />
                  </div>

                  <span className="text-xl font-light col-span-11">
                    {" "}
                    {item}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex ">
          <Image
            width={554}
            height={416}
            src="/images/hero.png"
            alt="hero"
            className=" rounded-3xl"
          />
        </div>
      </div>
    </section>
  );
}

export default Benefit;
