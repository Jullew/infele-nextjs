import React from "react";
import { FaReact, FaWordpress } from "react-icons/fa";
import {
  SiWoocommerce,
  SiPrestashop,
  SiTailwindcss,
  SiGraphql,
  SiNodedotjs,
  SiJavascript,
  SiTypescript,
  SiStoryblok,
  SiShopify,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import TechnologiesHighligt from "./TechnologiesHighligt";
import SanityIcon from "../public/sanity.svg";
import Link from "next/link";

type Props = {};

function Technologies({}: Props) {
  return (
    <div className="container mx-auto my-36">
      <div className="xl:flex hidden flex-col items-center justify-center">
        <div className="flex w-full flex-wrap justify-center  flex-row ">
          <div className=" w-1/6 border-b-2 flex justify-center flex-col  gap-2 items-center border-r-2 p-6">
            <SiStoryblok color="#09adaa" size={60} />
            Storyblok
          </div>
          <div className=" w-1/6 border-b-2 border-r-2 p-6 flex-col flex justify-center items-center gap-2">
            <FaWordpress color="#0170a5" size={60} />
            Wordpress
          </div>
          <div className="text-lg fo-bold w-1/6 border-b-2 p-6 flex-col flex justify-center items-center gap-2">
            cms
          </div>
        </div>
        <div className="flex  w-full flex-wrap justify-center flex-row ">
          <div className="text-xl fo-bold w-1/6  border-b-2 flex justify-center items-center border-r-2 p-6">
            frontend
          </div>
          <div className=" w-1/6  border-r-2 border-b-2 p-6 flex-col flex justify-center items-center gap-2">
            <FaReact color="#5ed3f3" size={60} />
            React
          </div>
          <div className=" w-1/6  border-r-2 border-b-2 p-6 flex-col flex justify-center items-center gap-2">
            <SiTailwindcss color="#38bdf8" size={60} />
            tailwindcss
          </div>
          <div className=" w-1/6  p-6 flex-col border-b-2 flex justify-center items-center gap-2">
            <TbBrandNextjs color="black" size={60} />
            Next.js
          </div>
        </div>

        <h2 className="text-[120px] fo-bold text-center">
          STACK TECHNOLOGICZNY
        </h2>
        <div className="flex  w-full flex-wrap justify-center flex-row ">
          <div className="text-md w-1/6 border-t-2 flex justify-center flex-col  gap-2 items-center border-r-2 p-6">
            <SiGraphql color="#de33a6" size={60} />
            GraphQL
          </div>
          <div className=" w-1/6 border-t-2 border-r-2 p-6 flex-col flex justify-center items-center gap-2">
            <SiNodedotjs color="#509941" size={60} />
            Node.js
          </div>
          <div className=" w-1/6 border-t-2 border-r-2 p-6 flex-col flex justify-center items-center gap-2">
            <SiJavascript color="#efd81d" size={60} />
            JavaScript
          </div>
          <div className=" w-1/6 border-t-2 border-r-2 p-6 flex-col flex justify-center items-center gap-2">
            <SiTypescript color="#2f74c0" size={60} />
            TypeScript
          </div>
          <div className=" w-1/6 border-t-2 fo-bold text-xl p-6 flex-col flex justify-center items-center gap-2">
            backend
          </div>
        </div>
        <div className="flex  w-full flex-wrap justify-center  flex-row ">
          <div className="text-xl fo-bold w-1/6 border-t-2 flex justify-center flex-col  gap-2 items-center border-r-2 p-6">
            ecommerce
          </div>
          <div className=" w-1/6 border-t-2 border-r-2 p-6 flex-col flex justify-center items-center gap-2">
            <SiShopify color="#90b945" size={60} />
            Shopify
          </div>
          <div className=" w-1/6 border-t-2 p-6 flex-col flex justify-center items-center gap-2">
            <SiPrestashop color="#d81565" size={60} />
            PrestaShop
          </div>
        </div>
      </div>

      <div className="xl:hidden flex-col items-center justify-center">
        <div className="flex  w-full flex-wrap justify-center  text-[13px]  flex-row ">
          <div className=" w-1/6 border-b-2 flex justify-center flex-col gap-2 items-center border-r-2 p-6">
            <SiStoryblok color="#09adaa" size={60} />
            Storyblok
          </div>
          <div className=" w-1/6 border-b-2 border-r-2 p-6 flex-col flex justify-center items-center gap-2">
            <FaWordpress color="#0170a5" size={60} />
            Wordpress
          </div>
          <div className="text-lg fo-bold w-1/6 border-b-2 p-6 flex-col flex justify-center text-[15px] items-center gap-2">
            cms
          </div>
        </div>
        <div className="flex  w-full flex-wrap justify-center flex-row text-[13px]">
          <div className="text-xl fo-bold w-1/6  border-b-2 flex justify-center items-center border-r-2 text-[15px] p-6">
            frontend
          </div>
          <div className=" w-1/6  border-r-2 border-b-2 p-6 flex-col flex justify-center items-center gap-2">
            <FaReact color="#5ed3f3" size={60} />
            React
          </div>
          <div className=" w-1/6  border-r-2 border-b-2 p-6 flex-col flex justify-center items-center gap-2">
            <SiTailwindcss color="#38bdf8" size={60} />
            tailwindcss
          </div>
          <div className=" w-1/6  p-6 flex-col border-b-2 flex justify-center items-center gap-2">
            <TbBrandNextjs color="black" size={60} />
            Next.js
          </div>
        </div>

        <h2 className="text-[40px] fo-bold text-center">
          STACK TECHNOLOGICZNY
        </h2>
        <div className="flex  w-full text-[13px] flex-wrap justify-center flex-row ">
          <div className="text-md w-1/6 border-t-2 flex justify-center flex-col  gap-2 items-center border-r-2 p-6">
            <SiGraphql color="#de33a6" size={60} />
            GraphQL
          </div>
          <div className=" w-1/6 border-t-2 border-r-2 p-6 flex-col flex justify-center items-center gap-2">
            <SiNodedotjs color="#509941" size={60} />
            Node.js
          </div>
          <div className=" w-1/6 border-t-2 border-r-2 p-6 flex-col flex justify-center items-center gap-2">
            <SiJavascript color="#efd81d" size={60} />
            JavaScript
          </div>
          <div className=" w-1/6 border-t-2 border-r-2 p-6 flex-col flex justify-center items-center gap-2">
            <SiTypescript color="#2f74c0" size={60} />
            TypeScript
          </div>
          <div className=" w-1/6 border-t-2 fo-bold  text-sm p-6 flex-col flex justify-center items-center gap-2">
            backend
          </div>
        </div>
        <div className="flex  w-full flex-wrap justify-center  flex-row text-[13px]">
          <div className="fo-bold w-1/6 text-[13px] border-t-2 flex justify-center flex-col  gap-2 items-center border-r-2 p-6">
            ecommerce
          </div>
          <div className=" w-1/6 border-t-2 border-r-2 p-6 flex-col flex justify-center items-center gap-2">
            <SiShopify color="#90b945" size={60} />
            Shopify
          </div>
          <div className=" w-1/6 border-t-2 p-6 flex-col flex justify-center items-center gap-2">
            <SiPrestashop color="#d81565" size={60} />
            PrestaShop
          </div>
        </div>
      </div>

      {/* <div className="flex flex-col xl:hidden gap-4 justify-center items-center flex-wrap">
        <h2 className="text-3xl fo-bold text-center w-full">
          STACK TECHNOLOGICZNY
        </h2>
        <div className="flex flex-row gap-4 p-4 w-[100%] justify-start items-center flex-wrap">
          <h3 className="w-full p-4 fo-bold">CMS</h3>
          <Link href="/technologies">
            <SiStoryblok color="#09adaa" size={60} />
          </Link>
          <Link href="/technologies">
            <FaWordpress color="#0170a5" size={60} />
          </Link>
        </div>
        <div className="flex flex-row gap-6 p-4 w-[100%] items-center flex-wrap">
          <h3 className="p-4 w-full fo-bold">FRONTEND</h3>
          <Link href="/technologies">
            <FaReact color="#5ed3f3" size={60} />
          </Link>
          <Link href="/technologies">
            <SiTailwindcss color="#38bdf8" size={60} />
          </Link>
          <Link href="/technologies">
            <TbBrandNextjs color="black" size={60} />
          </Link>
        </div>
        <div className="flex flex-row gap-8 p-4 w-[100%] items-center  flex-wrap">
          <h3 className="w-full p-4 fo-bold">BACKEND</h3>
          <Link href="/technologies">
            <SiGraphql color="#de33a6" size={60} />
          </Link>
          <Link href="/technologies">
            <SiNodedotjs color="#509941" size={60} />
          </Link>
          <Link href="/technologies">
            <SiJavascript color="#efd81d" size={60} />
          </Link>
          <Link href="/technologies">
            <SiTypescript color="#2f74c0" size={60} />
          </Link>
        </div>
        <div className="flex flex-row p-4 w-[100%] items-center gap-6 flex-wrap">
          <h3 className="p-4 w-full fo-bold">ECOMMERCE</h3>
          <Link href="/technologies">
            <SiShopify color="#90b945" size={60} />
          </Link>
          <Link href="/technologies">
            <SiPrestashop color="#d81565" size={60} />
          </Link>
        </div>
      </div> */}
    </div>
  );
}

export default Technologies;
