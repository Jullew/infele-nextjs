import React from "react";

type Props = { title: string; description: string };

function CardWebsite({ title, description }: Props) {
  return (
    <div>
      <div className="md:w-[60%] sm:w-1/1 md:min-w-[40%] lg:min-w-[40%] xl:min-w-[31%] min-w-[94vw] relative dark:bg-gray-900 dark:bg-opacity-80 dark:shadow-xl dark:hover:bg-gray-800 bg-white group focus:bg-orange-100 focus:shadow-lg hover:bg-orange-100 transition hover:shadow-lg bg-opacity-90 z-2 shadow-md p-8 rounded-lg ">
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
  );
}

export default CardWebsite;
