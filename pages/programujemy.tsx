import CardService from "@/components/universal/CardService";
import Cursor from "@/components/misc/Cursor";
import Footer from "@/components/template/Footer";
import Header from "@/components/template/Header";
import React from "react";

type Props = {};

function programujemy({}: Props) {
  return (
    <div>
      <Cursor />
      <Header />
      <div className="container mx-auto pt-40 pb-20">
        <h1 className="fo-bold text-[80px]  lg:text-[150px] text-center">
          CO DZISIAJ ROBIMY?
        </h1>
        <div className="flex flex-row gap-10 justify-center flex-wrap">
          <CardService
            title="Stronę internetową"
            description="Potrzebujesz zaistnieć w sieci? Chcesz zareklamować swoje usługi lub produkty serwując klientom niesamowite doświadczenia, dzięki którym bliżej je poznają?"
            link="/nowoczesne-strony-internetowe"
          />
          <CardService
            title="Sklep internetowy"
            description="Otwierasz sklep internetowy i potrzebujesz porady i usługi stworzenia go? Sprawdź naszą ofertę, nowoczesne i profesjonalne rozwiązania biznesowe."
            link="/nowoczesne-sklepy-internetowe"
          />
          <CardService
            title="Coś niestandardowego"
            description="Masz pomysł na aplikację internetową? Skontaktuj się z nami, sprawdź co możemy dla Ciebie zrobić. Chronimy naszych klientów umową NDA"
            link="/kontakt"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default programujemy;
