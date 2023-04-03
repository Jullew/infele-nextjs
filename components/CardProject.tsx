import Link from "next/link";
import React from "react";
import { BsBoxArrowInRight } from "react-icons/bs";

type Props = {
  title: string;
  link: string;
  width: string;
};

function CardProject({ title, link, width }: Props) {
  return (
    <div
      className={`bg-[url('../public/ks-bizuteria-logo.png')]  bg-center cursor-pointer transition-all  relative bg-cover group h-[350px] hover:scale-105 bg-no-repeat min-w-[${width}] rounded-lg bg-orange-500`}
    >
      <div className="p-2 opacity-0 group-hover:opacity-100 -translate-y-4 group-hover:translate-y-0 transition-all">
        <div className="fo-bold text-3xl text-gray-700 md:text-xl">{title}</div>
        <div className="my-2 translate-x-0.5 h-[5px] w-[23%] bg-orange-500"></div>
      </div>
      <div className="p-4 flex flex-row align-center items-center justify-center gap-2 bg-orange-500 text-white m-4 rounded-full opacity-0 group-hover:opacity-100 group-hover:-translate-y-10 absolute left-[50%] -translate-x-[50%] bottom-0 transition-all duration-500 ">
        Wyświetl Projekt <BsBoxArrowInRight />
      </div>
    </div>
  );
}

export default CardProject;
