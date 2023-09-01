import Hero from "@/sections/profile/hero";
import React from "react";

function ProfilePage() {
  return (
    <main className={` bg-backgroundPrimary `}>
      <div className="pt-[80px] ">
        <Hero />
      </div>
    </main>
  );
}

export default ProfilePage;
