import Head from "next/head";
import Image from "next/image";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Board from "@/components/game/Board";
import Dialog from "@/components/Dialog";

export default function Home() {
  return (
    <>
      <Head>
        <title>Memory Game - Modyo Test - @equistene</title>
        <meta
          name="description"
          content="Memory Game using next.js & tailwindcss"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        className="grid place-items-center min-h-screen w-screen max-w-3xl mx-auto px-4"
        aria-label="Main Content"
      >
        <div className="container flex flex-col flex-center gap-0 text-center">
          <Header />

          <Board />

          <Footer />
        </div>
      </main>

      <Dialog />
    </>
  );
}
