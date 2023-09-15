import ContactPage from "@/sections/contact";
import Head from "next/head";
import React from "react";

function contact() {
  return (
    <>
          <Head>  
      <title>
        Galideo Digital Indonesia - Contact
      </title>
      <meta
        name="description"
        content="
        Galideo Digital Indonesia - Contact
        "
      />
      <link rel="icon" href="/icons/logo-simple.png" />
    </Head>
    <main className={` bg-backgroundPrimary `}>
      <div className="pt-[80px] ">
        <ContactPage />
      </div>
    </main>
    </>
  );
}

export default contact;
