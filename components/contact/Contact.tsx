import React from "react";
import ContactForm from "./ContactForm";

type Props = {};

function Contact({}: Props) {
  return (
    <div className="flex flex-row flex-wrap flex-auto my-24 container mx-auto">
      <div className="w-[100%] lg:w-1/2 p-6 justify-center items-center">
        <span className="fo-bold ul-effect text-6xl">Masz pomysł?</span>
        <p className="text-2xl py-6 leading-10 ">
          Tworzymy produkty, które kochają ludzie. Spełnimy Twoje marzenie -
          urzeczywistnimy Twój pomysł dostarczając niesamowite doświadczenia
        </p>
      </div>
      <div className="w-[90%] mx-auto lg:w-1/2 bg-white  dark:bg-black/60 shadow-2xl rounded-xl p-6 ">
        <ContactForm />
      </div>
    </div>
  );
}

export default Contact;
