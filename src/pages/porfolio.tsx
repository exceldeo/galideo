import PorfolioListSection from "@/sections/porfolio/porfolioList";
import React from "react";

function PorfolioPage() {
  return (
    <main className={` bg-backgroundPrimary min-h-[75vh]`}>
      <div className="py-[80px] ">
        <PorfolioListSection />
      </div>
    </main>
  );
}

export default PorfolioPage;
