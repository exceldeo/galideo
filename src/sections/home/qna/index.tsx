import CollapseWithPlusIcon from "@/components/Collapse/CollapseWithPlus";
import React from "react";

function QnA() {
  return (
    <section id="qna" className=" w-full">
      <div className="flex w-full justify-center flex-col items-center">
        <div className="text-3xl font-semibold ">
          Pertanyaan yang sering ditanyakan
        </div>
        <div className="mt-[20px] font-normal text-xl">
          Anda dapat melihat Pertanyaan apa saja yang sering ditanyakan pada
          Galideo
        </div>
        <div className="mt-7 flex flex-col items-center space-y-6">
          <CollapseWithPlusIcon
            index={0}
            title="Apa itu Galideo?"
            content="Galideo adalah sebuah perusahaan yang bergerak di bidang IT Solution, yang berfokus pada pengembangan aplikasi berbasis web dan mobile. Galideo juga menyediakan layanan untuk pengembangan website, pengembangan aplikasi mobile, dan pengembangan aplikasi desktop."
            className="w-3/5"
          />
          <CollapseWithPlusIcon
            index={1}
            title="Apa itu Galideo?"
            content="Galideo adalah sebuah perusahaan yang bergerak di bidang IT Solution, yang berfokus pada pengembangan aplikasi berbasis web dan mobile. Galideo juga menyediakan layanan untuk pengembangan website, pengembangan aplikasi mobile, dan pengembangan aplikasi desktop."
            className="w-3/5"
          />
          <CollapseWithPlusIcon
            index={1}
            title="Apa itu Galideo?"
            content="Galideo adalah sebuah perusahaan yang bergerak di bidang IT Solution, yang berfokus pada pengembangan aplikasi berbasis web dan mobile. Galideo juga menyediakan layanan untuk pengembangan website, pengembangan aplikasi mobile, dan pengembangan aplikasi desktop."
            className="w-3/5"
          />
        </div>
      </div>
    </section>
  );
}

export default QnA;
