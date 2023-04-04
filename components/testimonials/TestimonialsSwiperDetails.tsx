import React from "react";
import { TbStarFilled } from "react-icons/tb";
import { GoPerson } from "react-icons/go";
type Props = {
  avatar: any;
  name: string;
  source: string;
  desc: string;
};

function TestimonialsSwiperDetails({ avatar, name, source, desc }: Props) {
  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl flex flex-col p-6 w-[80%] my-10 mx-auto shadow-lg flex-auto">
      <div className="bg-orange-300 flex items-center text-5xl justify-center w-[70px] mx-auto h-[70px] rounded-full">
        {avatar}
      </div>
      <div className="pt-6 text-[#141d57] dark:text-white fo-semibold">
        {name}
      </div>
      <div className="text-orange-500 text-sm">{source}</div>
      <div className="text-sm mt-4">
        {desc}
        <div className="flex flex-row gap-2 justify-center mt-6">
          <TbStarFilled color="gold" />
          <TbStarFilled color="gold" />
          <TbStarFilled color="gold" />
          <TbStarFilled color="gold" />
          <TbStarFilled color="gold" />
        </div>
      </div>
    </div>
  );
}

export default TestimonialsSwiperDetails;
