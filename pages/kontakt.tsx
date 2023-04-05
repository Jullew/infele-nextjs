import ContactBox from "@/components/contact/ContactBox";
import ContactForm from "@/components/contact/ContactForm";
import Cursor from "@/components/misc/Cursor";
import Footer from "@/components/template/Footer";
import Header from "@/components/template/Header";
import React from "react";

type Props = {};

function contact({}: Props) {
  // const [text, count] = useTypewriter({})
  return (
    <>
      <Cursor />
      <Header />
      <div className="container mx-auto pt-40 relative">
        <h1 className="fo-bold text-[80px] lg:text-[150px] text-center">
          ZŁAP NAS
        </h1>
      </div>
      <div className="w-[100vw] left-0 bg-orange-50/95 dark:bg-gray-800/95  h-auto -top-10 lg:-top-20 relative">
        <ContactBox />
      </div>

      <Footer />
    </>
  );
}

export default contact;
