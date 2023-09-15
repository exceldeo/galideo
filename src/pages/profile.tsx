import Hero from "@/sections/profile/hero";
import Head from "next/head";
import React from "react";

function ProfilePage() {
  return (
    <>
    <Head>  
      <title>
        Galideo Digital Indonesia - Profile
      </title>
      <meta
        name="description"
        content="
        Galideo Digital Indonesia - Profile
        "
      />
      <link rel="icon" href="/icons/logo-simple.png" />
    </Head>
    <main className={` bg-backgroundPrimary min-h-[75vh]`}>
      <div className="py-[80px] ">
        <Hero />
      </div>
    </main>
    </>
  );
}

export default ProfilePage;
