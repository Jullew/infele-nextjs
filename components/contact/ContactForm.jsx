import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { BsSendFill } from "react-icons/bs";

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <form ref={form} className="flex flex-col" onSubmit={sendEmail}>
      <label>Imię</label>
      <input
        className="border-b-2 w-3/4 mb-6 focus:outline-none dark:bg-gray-800 focus:border-orange-500"
        type="text"
        name="user_name"
      />
      <label>Email</label>
      <input
        type="email"
        name="user_email"
        className="border-b-2 w-3/4 mb-6 focus:outline-none dark:bg-gray-800 focus:border-orange-500"
      />
      <label>Wiadomość</label>
      <textarea
        name="message"
        className="border-b-2 w-3/4 mb-6 dark:bg-gray-800 focus:outline-none focus:border-orange-500"
      />
      <button
        type="submit"
        className="p-2 fo-medium flex flex-row  justify-center items-center gap-2  btn-submit w-1/4 rounded-full my-6"
      >
        Wyślij <BsSendFill />
      </button>
    </form>
  );
};

export default ContactForm;
