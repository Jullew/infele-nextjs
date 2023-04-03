import React from "react";
import { FaReact, FaWordpress } from "react-icons/fa";
import { SiWoocommerce, SiPrestashop, SiTailwindcss } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import TechnologiesHighligt from "./TechnologiesHighligt";

type Props = {};

function Technologies({}: Props) {
  return (
    <div className="container mx-auto mt-36">
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-5xl fo-bold">Takich technologii używamy</h2>
        <div className="flex text-orange-600 flex-wrap p-8 flex-row gap-10">
          <div className="relative group w-1/1">
            <TechnologiesHighligt text="ReactJS" />

            <FaReact size={80} />
          </div>
          <div className="relative group">
            <TechnologiesHighligt text="Wordpress" />
            <FaWordpress size={80} />
          </div>
          <div className="relative group">
            <TechnologiesHighligt text="Woocommerce" />

            <SiWoocommerce size={80} />
          </div>
          <div className="relative group">
            <TechnologiesHighligt text="Prestashop" />

            <SiPrestashop size={80} />
          </div>
          <div className="relative group">
            <TechnologiesHighligt text="NextJS" />

            <TbBrandNextjs size={80} />
          </div>
          <div className="relative group">
            <TechnologiesHighligt text="Tailwind CSS" />

            <SiTailwindcss size={80} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Technologies;
