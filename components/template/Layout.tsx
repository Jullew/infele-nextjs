import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import Services from "../services/Services";
import Projects from "../projects/Projects";
import Technologies from "../technologies/Technologies";
import Testimonials from "../testimonials/Testimonials";
import Contact from "../contact/Contact";
import Footer from "./Footer";

type Props = {};

function Layout({}: Props) {
  return (
    <div>
      <div
        className="top-0 left-0 bg-gradient-to-br  dark:from-slate-900 dark:to-slate-950 from-[#ffffff] to-[#f4f4ee] );
"
      >
        <Header />
        <Hero />
      </div>
      <Services />
      <Technologies />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default Layout;
