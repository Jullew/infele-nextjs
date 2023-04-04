import Cursor from "@/components/misc/Cursor";
import Footer from "@/components/template/Footer";
import Header from "@/components/template/Header";
import CardWebsite from "@/components/nowoczesne-strony-internetowe/CardWebsite";
import ContactBox from "@/components/contact/ContactBox";
import PageHeading from "@/components/universal/PageHeading";
import Link from "next/link";
import React from "react";

type Props = {};

function nowoczesne_strony_internetowe({}: Props) {
  return (
    <div>
      <Cursor />
      <Header />
      <div className="container mx-auto lg:p-20 p-4">
        <PageHeading
          title="Nowoczesne strony internetowe, dopasowane do Twoich potrzeb"
          subtitle="W odpowiedzi na oczekiwania naszych klientów, w ofercie mamy wiele rozwiązań technologicznych, dopasowanych do indywidualnych potrzeb biznesowych"
        />
        <div className="relative lg:left-[50%] lg:translate-x-[-30%]">
          <Link href="/strony-wordpress">
            <CardWebsite
              title="Strony internetowe Wordpress"
              description="Dla prostych rozwiązań, Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Accusantium temporibus illum provident eius,
                harum asperiores. Ducimus veritatis saepe velit libero, aut hic.
                Possimus expedita, eveniet nisi tenetur corrupti voluptatem
                soluta?"
            />
          </Link>
        </div>
        <div className="relative lg:left-[50%] my-10 lg:translate-x-[-30%]">
          <Link href="/strony-react-js">
            <CardWebsite
              title="Strony internetowe React.js"
              description="Dla prostych rozwiązań, Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Accusantium temporibus illum provident eius,
                harum asperiores. Ducimus veritatis saepe velit libero, aut hic.
                Possimus expedita, eveniet nisi tenetur corrupti voluptatem
                soluta?"
            />
          </Link>
        </div>
        <div className="relative lg:left-[50%] lg:translate-x-[-30%]">
          <Link href="/headless-cms">
            <CardWebsite
              title="Strony internetowe Headless CMS"
              description="Dla prostych rozwiązań, Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Accusantium temporibus illum provident eius,
                harum asperiores. Ducimus veritatis saepe velit libero, aut hic.
                Possimus expedita, eveniet nisi tenetur corrupti voluptatem
                soluta?"
            />
          </Link>
        </div>
      </div>
      <ContactBox />
      <Footer />
    </div>
  );
}

export default nowoczesne_strony_internetowe;
