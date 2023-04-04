import React from "react";

type Props = { title: any; subtitle: string };

function PageHeading({ title, subtitle }: Props) {
  return (
    <div>
      <div className="pt-36 lg:pt-60 w-[100%] lg:w-[80%] mb-40">
        <h1 className="fo-semibold text-4xl lg:text-6xl text-[#1e1666]">
          {title}
        </h1>
        <p className="w-[100%] lg:w-[65%] py-20 text-gray-500X">{subtitle}</p>
        <div className="flex flex-row gap-20 items-center">
          <button className="btn-submit p-6 rounded-full tracking-widest ">
            ROZPOCZNIJ PROJEKT
          </button>
          <div className="flex flex-col">
            <div className=" text-orange-500 ">Zadzwoń 507 273 855</div>
            <div className="text-gray-400">
              Odkryj co możemy dla Ciebie zrobić
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageHeading;
