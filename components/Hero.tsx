import React from "react";
import HeroImage from "../public/slidertop.png";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { slideIn, staggerContainer, textVariant } from "../utils/motion";
type Props = {};

function Hero({}: Props) {
  return (
    <div className="hero pt-40 pb-24 sm:top-[90px] md:top-[90px] xl:top-0 relative">
      {/* <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className="hero-content text-center"
      > */}

      <div className="hero-content text-center">
        <div className="sm:max-w-[80vw] lg:max-w-[80vw] xl:max-w-[40vw]">
          <motion.h1
            variants={textVariant(0.7)}
            className="md:text-6xl text-3xl sm:text-4xl fo-bold"
          >
            Projektujemy & Tworzymy{" "}
            <span className="ul-effect">Strony Internetowe</span>, które
            przynoszą wyniki
          </motion.h1>
          <motion.p
            variants={textVariant(0.8)}
            className="py-6 md:text-xl sm:text-md"
          >
            Naszym celem jest tworzenie prostych i nowoczesnych stron
            internetowych, które są zoptymalizowane zarówno pod kątem
            wyszukiwarek, jak i wygody użytkowników, ostatecznie zwiększając
            ruch i przychody Twojej firmy.
          </motion.p>
          <motion.div variants={textVariant(1.3)} className="my-4">
            <button className="bg-orange-500  dark:text-white m-4  p-4  transition-all w-auto px-6  fo-semibold flex-row btn rounded-full shadow-md  hover:text-white hover:border-orange-400 hover:scale-[1.05] hover:bg-orange-700 hover:translate-y-1 hover:shadow-lg border-none ">
              Porozmawiajmy
            </button>
            <button className="border-orange-500 dark:text-white fo-medium bg-transparent border-1 fo-semibold text-gray-700  p-4 w-auto flex-row btn rounded-full shadow-md hover:bg-orange-500 hover:text-white hover:border-orange-400 hover:scale-[1.05] hover:translate-y-1 hover:shadow-lg mx-4">
              Nasze projekty
            </button>
          </motion.div>
          {/* <div className="hidden lg:block ">
            <div className="divider mt-10">Wydajność naszych projektów</div>
            <div className="bg-[#fafafafa] p-6 rounded-3xl flex flex-row gap-10 shadow-lg mt-4">
              <div className="flex flex-col">
                <div
                  className="radial-progress text-2xl bg-green-200 text-green-500"
                  style={{ "--value": "70", "--size": "3rem" }}
                >
                  70
                </div>
                <div className="text-gray-500">Wydajność</div>
              </div>
              <div className="flex flex-col">
                <div
                  className="radial-progress text-2xl bg-green-200 text-green-500"
                  style={{ "--value": "70", "--size": "3rem" }}
                >
                  70
                </div>
                <div className="text-gray-500">Wydajność</div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Hero;
