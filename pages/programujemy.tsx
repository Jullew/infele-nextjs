import CardService from "@/components/CardService";
import Cursor from "@/components/Cursor";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";

type Props = {};

function programujemy({}: Props) {
  return (
    <div>
      <Cursor />
      <Header />
      <div className="container mx-auto pt-40 pb-20">
        <h1 className="fo-bold text-[80px] lg:text-[150px] text-center">
          CO DZISIAJ ROBIMY?
        </h1>
        <div className="flex flex-row gap-10 justify-center flex-wrap">
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
            description="Opis tego"
            link=""
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default programujemy;
