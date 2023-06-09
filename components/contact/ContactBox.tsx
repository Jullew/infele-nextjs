import React from "react";
import ContactForm from "./ContactForm";

type Props = {};

function ContactBox({}: Props) {
  return (
    <div>
      <div className="container mx-auto text-center p-20">
        <h2 className="text-3xl fo-bold">Jak możemy Ci pomóc?</h2>
        <h3 className="text-sm p-2">
          Wypełnij formularz, a wkrótce się z Tobą skontaktujemy!
        </h3>
        <div className="bg-white dark:bg-black/60 dark:shadow-xl shadow-sm p-6 text-left mx-auto mt-6">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

export default ContactBox;
