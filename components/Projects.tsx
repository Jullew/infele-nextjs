"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { staggerContainer } from "../utils/motion";
import { reviewProjects } from "../constants";
import ReviewProject from "@/components/ReviewProject";
import Image from "next/image";
import ksBizuteria from "../public/ks-bizuteria-logo.png";
import { BsBoxArrowInRight } from "react-icons/bs";
import CardProject from "./CardProject";
type Props = {};

function Projects({}: Props) {
  return (
    <div className="container  mx-auto flex flex-row gap-4 flex-auto w-[100%]">
      <div className="w-[5%] h-full">
        <div className="leading-none fo-bold  text-left text-[65px] break-words w-1 sm:text-[100px]  md:text-[100px] xl:text-[90px]">
          PROJEKTY
        </div>
      </div>
      <div className="w-auto h-full ">
        <div className="bg-orange-50 rounded-xl w-auto h-[400px]">
          <Image
            src={ksBizuteria}
            // width={200}
            className="rounded-xl"
            // height={160}
            sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
            style={{ height: "100%", width: "auto" }}
            alt="ks-logo"
          />
        </div>
      </div>
      <div className="w-[35%] flex-1 h-full">
        <div className="bg-orange-50 rounded-xl w-full h-[400px]"></div>
      </div>

      {/* <div className="leading-none fo-bold  text-left text-[65px] break-words w-1 mt-40 sm:text-[100px]  md:text-[100px] xl:text-[90px]">
        PROJEKTY
      </div>
      <div className="flex flex-row justify-center items-center flex-wrap container pl-24 gap-5 flex-1 mt-[150px] lg:top-0 relative mx-auto">
        <div className="w-1/1 xl:w-2/6 flex-auto">
          <div
            className={`bg-[url('../public/ks-bizuteria-logo.png')]  bg-center cursor-pointer transition-all  relative bg-cover group hover:scale-105 bg-no-repeat h-[40vh] w-[100%] rounded-lg bg-orange-500`}
          >
            <div className="p-2 opacity-0 group-hover:opacity-100 -translate-y-4 group-hover:translate-y-0 transition-all">
              <div className="fo-bold text-3xl text-gray-700 md:text-xl">
                K&S Biżuteria - logo
              </div>
              <div className="my-2 translate-x-0.5 h-[5px] w-[23%] bg-orange-500"></div>
            </div>
            <div className="p-4 flex flex-row align-center items-center justify-center gap-2 bg-orange-500 text-white m-4 rounded-full opacity-0 group-hover:opacity-100 group-hover:-translate-y-10 absolute left-[50%] -translate-x-[50%] bottom-0 transition-all duration-500 ">
              Wyświetl Projekt <BsBoxArrowInRight />
            </div>
          </div>
        </div>
        <div className="w-1/1 xl:w-3/6 flex-auto">
          <div
            className={`bg-[url('../public/ks-bizuteria-logo.png')]  bg-center cursor-pointer transition-all  relative bg-cover group  hover:scale-105 bg-no-repeat h-[40vh] min-w-[100%] rounded-lg bg-orange-500`}
          >
            <div className="p-2 opacity-0 group-hover:opacity-100 -translate-y-4 group-hover:translate-y-0 transition-all">
              <div className="fo-bold text-3xl text-gray-700 md:text-xl">
                K&S Biżuteria - logo
              </div>
              <div className="my-2 translate-x-0.5 h-[5px] w-[23%] bg-orange-500"></div>
            </div>
            <div className="p-4 flex flex-row align-center items-center justify-center gap-2 bg-orange-500 text-white m-4 rounded-full opacity-0 group-hover:opacity-100 group-hover:-translate-y-10 absolute left-[50%] -translate-x-[50%] bottom-0 transition-all duration-500 ">
              Wyświetl Projekt <BsBoxArrowInRight />
            </div>
          </div>
        </div>

      </div> */}
    </div>
  );
}

export default Projects;
