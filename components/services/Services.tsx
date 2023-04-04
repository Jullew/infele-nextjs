import React, { Fragment, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import CardService from "../universal/CardService";

type Props = {};

function Services({}: Props) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  console.log(scrollYProgress);
  const y = useTransform(scrollYProgress, [-300, 100], [0, -100]);

  return (
    <div>
      <div className="absolute w-full fo-bold text-center text-[65px] md:text-[80px] xl:text-[140px]">
        TO ROBIMY
      </div>
      <div className="flex flex-row justify-center flex-wrap container p-10 gap-10 top-20 relative w-full mx-auto">
        <CardService
          title="Projektujemy"
          description="Tworzenie niestandardowych, wysokiej klasy projektów stron
              internetowych opartych na inteligentnych strategiach
              zorientowanych na markę i zorientowanych na wyniki to nasza
              specjalność."
          link="/projektujemy"
        />

        <CardService
          title="Programujemy"
          description="Oferujemy tworzenie firmowych stron internetowych, sklepów eCommerce oraz niestandardowych aplikacji internetowych.
          "
          link="/programujemy"
        />
        <CardService
          title="Pozycjonujemy"
          description="Algorytmy dotyczące optymalizacji wyszukiwarek zawsze ewoluują; jesteśmy na bieżąco z najnowszymi zmianami, aby pomóc klientom uzyskać wyższą pozycję."
          link="/pozycjonujemy"
        />
      </div>
    </div>
  );
}

export default Services;
