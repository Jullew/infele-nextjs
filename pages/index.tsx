import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";

import Layout from "@/components/Layout";
import Cursor from "@/components/Cursor";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Head>
        <title>
          infele.pl - strony internetowe, sklepy internetowe, pozycjonowanie SEO
        </title>
      </Head>
      <Cursor />
      <Layout />

      {/* Header */}

      {/* Hero */}

      {/* Usługi */}

      {/* Projekty */}

      {/* O nas */}

      {/* Kontakt */}
    </div>
  );
}
