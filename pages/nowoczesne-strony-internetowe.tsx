import Cursor from "@/components/misc/Cursor";
import Footer from "@/components/template/Footer";
import Header from "@/components/template/Header";
import CardWebsite from "@/components/nowoczesne-strony-internetowe/CardWebsite";
import ContactBox from "@/components/contact/ContactBox";
import PageHeading from "@/components/universal/PageHeading";
import Link from "next/link";
import React, { Fragment } from "react";
import ArticleHead from "@/components/universal/ArticleHead";
import { TbSquareRoundedPlusFilled } from "react-icons/tb";
import { FaMinusSquare, FaPlusSquare } from "react-icons/fa";

type Props = {};

function nowoczesne_strony_internetowe({}: Props) {
  return (
    <div>
      <Cursor />
      <Header />
      <div className="container mx-auto lg:p-20 p-4">
        <div className="flex flex-row flex-wrap">
          <div className="xl:w-[65%]">
            <PageHeading
              title="Nowoczesne strony internetowe, dopasowane do Twoich potrzeb"
              subtitle="W odpowiedzi na oczekiwania naszych klientów, w ofercie mamy wiele rozwiązań technologicznych, dopasowanych do indywidualnych potrzeb biznesowych"
            />
          </div>
          <div className="xl:mt-40 xl:w-[33%] h-[520px] sm:h-[480px] md:h-[450px] xl:h-[550px]">
            <div className="bg-gradient-to-br from-yellow-50 hover:scale-105 transition-all relative dark:to-black dark:from-slate-900 to-yellow-100 bg-opacity-10 rounded-sm h-full  p-6">
              <h1 className="fo-bold text-5xl">
                <span className="bg-gradient-to-br bg-clip-text text-transparent from-orange-400 to-yellow-200">
                  Sanity CMS
                </span>
              </h1>
              <div className="m-12">
                <div className="diamond-container">
                  <div className="diamond">
                    <div className="diamond-top"></div>
                    <div className="diamond-bottom"></div>
                  </div>
                  <div className="sparkles">
                    <div className="one">✨</div>
                    <div className="two">✨</div>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-10 ">
                <span className="fo-semibold text-md">
                  Najnowocześniejsze rozwiązania headless CMS, nieograniczone
                  możliwości dzięki koncepcji API-first. Pełna skalowalność i
                  customizacja stron internetowych
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex xl:flex-nowrap flex-wrap flex-row-reverse gap-4 flex-auto">
          <div className="xl:w-[60%] flex-col flex gap-6">
            <CardWebsite
              title="Strony internetowe Wordpress"
              description={
                <Fragment>
                  <div className="flex flex-wrap flex-row">
                    <div className="pros flex-col justify-start items-start xl:w-[50%] flex">
                      <div className="flex flex-row items-start gap-2 justify-center">
                        <span className="text-green-500 text-lg">+</span> Łatwy
                        w obsłudze
                      </div>
                      <div className="flex flex-row items-start gap-2 justify-center">
                        <span className="text-green-500 text-lg">+</span>{" "}
                        Szybkie zarządzanie mediami
                      </div>
                      <div className="flex flex-row items-start gap-2 justify-center">
                        <span className="text-green-500 text-lg">+</span> Dużo
                        gotowych pluginów
                      </div>
                      <div className="flex flex-row items-start gap-2 justify-center">
                        <span className="text-green-500 text-lg">+</span>{" "}
                        Przyjazny eCommerce
                      </div>
                    </div>
                    <div className="cons flex-col justify-start items-start xl:w-[50%] flex">
                      <div className="flex flex-row items-start gap-2 justify-center">
                        <span className="text-red-500 text-lg">-</span> Wymagane
                        częste aktualizacje
                      </div>
                      <div className="flex flex-row items-start gap-2 justify-center">
                        <span className="text-red-500 text-lg">-</span>
                        Pluginy spowalniają działanie
                      </div>
                      <div className="flex flex-row items-start gap-2 justify-center">
                        <span className="text-red-500 text-lg">-</span>
                        Wolne ładowanie stron
                      </div>
                      <div className="flex flex-row items-start gap-2 justify-center">
                        <span className="text-red-500 text-lg">-</span>
                        Niski ranking SEO
                      </div>
                    </div>
                  </div>
                </Fragment>
              }
              href="/strony-wordpress"
            />

            <CardWebsite
              title="Strony internetowe React.js"
              description={
                <Fragment>
                  <div className="flex flex-wrap flex-row">
                    <div className="pros flex-col justify-start items-start xl:w-[50%] flex">
                      <div className="flex flex-row items-start gap-2 justify-center">
                        <span className="text-green-500 text-lg">+</span> Bardzo
                        szybkie działanie
                      </div>
                      <div className="flex flex-row items-start gap-2 justify-center">
                        <span className="text-green-500 text-lg">+</span>{" "}
                        Wysokie bezpieczeństwo
                      </div>
                      <div className="flex flex-row items-start gap-2 justify-center">
                        <span className="text-green-500 text-lg">+</span>{" "}
                        Gwarancja działania bez przerwy
                      </div>
                      <div className="flex flex-row items-start gap-2 justify-center">
                        <span className="text-green-500 text-lg">+</span> Brak
                        ograniczeń w kwesti design
                      </div>
                      <div className="flex flex-row items-start gap-2 justify-center">
                        <span className="text-green-500 text-lg">+</span> Wysoki
                        ranking SEO
                      </div>
                    </div>
                    <div className="cons flex-col justify-start items-start xl:w-[50%] flex">
                      <div className="flex flex-row items-start gap-2 justify-center">
                        <span className="text-red-500 text-lg">-</span> Brak
                        panelu zarządzania treścią
                      </div>
                      <div className="flex flex-row items-start gap-2 justify-center">
                        <span className="text-red-500 text-lg">-</span>
                        Rozwój tylko przez dopisanie kodu
                      </div>
                    </div>
                  </div>
                </Fragment>
              }
              href="/strony-react-js"
            />

            <CardWebsite
              title="Strony internetowe Sanity CMS"
              description={
                <Fragment>
                  <div className="flex flex-wrap flex-row">
                    <div className="pros flex-col justify-start items-start xl:w-[50%] flex">
                      <div className="flex flex-row items-start gap-2 justify-center">
                        <span className="text-green-500 text-lg">+</span> System
                        zarządzania treścią
                      </div>
                      <div className="flex flex-row items-start gap-2 justify-center">
                        <span className="text-green-500 text-lg">+</span> Bardzo
                        szybkie działanie
                      </div>
                      <div className="flex flex-row items-start gap-2 justify-center">
                        <span className="text-green-500 text-lg">+</span>{" "}
                        Wysokie bezpieczeństwo
                      </div>
                      <div className="flex flex-row items-start gap-2 justify-center">
                        <span className="text-green-500 text-lg">+</span>{" "}
                        Gwarancja działania bez przerwy
                      </div>
                      <div className="flex flex-row items-start gap-2 justify-center">
                        <span className="text-green-500 text-lg">+</span> Brak
                        ograniczeń w kwesti design
                      </div>
                      <div className="flex flex-row items-start gap-2 justify-center">
                        <span className="text-green-500 text-lg">+</span> Wysoki
                        ranking SEO
                      </div>
                      <div className="flex flex-row items-start gap-2 justify-center">
                        <span className="text-green-500 text-lg">+</span>{" "}
                        Możliwość skalowania
                      </div>
                      <div className="flex flex-row items-start gap-2 justify-center">
                        <span className="text-green-500 text-lg">+</span> Pełna
                        responsywność
                      </div>
                      <div className="flex flex-row items-start gap-2 justify-center">
                        <span className="text-green-500 text-lg">+</span> Wysoki
                        ranking SEO
                      </div>
                    </div>
                    <div className="cons flex-col justify-start items-start xl:w-[50%] flex">
                      <div className="flex items-start gap-2 justify-start  ">
                        <span className="text-red-500 text-lg">-</span>
                        <span>Wysoki koszt uruchomienia</span>
                      </div>
                      <div className="flex flex-row items-start gap-2 justify-center">
                        <span className="text-red-500 text-lg">-</span>
                        Słabo rozwinięty ekosystem pluginów
                      </div>
                      <div className="flex flex-row items-start gap-2 justify-start">
                        <span className="text-red-500 text-lg">-</span>
                        Rozwój o nowe podstrony, komponentny wymaga
                        programowania
                      </div>
                    </div>
                  </div>
                </Fragment>
              }
              href="/headless-cms"
            />
          </div>
          <div className="xl:w-[60%]">
            <ArticleHead title="Zaawansowane rozwiązania, nowoczesny design" />
            <p className="p-service-details">
              Tworzymy strony internetowe, które są szybkie, przyjazne SEO
              dopasowane do Twojej branży.{" "}
            </p>

            <p className="p-service-details">
              W ofercie mamy trzy różne propozycje, jeśli chodzi o strony
              internetowe. Niezależnie, czy chcesz stronę wizytówkę swojej
              firmy, stronę reklamową produktu, który wprowadzasz na rynek lub
              chcesz założyć bloga wszystkie z trzech opcji są dla Ciebie, choć
              każda ma inną charakterystykę.{" "}
            </p>
            <p className="p-service-details">
              Skontaktuj się z nami, a my pomożemy wybrać najlepsze rozwiązanie
              dla Ciebie.
            </p>

            <div className="flex flex-row gap-12 justify-center items-center mt-10">
              <div className="bg-gradient-to-b from-orange-500 to-orange-700 p-6 shadow-md rounded-xl hover:scale-105 cursor-pointer">
                Zadzwoń
              </div>
              <div className="bg-gradient-to-b from-orange-500 to-orange-700 p-6 shadow-md rounded-xl hover:scale-105  cursor-pointer">
                Napisz
              </div>
            </div>
            <ContactBox />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default nowoczesne_strony_internetowe;
