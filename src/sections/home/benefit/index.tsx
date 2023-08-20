import Image from "next/image";
import React from "react";
import { AiFillCheckCircle } from "react-icons/ai";

function Benefit() {
  return (
    <section id="benefit" className="pt-[80px] w-full">
      <div className="flex w-full justify-between flex-col md:flex-row ">
        <div className="flex flex-col space-y-[50px] w-2/3 justify-center pr-[50px]">
          <div>
            <div className="text-primary">
              Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
            </div>
            <div className="text-3xl text-headline mt-[20px]">
              Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
            </div>
          </div>
          <div className="flex flex-col space-y-4">
            {[...Array(4)].map((_, i) => {
              return (
                <div className="flex flex-row " key={i}>
                  <AiFillCheckCircle className="text-primary" size={30} />
                  <span className="text-lg ml-2"> Lorem ipsum</span>
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
