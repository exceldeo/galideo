import PorfolioListSection from "@/sections/porfolio/porfolioList";
import Head from "next/head";
import React from "react";

function PorfolioPage() {
  return (
    <>
    <Head>  
      <title>
        Galideo Digital Indonesia - Porfolio
      </title>
      <meta
        name="description"
        content="
        Galideo Digital Indonesia - Porfolio
        "
      />
      <link rel="icon" href="/icons/logo-simple.png" />
    </Head>
    <main className={` bg-backgroundPrimary min-h-[75vh]`}>
      <div className="py-[80px] ">
        <PorfolioListSection />
      </div>
    </main>
    </>
  );
}

export default PorfolioPage;
