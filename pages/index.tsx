import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";

import Layout from "@/components/Layout";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const mouseMove = (e: any) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x,
      y: mousePosition.y,
    },
  };
  return (
    <div>
      <Head>
        <title>
          infele.pl - strony internetowe, sklepy internetowe, pozycjonowanie SEO
        </title>
      </Head>

      <Layout />
      <div></div>
      {/* Header */}

      {/* Hero */}

      {/* Usługi */}

      {/* Projekty */}

      {/* O nas */}

      {/* Kontakt */}
    </div>
  );
}
