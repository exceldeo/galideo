import FokusLayananCard from "@/components/Cards/FokusLayananCard";
import LayananCard from "@/components/Cards/LayananCardStyleOne";
import { H2, H4 } from "@/components/Typography";
import React from "react";

const layanan = [
  {
    img: "/images/layanan1.png",
    title: "Desain",
    category: ["Website", " Mobile"],
    description:
      "Sesuai untuk bisnis yang telah memiliki website dan membutuhkan perbaruan",
    price: "Rp. 1.000.000",
    isBest: false,
  },
  {
    img: "/images/layanan2.png",
    title: "Development",
    category: ["Website", " Mobile"],
    description:
      "Sesuai untuk bisnis yang telah memiliki website dan membutuhkan perbaruan",
    price: "Rp. 10.000.000",
    isBest: false,
  },
];

const fokusLayanan = [
  {
    title: "Fokus Dengan Masalah Bisnis",
    index: "1",
    description:
      "pekerjaan kami lebih fokus pada masalah yang dihadapi sehingga di selesaikan dengan cepat",
  },
  {
    index: "2",
    title: "Dukungan Teknik Yang Cepat",
    description:
      "kami menyediakan tim khusus aftersale untuk mendukung layanan teknis dengan cepat",
  },
  {
    index: "3",
    title: "Perlindungan Privasi Bisnis",
    description:
      "data pada bisnis pastinya sangat krusial dan kami sangat melindungi data privasi bisnis anda",
  },
  {
    index: "4",
    title: "UI & UX Ramah Oleh Mata",
    description:
      "kemudahan pelanggan sangat penting sehingga mudah proses pembelian pada bisnis anda",
  },
];

function Layanan() {
  return (
    <section id="layanan" className="flex flex-col space-y-[50px] container">
      <div className="flex flex-col items-center">
        <H2>
          Layanan
          <span className="text-primary"> Kami</span>
        </H2>
        <H4 className="">
          Tersedia layanan dibawah ini untuk transformasi digital anda dan
          bisnis anda
        </H4>
        <div className="flex sm:space-x-[30px] mt-[50px] flex-col sm:flex-row w-full">
          {layanan.map((item, i) => {
            return (
              <LayananCard
                key={"l" + i}
                title={item.title}
                category={item.category}
                description={item.description}
                img={item.img}
                price={item.price}
                isBest={item.isBest}
              />
            );
          })}
        </div>
      </div>
      <div className="flex flex-col items-center">
        <H2>
          Fokus
          <span className="text-primary"> Layanan Kami</span>
        </H2>
        <H4 className="">
          Tersedia layanan dibawah ini untuk transformasi digital anda dan
          bisnis anda
        </H4>
        <div className="flex space-x-[30px] mt-[50px] flex-col sm:flex-row">
          {fokusLayanan
            .filter((item) => parseInt(item.index) < 3)
            .map((item, i) => {
              return (
                <FokusLayananCard
                  key={"fl-" + i}
                  title={item.title}
                  description={item.description}
                  index={item.index}
                />
              );
            })}
        </div>
        <div className="flex space-x-[30px] mt-[50px] flex-col sm:flex-row">
          {fokusLayanan
            .filter((item) => parseInt(item.index) > 2)
            .map((item, i) => {
              return (
                <FokusLayananCard
                  key={"fl-" + i}
                  title={item.title}
                  description={item.description}
                  index={item.index}
                />
              );
            })}
        </div>
      </div>
    </section>
  );
}

export default Layanan;
