import React from "react";
import { AiOutlineLaptop } from "react-icons/ai";
type Props = {
  icon: any;
  title: string;
  desc: string;
};

function Card({ icon, title, desc }: Props) {
  return (
    <div>
      <div className="bg-white shadow-xl p-12 border dark:border-gray-800 border-gray-100 rounded-xl flex hover:bg-orange-500 dark:bg-black/80 dark:hover:bg-black dark:hover:bg-opacity-40 group flex-col w-[100%] xl:w-[80%]">
        <div className="text-orange-500 group-hover:text-white bg-clip-text">
          {icon}
        </div>
        <div className="fo-semibold py-4 text-xl text-head group-hover:text-white ">
          {title}
        </div>
        <div className="text-gray-500 group-hover:text-white ">{desc}</div>
      </div>
    </div>
  );
}

export default Card;
