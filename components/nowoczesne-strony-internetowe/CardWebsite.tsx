import Link from "next/link";
import React from "react";

type Props = { title: string; description: any; href: string };

function CardWebsite({ title, description, href }: Props) {
  return (
    <Link href={href}>
      <div>
        <div className="relative  dark:bg-black/60 dark:bg-opacity-80 dark:shadow-xl dark:hover:bg-gray-800 bg-white group focus:bg-orange-100 focus:shadow-lg hover:bg-orange-100 transition hover:shadow-lg bg-opacity-90 z-2 shadow-md p-8 rounded-lg ">
          <div className="fo-bold text-3xl md:text-3xl lg:text-4xl xl:text-5xl">
            {title}
          </div>
          <div className="my-2 translate-x-0.5 h-[5px] w-[23%] bg-orange-500"></div>
          <div className="py-4 mb-6">{description}</div>
          <div className="text-right transition-all group-hover:tracking-wide absolute bottom-6 right-6 ">
            <span className="text-orange-500 fo-bold">—</span> WIĘCEJ INFORMACJI{" "}
            <span className="text-orange-500 fo-bold">—</span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default CardWebsite;
