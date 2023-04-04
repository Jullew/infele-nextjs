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
      <div className="w-[100vw] left-0 bg-orange-50 h-auto -top-10 lg:-top-20 relative">
        <div className="container mx-auto text-center p-20">
          <h2 className="text-3xl fo-bold">Jak możemy Ci pomóc?</h2>
          <h3 className="text-sm p-2">
            Wypełnij formularz, a wkrótce się z Tobą skontaktujemy!
          </h3>
          <div className="bg-white shadow-sm p-6 text-left w-full lg:w-1/3 mx-auto mt-6">
            <ContactForm />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default contact;
