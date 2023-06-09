import CardService from "@/components/universal/CardService";
import Cursor from "@/components/misc/Cursor";
import Footer from "@/components/template/Footer";
import Header from "@/components/template/Header";
import React from "react";

type Props = {};

function projektujemy({}: Props) {
  return (
    <div>
      <Cursor />
      <Header />
      <div className="container mx-auto pt-40 pb-20">
        <h1 className="fo-bold text-[42px] md:text-[70px] leading-[1em] xl:text-[140px] text-center">
          A WIĘC PROJEKTOWANIE...
        </h1>
        <div className="flex flex-row gap-10 md:-mt-6 xl:-mt-12 justify-center flex-wrap">
          <CardService
            title="Stronę internetową"
            description="Opis tego"
            link="/nowoczesne-strony-internetowe"
          />
          <CardService
            title="Sklep internetowy"
            description="Opis tego"
            link=""
          />
          <CardService
            title="Coś niestandardowego"
            description="Opis tegooi"
            link=""
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default projektujemy;
