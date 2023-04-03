import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Webdesign from "@/components/Webdesign";
import React from "react";

type Props = {};

function strony_internetowe({}: Props) {
  return (
    <div>
      <Header />
      <Webdesign />
      <Footer />
    </div>
  );
}

export default strony_internetowe;
