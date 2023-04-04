import React from "react";
import HeroImage from "../public/slidertop.png";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { slideIn, staggerContainer, textVariant } from "../utils/motion";
import Link from "next/link";
type Props = {};

function Hero({}: Props) {
  return (
    <div className="hero pt-48 pb-24 sm:top-[90px] md:top-[90px] xl:top-0 relative">
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
            className="md:text-6xl text-3xl sm:text-4xl fo-bold "
          >
            Tworzymy{" "}
            <Link
              href="/nowoczesne-strony-internetowe"
              className="transition-all"
            >
              <span className="ul-effect hover:bg-[length:100%_1em] ">
                nowoczesne strony internetowe
              </span>{" "}
            </Link>
            oraz{" "}
            <Link href="/projektowanie-graficzne" className="transition-all">
              <span className="ul-effect hover:bg-[length:100%_1em] ">
                projektujemy grafikę
              </span>
            </Link>
            , dajemy rozgłos dzięki{" "}
            <Link href="/pozycjonowanie-seo" className="transition-all">
              <span className="ul-effect hover:bg-[length:100%_1em] ">
                pozycjonowaniu SEO
              </span>
            </Link>
          </motion.h1>
          {/* <motion.p
            variants={textVariant(0.8)}
            className="py-6 md:text-xl sm:text-md"
          >
            Naszym celem jest tworzenie prostych i nowoczesnych stron
            internetowych, które są zoptymalizowane zarówno pod kątem
            wyszukiwarek, jak i wygody użytkowników, ostatecznie zwiększając
            ruch i przychody Twojej firmy.
          </motion.p> */}
          <motion.div variants={textVariant(1.3)} className="my-4">
            <Link href="/pozycjonowanie-seo" className="transition-all">
              <button className="bg-orange-500  dark:text-white m-4  p-4  transition-all w-auto px-6  fo-semibold flex-row btn rounded-full shadow-md  hover:text-white hover:border-orange-400 hover:scale-[1.05] hover:bg-orange-700 hover:translate-y-1 hover:shadow-lg border-none ">
                Porozmawiajmy
              </button>
            </Link>
            <Link href="/pozycjonowanie-seo" className="transition-all">
              <button className="border-orange-500 dark:text-white fo-medium bg-transparent border-1 fo-semibold text-gray-700  p-4 w-auto flex-row btn rounded-full shadow-md hover:bg-orange-500 hover:text-white hover:border-orange-400 hover:scale-[1.05] hover:translate-y-1 hover:shadow-lg mx-4">
                Nasze projekty
              </button>
            </Link>
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
