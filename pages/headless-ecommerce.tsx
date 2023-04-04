import Cursor from "@/components/misc/Cursor";
import Footer from "@/components/template/Footer";
import Header from "@/components/template/Header";
import Webdesign from "@/components/Webdesign";
import Card from "@/components/nowoczesne-strony-internetowe/Card";
import PageHeading from "@/components/universal/PageHeading";
import React from "react";
import { AiOutlineLaptop } from "react-icons/ai";

type Props = {};

function headless_ecommerce({}: Props) {
  return (
    <div>
      <Cursor />
      <Header />
      <div className="container mx-auto p-4 lg:p-20">
        <PageHeading
          title="Headless CMS - najlepszy wybór dla super-skalowalnych stron
            internetowych i aplikacji"
          subtitle={`Tworzymy solidne rozwiązania do zarządzania treścią, stosując
            rozwiązania "headless", zapewniając skalowalność oraz wysoce wydajne
            i nowoczesne warstwy frontend i aplikacje.`}
        />

        <div className="flex flex-row gap-2  xl:flex-nowrap flex-wrap w-1/1">
          <Card
            icon={<AiOutlineLaptop size={100} />}
            title="Digital Experience Platfoms"
            desc="Przenieś doświadczenia klientów i osiągnij wysoki poziom integracji
          dzięki platformom DXP"
          />
          <Card
            icon={<AiOutlineLaptop size={100} />}
            title="Rozwiązania Omni-channel"
            desc="Dostarczaj treści z jednego źródła do wielu kanałów komunikacji dzięki headless CMS"
          />
          <Card
            icon={<AiOutlineLaptop size={100} />}
            title="Digital Experience Platfoms"
            desc="Przenieś doświadczenia klientów i osiągnij wysoki poziom integracji
          dzięki platformom DXP"
          />
        </div>
        <div className="flex flex-row mt-60">
          <div className="w-[100%] xl:w-[40%]">
            <h3 className="tracking-widest text-orange-300 text-[14px] fo-semibold">
              ROZWIĄZANIA HEADLESS CMS
            </h3>
            <h2 className="text-4xl xl:text-5xl  text-head py-6">
              Tworzymy skalowalne rozwiązania Headless CMS
            </h2>
            <div className="text-gray-500 leading-8">
              <p>
                Dzięki wdrażaniu rozwiązań headless CMS, które są zorientowane
                na komunikacji API, budujemy ponadprzeciętne doświadczenia
                klientów. Wykorzystując architekturę headless opracowujemy
                kompleksowe rozwiązania, które umożliwiają rozwój i skalowalność
                dostarczania treści i doświadczeń cyfrowych.
              </p>
            </div>
          </div>
        </div>
        <div className="w-[100%] mt-40">
          <div className="w-[100%] xl:w-[60%] mx-auto text-center">
            <h3 className="tracking-widest text-orange-300 text-[14px] fo-semibold">
              OFERUJEMY
            </h3>
            <h2 className="text-4xl xl:text-5xl  text-head py-6">
              Strony internetowe i aplikacje o wysokiej wydajności dzięki
              rozwiązaniom headless
            </h2>
          </div>
          <div className="text-gray-500 leading-8">
            <p>
              Dzięki wdrażaniu rozwiązań headless CMS, które są zorientowane na
              komunikacji API, budujemy ponadprzeciętne doświadczenia klientów.
              Wykorzystując architekturę headless opracowujemy kompleksowe
              rozwiązania, które umożliwiają rozwój i skalowalność dostarczania
              treści i doświadczeń cyfrowych.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default headless_ecommerce;
