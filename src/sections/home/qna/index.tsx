import CollapseWithPlusIcon from "@/components/Collapse/CollapseWithPlus";
import React from "react";

function QnA() {
  return (
    <section id="qna" className="pt-[120px] w-full">
      <div className="flex w-full justify-center flex-col items-center">
        <div className="text-3xl text-headline font-semibold">
          Pertanyaan yang sering ditanyakan
        </div>
        <div className="text-2xl mt-2">
          Anda dapat melihat Pertanyaan apa saja yang sering ditanyakan pada
          Galideo
        </div>
        <div className="mt-5 flex flex-col items-center space-y-2">
          <CollapseWithPlusIcon
            index={0}
            title="Apa itu Galideo?"
            content="Galideo adalah sebuah perusahaan yang bergerak di bidang IT Solution, yang berfokus pada pengembangan aplikasi berbasis web dan mobile. Galideo juga menyediakan layanan untuk pengembangan website, pengembangan aplikasi mobile, dan pengembangan aplikasi desktop."
            className="w-2/3"
          />
          <CollapseWithPlusIcon
            index={1}
            title="Apa itu Galideo?"
            content="Galideo adalah sebuah perusahaan yang bergerak di bidang IT Solution, yang berfokus pada pengembangan aplikasi berbasis web dan mobile. Galideo juga menyediakan layanan untuk pengembangan website, pengembangan aplikasi mobile, dan pengembangan aplikasi desktop."
            className="w-2/3"
          />
        </div>
      </div>
    </section>
  );
}

export default QnA;
