import Image from "next/image";
import { Inter } from "next/font/google";
import Hero from "@/sections/home/hero";
import Layanan from "@/sections/home/layanan";
import Benefit from "@/sections/home/benefit";
import ToolsFramework from "@/sections/home/toolsFramework";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={` ${inter.className} bg-gray-50 px-[80px] pb-[100px]`}>
      <Hero />
      <Layanan />
      <Benefit />
      <ToolsFramework />
    </main>
  );
}
