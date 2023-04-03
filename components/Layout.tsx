import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import Services from "./Services";
import Projects from "./Projects";
import Technologies from "./Technologies";
import TestimonialsSwiper from "./TestimonialsSwiper";
import Testimonials from "./Testimonials";
import Contact from "./Contact";
import Footer from "./Footer";

type Props = {};

function Layout({}: Props) {
  return (
    <div>
      <div
        className="top-0 left-0 bg-gradient-to-br  dark:from-slate-800 dark:to-slate-900 from-[#ffffff] to-[#f4f4ee] );
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
