import Image from "next/image";
import { Inter } from "next/font/google";
import Hero from "@/sections/home/hero";
import Layanan from "@/sections/home/layanan";
import Benefit from "@/sections/home/benefit";
import ToolsFramework from "@/sections/home/toolsFramework";
import Testimoni from "@/sections/home/testimoni";
import QnA from "@/sections/home/qna";
import Footer from "@/components/Footer";
import Customer from "@/sections/home/customer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <main
        className={` ${inter.className} bg-backgroundPrimary px-[80px] pb-[100px]`}
      >
        <div className="space-y-[120px] pt-[120px]">
          <Hero />
          <Layanan />
          <Benefit />
          <ToolsFramework />
          <Customer />
          <Testimoni />
          <QnA />
        </div>
      </main>
      <Footer />
    </>
  );
}
