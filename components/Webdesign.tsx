import React from "react";

type Props = {};

function Webdesign({}: Props) {
  return (
    <div className="top-0 left-0 bg-gradient-to-br  dark:from-slate-800 dark:to-slate-900 from-[#ffffff] to-[#f4f4ee]">
      <div className="pt-36 container min-h-[100vh] mx-auto">
        <div className="flex flex-row">
          <div className="w-[50%]">
            <h1 className="text-5xl fo-bold">
              Strony internetowe dla firm, <br />
              <span className="ul-effect">zorientowane na cel</span>
            </h1>
            <p className="py-6">
              Świetna witryna jest łatwa w nawigacji. Jest to przyjemne
              wizualnie, ale nie rozprasza uwagi. Projekt odzwierciedla Twoją
              historię, markę i wzmacnia Twój przekaz. Projekt i kopia
              harmonizują, aby opowiedzieć jasną historię, kierując widza tam,
              gdzie chcesz, aby skierował jego wzrok.
            </p>
            <p className="py-6">
              Każda strona służy określonemu celowi. Odwiedzający Twoją witrynę
              chce wiedzieć, kim jesteś, co robisz, jak to robisz i jak szybko i
              łatwo uzyskać Twoje produkty lub usługi. Chcesz przewidywać i
              odpowiadać na pytania. Chcesz ułatwić prowadzenie interesów z
              Tobą. Pomyśl o swojej stronie internetowej jako internetowym
              rozszerzeniu biura. Chcesz być zachęcający i profesjonalny. Chcesz
              wyglądać i czuć się autorytetem. Chociaż nie możesz powitać
              każdego gościa indywidualnie, jest to Twoja szansa na
              pozostawienie niezatartego wrażenia.
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
              najlepszych praktyk wraz z Hostingiem i Utrzymaniem
            </p>
          </div>
          <div className="w-[50%]">obrazek</div>
        </div>
        <div className="flex flex-row w-full">
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
