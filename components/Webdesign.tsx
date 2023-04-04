import React from "react";
import { RiShieldStarFill, RiShieldStarLine } from "react-icons/ri";
import { GiSpeedometer } from "react-icons/gi";
import ContactForm from "./ContactForm";

type Props = {};

function Webdesign({}: Props) {
  return (
    <div className="top-0 left-0 bg-gradient-to-br  dark:from-slate-800 dark:to-slate-900 from-[#ffffff] to-[#f4f4ee]">
      <div className="pt-36 container min-h-[100vh] mx-auto">
        <div className="flex flex-row">
          <div className="w-[75%] p-6 pr-24 text-justify">
            <h1 className="text-5xl fo-bold">
              Strony internetowe dla firm, <br />
              <span className="ul-effect">zorientowane na cel</span>
            </h1>
            <p className="py-6 mt-6">
              <strong>Świetna strona internetowa</strong> jest łatwa w
              nawigacji. Powinna być przyjemna wizualnie, ale nie rozpraszająca
              uwagi. Projekt odzwierciedla Twoją historię, markę i wzmacnia Twój
              przekaz. Projekt i wykonanie opowiadają jasną historię, kierując
              widza tam, gdzie chcesz, aby skierował jego wzrok.
            </p>
            <p className="py-6">
              Każda strona służy określonemu celowi. Odwiedzający Twoją witrynę
              chce wiedzieć, kim jesteś, co robisz, jak to robisz, jak szybko i
              łatwo uzyskać Twoje produkty lub usługi. Powinieneś przewidywać i
              odpowiadać na te pytania. Musisz ułatwić prowadzenie interesów z
              Tobą. Pomyśl o swojej stronie internetowej jako internetowym
              rozszerzeniu biura. Stań się zachęcający i profesjonalny. Chcesz
              wyglądać i czuć się autorytetem. Chociaż nie możesz powitać
              każdego gościa indywidualnie, jest to Twoja szansa na
              pozostawienie niezapomnianego wrażenia.
            </p>
            <p className="py-6">
              {" "}
              Jako firma zajmująca się projektowaniem stron internetowych
              pracujemy ramię w ramię z Tobą, począwszy od fazy konsultacji,
              podczas której przeprowadzamy rozmowę rozpoznawczą, aby zrozumieć
              Twoje oczekiwania, zakres projektu, a następnie wspólnie ustalić
              strategię. Współpracujemy nad User Experience (UX) i interfejsem
              użytkownika (UI), paletami kolorów, rozwojem i projektami aż do
              uruchomienia! Na koniec projektu zapewniamy szkolenie w zakresie
              najlepszych praktyk wraz z hostingiem i utrzymaniem strony
              internetowej.
            </p>
          </div>
          <div className="w-[25%]">
            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 bg-opacity-10 rounded-sm h-full  p-6">
              <h1 className="fo-bold text-5xl">
                <span className="bg-gradient-to-br bg-clip-text text-transparent from-orange-400 to-yellow-200">
                  Nowoczesny Design
                </span>
                <br />
                stron WWW
              </h1>
              <div className="m-12">
                <RiShieldStarLine
                  size={120}
                  className=" text-orange-300 hover:scale-110 transition-all"
                />
              </div>
              <div className="">
                <h2 className="fo-bold text-md">
                  TWORZENIE STRON INTERNETOWYCH
                </h2>
                <ul className="leading-8 mt-6">
                  <li>User Experience (UI / UX)</li>
                  <li>Projektowanie sklepów eCommerce</li>
                  <li>Strony internetowe dla firm</li>
                  <li>Hosting stron internetowych</li>
                  <li>Projektowanie stron responsywnych</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row w-full">
          <div className="bg-orange-50 shadow-md w-1/4 flex flex-col p-12">
            <GiSpeedometer size={120} />
            Ultraszybkie i nowoczesne strony internetowe
          </div>
          <ul className="list-disc w-1/3 p-4 text-orange-500">
            <li>Ultraszybkie, nowoczesne strony internetowe</li>
            <li>
              Responsywne strony internetowe (RWD) - idealnie dopasowane do
              komputerów, tabletów i smartfonów{" "}
            </li>
          </ul>
          <ul className="list-disc w-1/3 p-4 text-orange-500">
            <li>sklepy internetowe eCommerce</li>
            <li>zoptymalizowane pod kątem wyszukiwarek (SEO)</li>
          </ul>
          <ul className="list-disc w-1/3 p-4 text-orange-500">
            <li>Pełne szkolenie z obsługi strony internetowej</li>
            <li>Oferujemy profesjonalny hosting i wsparcie powdrożeniowe</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Webdesign;
