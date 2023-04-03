import React from "react";
import LogoFooter from "../public/logo-light-h100.png";
import Image from "next/image";
import { BsSendFill } from "react-icons/bs";
type Props = {};

function Footer({}: Props) {
  return (
    <div className="bg-gray-800 dark:bg-gray-900 py-6 px-20 mt-16 text-gray-200">
      <div className="container mx-auto">
        <div className="flex flex-row flex-auto">
          <div className="w-1/2"></div>
          <div className="w-1/2 flex justify-end mb-6 align-center">
            <Image src={LogoFooter} height={80} alt="infele.pl" />
          </div>
        </div>
        <div className="w-full h-[2px] bg-gray-600"></div>
        <div className="flex flex-row flex-wrap p-6">
          <div className="w-[100%] lg:w-1/5 my-4">
            <h4 className="fo-bold">Dane firmowe</h4>
            <div className="w-[20px] h-[2px] bg-orange-500 mb-4"></div>

            <ul>
              <li className="mb-2 fo-medium">INFELE Julian Lewandowski</li>
              <li>ul. Armii Krajowej 19</li>
              <li>41-215 Sosnowiec</li>
              <li>NIP: 6443552813</li>
            </ul>
          </div>
          <div className="w-1/5 hidden lg:block">
            <span className="fo-bold mb-4"> Zrobimy dla Ciebie</span>
            <div className="w-[20px] h-[2px] bg-orange-500 mb-4"></div>

            <ul className="leading-8 text-sm text-gray-400">
              <li>Stronę internetową</li>
              {/* <li>Aplikacje internetowe</li>
        <li>Aplikacje mobilne</li> */}
              <li>Grafikę dla firmy</li>
              <li>Pozycjonowanie strony</li>
            </ul>
          </div>
          <div className="w-1/5 hidden lg:block">
            <span className="fo-bold mb-4 hidden lg:block">
              {" "}
              Dowiedz się więcej
            </span>
            <div className="w-[20px] h-[2px] bg-orange-500 mb-4"></div>

            <ul className="leading-8 text-sm text-gray-400">
              <li>Blog</li>
              <li>FAQ</li>
            </ul>
          </div>

          <div className="w-[100%] lg:w-2/5 my-4 flex flex-col">
            <span className="fo-bold mb-4">
              Zdobywaj wartościowe strategie, trendy i branżowe odkrycia
              bezpośrednio na swojego maila.
            </span>

            <input
              type="email"
              name="user_email"
              value="Wpisz swój adres e-mail"
              className="border-b-2 w-3/4 bg-transparent mb-6 focus:outline-none focus:border-orange-500"
            />
            <button
              type="submit"
              className="lg:w-1/5 w-1/2 lg:p-2 fo-medium flex flex-row btn-submit text-gray-700 justify-center items-center gap-2 rounded-full bg-orange-200"
            >
              Zapisz
            </button>
          </div>
        </div>
        <div className="w-full h-[2px] bg-gray-600"></div>
        Wszelkie prawa zastrzeżone © 2023 infele®
      </div>
    </div>
  );
}

export default Footer;
