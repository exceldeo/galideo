import LayoutCard from "@/components/Cards/LayoutCard";
import CollapseWithPlusIcon from "@/components/Collapse/CollapseWithPlus";
import { H2, H5 } from "@/components/Typography";
import React from "react";

function QnA() {
  return (
    <section id="qna" className=" w-full">
      <div className="flex w-full justify-center flex-col items-center">
        <H2>
          <span className="text-primary">Pertanyaan </span>
          yang sering ditanyakan
        </H2>
        <H5 className="">
          Anda dapat melihat Pertanyaan apa saja yang sering ditanyakan pada
          Galideo
        </H5>
        <div className="flex flex-col items-center space-y-5 mt-[40px]">
          <LayoutCard className="w-3/5 rounded-xl">
            <CollapseWithPlusIcon
              className="bg-opacity-0"
              index={0}
              title="Apa itu Galideo?"
              content="Galideo adalah sebuah perusahaan yang bergerak di bidang IT Solution, yang berfokus pada pengembangan aplikasi berbasis web dan mobile. Galideo juga menyediakan layanan untuk pengembangan website, pengembangan aplikasi mobile, dan pengembangan aplikasi desktop."
            />
          </LayoutCard>
          <LayoutCard className="w-3/5 rounded-xl">
            <CollapseWithPlusIcon
              className="bg-opacity-0"
              index={0}
              title="Apa itu Galideo?"
              content="Galideo adalah sebuah perusahaan yang bergerak di bidang IT Solution, yang berfokus pada pengembangan aplikasi berbasis web dan mobile. Galideo juga menyediakan layanan untuk pengembangan website, pengembangan aplikasi mobile, dan pengembangan aplikasi desktop."
            />
          </LayoutCard>
          <LayoutCard className="w-3/5 rounded-xl">
            <CollapseWithPlusIcon
              className="bg-opacity-0"
              index={0}
              title="Apa itu Galideo?"
              content="Galideo adalah sebuah perusahaan yang bergerak di bidang IT Solution, yang berfokus pada pengembangan aplikasi berbasis web dan mobile. Galideo juga menyediakan layanan untuk pengembangan website, pengembangan aplikasi mobile, dan pengembangan aplikasi desktop."
            />
          </LayoutCard>
        </div>
      </div>
    </section>
  );
}

export default QnA;
