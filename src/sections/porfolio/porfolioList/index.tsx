import PorfolioCard from "@/components/Cards/PorfolioCard";
import { H2, H4 } from "@/components/Typography";
import React from "react";

const porfolio = [
  {
    img: "/images/hero.png",
    title: "Desain",
    category: ["Website", " Mobile"],
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean congue sed elit in consectetur. Sed congue aliquam vulputate. Cras augue velit, aliquam in posuere et, interdum et nisi. Suspendisse finibus arcu mauris, quis varius leo condimentum at. Cras ut ultrices sem. Phasellus pellentesque vel turpis eget laoreet. Vivamus vitae egestas dui. Duis volutpat faucibus neque at pellentesque. Vivamus euismod facilisis nisl. Sed eget gravida enim. Morbi semper suscipit nibh, sit amet lacinia arcu sagittis quis. Nulla et libero et elit vehicula pellentesque. Nullam porttitor molestie nisl at facilisis. Nam vel ornare turpis. Duis condimentum ligula non dapibus finibus.

      Donec vel sem lorem. Nullam quis semper enim. Maecenas ante ex, commodo ut lacus vel, laoreet lacinia sapien. Duis dignissim non ante eget lobortis. Ut posuere tincidunt tortor et porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi accumsan sapien vel arcu sodales, ut ornare nisl sollicitudin.
      
      Nunc eu risus lobortis quam condimentum tincidunt ut a arcu. Maecenas eros urna, mollis at congue in, maximus at lorem. Nam ipsum lectus, tempus vitae aliquet in, accumsan sed purus. Maecenas viverra eleifend metus quis lobortis. Fusce dignissim risus sit amet purus hendrerit vestibulum. Fusce facilisis, enim at blandit congue, nulla enim laoreet ex, id efficitur ligula elit eget est. Donec eget ipsum dui. Phasellus condimentum arcu non pharetra auctor. Vivamus vel mi pulvinar, mollis nisi ut, cursus lectus. Nullam lobortis auctor ultrices. Vestibulum eget velit a lectus accumsan tempus. Sed consectetur tellus sit amet nisl posuere semper. Ut malesuada lacus at felis dignissim finibus. Ut fringilla sollicitudin turpis, eu condimentum lectus sagittis et. Integer a dolor orci.
      
      Cras et odio ac felis gravida tempus. Nam aliquam malesuada finibus. Sed sed sagittis enim. Sed lacinia hendrerit velit et congue. Phasellus at nibh convallis, faucibus odio sed, commodo erat. Mauris libero nunc, suscipit ac maximus id, consequat tincidunt tellus. Vivamus maximus sagittis neque tincidunt cursus. In pharetra dolor nulla, facilisis rutrum orci condimentum eu. Etiam non ipsum augue. Ut quam purus, pretium eu eros pharetra, accumsan accumsan sem.
      
      Nunc laoreet egestas leo. Phasellus feugiat nisl ipsum, sit amet aliquet purus venenatis vitae. Duis auctor, libero sed tincidunt condimentum, justo ipsum tempus dolor, et efficitur sapien nunc a justo. Donec sed nulla malesuada, varius lectus consectetur, ultricies sapien. Integer varius erat metus, vel malesuada ante consequat id. Integer feugiat ac enim id tempor. Maecenas tincidunt, ligula at molestie volutpat, ligula nunc semper purus, sit amet aliquam tellus magna vel augue.`,
    link: "",
  },
  {
    img: "/images/hero.png",
    title: "Desain",
    category: ["Website", " Mobile"],
    description:
      "Sesuai untuk bisnis yang telah memiliki website dan membutuhkan perbaruan",
    link: "",
  },
  {
    img: "/images/hero.png",
    title: "Desain",
    category: ["Website", " Mobile"],
    description:
      "Sesuai untuk bisnis yang telah memiliki website dan membutuhkan perbaruan",
    link: "",
  },
  {
    img: "/images/hero.png",
    title: "Desain",
    category: ["Website", " Mobile"],
    description:
      "Sesuai untuk bisnis yang telah memiliki website dan membutuhkan perbaruan",
    link: "",
  },
  {
    img: "/images/hero.png",
    title: "Desain",
    category: ["Website", " Mobile"],
    description:
      "Sesuai untuk bisnis yang telah memiliki website dan membutuhkan perbaruan",
    link: "",
  },
  {
    img: "/images/hero.png",
    title: "Desain",
    category: ["Website", " Mobile"],
    description:
      "Sesuai untuk bisnis yang telah memiliki website dan membutuhkan perbaruan",
    link: "",
  },
];

function PorfolioListSection() {
  return (
    <section id="porfolio" className="w-full container">
      <div className="flex flex-col items-center ">
        <H2>
          Berikut Pekerjaan Untuk
          <span className="text-primary"> Klien Kami</span>
        </H2>
        <H4 className="">
          Tersedia layanan dibawah ini untuk transformasi digital anda dan
          bisnis anda
        </H4>
      </div>
      <div className="mt-[60px] grid grid-cols-3 gap-4">
        {porfolio.map((item, i) => {
          return (
            <PorfolioCard
              key={"p" + i}
              img={item.img}
              title={item.title}
              category={item.category}
              description={item.description}
              link={item.link}
            />
          );
        })}
      </div>
    </section>
  );
}

export default PorfolioListSection;
