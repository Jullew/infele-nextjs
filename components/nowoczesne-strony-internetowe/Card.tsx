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
      <div className="bg-white shadow-xl p-12 border border-gray-100 rounded-xl flex hover:bg-orange-500 group flex-col w-[100%] xl:w-[80%]">
        <div className="text-orange-500 group-hover:text-white bg-clip-text">
          {icon}
        </div>
        <div className="fo-semibold py-4 text-xl text-[#1e1666] group-hover:text-white ">
          {title}
        </div>
        <div className="text-gray-500 group-hover:text-white ">{desc}</div>
      </div>
    </div>
  );
}

export default Card;
