import LayoutCard from "@/components/Cards/LayoutCard";
import { H2, H3, H4, H5, P } from "@/components/Typography";
import Image from "next/image";
import React from "react";

const benefit = [
  "Talent designer dan developer kami professional serta berpengalaman di perusahaan multinasional",
  "Menggunakan metode pengerjaan agile sehingga lebih cepat terselesaikan",
  "Skema harga yang cukup bersaing",
];

function Benefit() {
  return (
    <section id="benefit" className="container w-full">
      <LayoutCard className="rounded-[80px] p-[60px]">
        <div className="flex w-full justify-between flex-col md:flex-row ">
          <div className="">
            <Image
              width={554}
              height={416}
              src="/images/benefit.png"
              alt="hero"
              className=" rounded-3xl"
            />
          </div>
          <div className="flex flex-col space-y-[50px] w-3/4 justify-center">
            <div>
              <H3>
                Kenapa
                <span className="text-primary"> Galideo?</span>
              </H3>
            </div>
            <div className="flex flex-col space-y-4">
              {benefit.map((item, i) => {
                return (
                  <div className="grid grid-cols-12 items-center" key={"b" + i}>
                    <div className="flex justify-center">
                      <Image
                        src="/icons/rounded_check_icon.png"
                        width={32}
                        height={32}
                        alt="check"
                      />
                    </div>
                    <H5 className="col-span-11">{item}</H5>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </LayoutCard>
    </section>
  );
}

export default Benefit;
