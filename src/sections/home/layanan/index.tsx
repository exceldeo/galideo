import FokusLayananCard from "@/components/Cards/FokusLayananCard";
import LayananCard from "@/components/Cards/LayananCardStyleOne";
import React from "react";

const layanan = [
  {
    img: "/images/hero.png",
    title: "Desain",
    category: "Website & Mobile",
    description:
      "Sesuai untuk bisnis yang telah memiliki website dan membutuhkan perbaruan",
    price: "Rp. 1.000.000",
    isBest: false,
  },
  {
    img: "/images/hero.png",
    title: "Development",
    category: "Website & Mobile",
    description:
      "Sesuai untuk bisnis yang telah memiliki website dan membutuhkan perbaruan",
    price: "Rp. 10.000.000",
    isBest: false,
  },
  {
    img: "/images/hero.png",
    title: "Bundling",
    category: "Website & Mobile",
    description:
      "Sesuai untuk bisnis yang telah memiliki website dan membutuhkan perbaruan",
    price: "Rp. 3.000.000",
    isBest: true,
  },
];

const fokusLayanan = [
  {
    title: "Fokus Dengan Masalah Bisnis",
    img: "/images/hero.png",
    description:
      "pekerjaan kami lebih fokus pada masalah yang dihadapi sehingga di selesaikan dengan cepat",
  },
  {
    title: "Dukungan Teknik Yang Cepat",
    img: "/images/hero.png",
    description:
      "kami menyediakan tim khusus aftersale untuk mendukung layanan teknis dengan cepat",
  },
  {
    title: "Perlindungan Privasi Bisnis",
    img: "/images/hero.png",
    description:
      "data pada bisnis pastinya sangat krusial dan kami sangat melindungi data privasi bisnis anda",
  },
  {
    title: "UI & UX Ramah Oleh Mata",
    img: "/images/hero.png",
    description:
      "kemudahan pelanggan sangat penting sehingga mudah proses pembelian pada bisnis anda",
  },
];

function Layanan() {
  return (
    <section id="layanan" className="flex flex-col space-y-[120px] ">
      <div className="flex flex-col items-center">
        <div className="text-5xl font-semibold ">
          Layanan
          <span className="text-primary"> Kami</span>
        </div>
        <div className="mt-[20px] font-thin">
          Tersedia layanan dibawah ini untuk transformasi digital anda dan
          bisnis anda
        </div>
        <div className="flex space-x-[30px] mt-[50px] flex-col sm:flex-row">
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
        <div className="text-5xl font-semibold ">
          Fokus
          <span className="text-primary"> Layanan Kami</span>
        </div>
        <div className="mt-[20px] font-thin">
          Tersedia layanan dibawah ini untuk transformasi digital anda dan
          bisnis anda
        </div>
        <div className="flex space-x-[30px] mt-[50px] flex-col sm:flex-row">
          {fokusLayanan.map((item, i) => {
            return (
              <FokusLayananCard
                key={"fl-" + i}
                title={item.title}
                description={item.description}
                img={item.img}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Layanan;
