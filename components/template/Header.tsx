"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Logo from "@/public/logo-dark-h80.png";
import { RiPagesFill } from "react-icons/ri";
import { useRouter } from "next/router";
import Link from "next/link";
import LogoDark from "@/public/logo-light-h100.png";
import { navVariants } from "@/utils/motion";

type Props = {};

function Header({}: Props) {
  const [color, setColor] = useState(false);
  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor(true);
      } else {
        setColor(false);
      }
    };
    window.addEventListener("scroll", changeColor);
  }, []);

  const router = useRouter();
  return (
    <header>
      <motion.div
        variants={navVariants}
        initial="hidden"
        whileInView="show"
        className={`${
          color ? "dark:bg-slate-950 bg-gray-100" : ""
        } navbar z-10 fixed`}
      >
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content font-bold mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link
                  href="/"
                  className="active:bg-orange-500 group focus:bg-none"
                >
                  Start
                </Link>
              </li>
              <li tabIndex={0}>
                <div className="justify-between">
                  Oferta
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                  </svg>
                </div>
                <ul className="p-2 dark:bg-slate-950 bg-white rounded-xl shadow-md">
                  <li>
                    <Link
                      href="/nowoczesne-strony-internetowe"
                      className="active:bg-orange-500 group focus:bg-none"
                    >
                      Strony internetowe
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/nowoczesne-sklepy-internetowe"
                      className="active:bg-orange-500 group focus:bg-none"
                    >
                      Sklepy internetowe
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/pozycjonowanie"
                      className="active:bg-orange-500 group focus:bg-none"
                    >
                      Pozycjonowanie
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link
                  href="/case-studies"
                  className="active:bg-orange-500 group focus:bg-none"
                >
                  Case Studies
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="active:bg-orange-500 group focus:bg-none"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/kontakt"
                  className="active:bg-orange-500 group focus:bg-none"
                >
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>
          <Link href="/">
            <div className="dark:hidden">
              <Image
                src={Logo}
                alt="infele.pl - strony internetowe, sklepy internetowe, marketing internetowy"
                height={50}
                className="transition-all"
              />
            </div>
            <div className="hidden dark:block">
              <Image
                src={LogoDark}
                alt="infele.pl - strony internetowe, sklepy internetowe, marketing internetowy"
                height={50}
                className="transition-all"
              />
            </div>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal font-semibold px-1">
            <Link href="/">
              <li
                className={`${
                  router.pathname == "/" ? "text-orange-500" : ""
                } p-5`}
              >
                Home
              </li>
            </Link>
            <li
              tabIndex={0}
              className={
                router.pathname == "/oferta" ||
                router.pathname == "/strony-internetowe"
                  ? "text-orange-500"
                  : ""
              }
            >
              <Link href="oferta">
                Oferta
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
              </Link>
              <ul className="p-2 shadow-lg dark:bg-slate-950 bg-white font-[100]">
                <div className="text-gray-500 text-center fo-bold text-sm tracking-widest ">
                  WEB DESIGN
                </div>
                <li>
                  <Link
                    href="nowoczesne-strony-internetowe"
                    className="active:bg-orange-500 group focus:bg-none"
                  >
                    <div className="justify-center items-center group-active:bg-white text-white group-active:text-orange-500 bg-orange-500 w-[40px] h-[40px] flex rounded-full">
                      <RiPagesFill className="" />
                    </div>
                    <div className="flex flex-col">
                      <div className="fo-semibold">Strony internetowe</div>
                      <div className="text-gray-400 group-active:text-orange-800 fo-regular  text-sm">
                        Stwórz swoją stronę
                      </div>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link
                    href="nowoczesne-sklepy-internetowe"
                    className="active:bg-orange-500 group focus:bg-none"
                  >
                    <div className="justify-center items-center group-active:bg-white text-white group-active:text-orange-500 bg-orange-500 w-[40px] h-[40px] flex rounded-full">
                      <RiPagesFill className="" />
                    </div>
                    <div className="flex flex-col">
                      <div className="fo-semibold">Sklepy internetowe</div>
                      <div className="text-gray-400 group-active:text-orange-800 fo-regular  text-sm">
                        Otwórz swój sklep online
                      </div>
                    </div>
                  </Link>
                </li>
                <div className="text-gray-500 text-center text-sm tracking-widest mt-2">
                  MARKETING
                </div>
                <li>
                  <Link
                    href="pozycjonowanie"
                    className="active:bg-orange-500 group focus:bg-none"
                  >
                    <div className="justify-center items-center group-active:bg-white text-white group-active:text-orange-500 bg-orange-500 w-[40px] h-[40px] flex rounded-full">
                      <RiPagesFill className="" />
                    </div>
                    <div className="flex flex-col">
                      <div className="fo-semibold">
                        Pozycjonowanie stron (SEO)
                      </div>
                      <div className="text-gray-400 group-active:text-orange-800 fo-regular  text-sm">
                        Zwiększ widoczność w wyszukiwarkach
                      </div>
                    </div>
                  </Link>
                </li>
              </ul>
            </li>

            <Link href="case-studies">
              <li
                className={`${
                  router.pathname == "/case-studies" ? "text-orange-500" : ""
                } p-5`}
              >
                Case Studies
              </li>
            </Link>
            <Link href="case-studies">
              <li
                className={`${
                  router.pathname == "/blog" ? "text-orange-500" : ""
                } p-5`}
              >
                Blog
              </li>
            </Link>
            <Link href="kontakt">
              <li
                className={`${
                  router.pathname == "/kontakt" ? "text-orange-500" : ""
                } p-5`}
              >
                Kontakt
              </li>
            </Link>
          </ul>
        </div>
        <div className="navbar-end">
          <Link
            href="/zaczynamy"
            className="btn-submit p-2 rounded-full cursor-pointer lg:flex"
          >
            Rozpocznij projekt
          </Link>
        </div>
      </motion.div>
    </header>
  );
}

export default Header;
