import CardService from "@/components/CardService";
import Cursor from "@/components/Cursor";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";

type Props = {};

function pozycjonowanie({}: Props) {
  return (
    <div>
      <Cursor />
      <Header />
      <div className="container mx-auto pt-40 pb-20">
        <h1 className="fo-bold text-[80px] lg:text-[130px] text-center">
          W DRODZE NA SZCZYT...
        </h1>
        <div className="flex flex-row gap-10 justify-center flex-wrap">
          <CardService
            title="Pozycjonowanie strony internetowej"
            description="Jeśli szukasz efektywnego rozwoju biznesu, dzięki zdobyciu pozycji w wyszukiwarce, ta opcja jest dla Ciebie!"
            link="/pozycjonowanie-stron-seo"
          />
          <CardService
            title="Pozycjonowanie sklepu internetowego"
            description="Prowadzisz sklep internetowy? Sprawdź jak możemy zwiększyć ruch w Twoim sklepie internetowym."
            link="/pozycjonowanie-sklepow-seo"
          />

          {/* <CardService
            title="Pozycjonowanie sklepu internetowego"
            description="Ciągle rosnąca konkurencja sprawia, że sklepy e-commerce stoją przed wyjątkowymi wyzwaniami SEO. Przechwytywanie ruchu generującego konwersję zaczyna się od skalowalnej, dopasowanej strategii SEO e-commerce, która optymalizuje wszystkie strony, kategorie z tagami tytułowymi i metaopisami, po szybkość witryny i zarządzanie Google Search Console — a wszystko to dzięki współpracy z doświadczoną firmą zajmującą się SEO e-commerce."
            link=""
          /> */}

          {/* Optymalizacja lokalna (SEO) to sprawdzona strategia wykorzystania Internetu do zwiększania liczby wizyt w sklepie, sprzedaży online i rzeczywistego wzrostu biznesu. Nasza agencja pomoże Twojej firmie zoptymalizować witrynę, lokalne wyniki i obecność w Internecie, aby poprawić jej widoczność i zapewnić jej długoterminowy wzrost. */}
          <CardService
            title="Pozycjonowanie lokalne"
            description="Chcesz przyciągnąć więcej klientów do lokalu swojej firmy? Sprawdź jak możemy pomóc Ci zaistnieć w Twoim regionie."
            link="pozycjonowanie-lokalne-seo"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default pozycjonowanie;
