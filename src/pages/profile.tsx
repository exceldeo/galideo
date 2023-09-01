import Hero from "@/sections/profile/hero";
import React from "react";

function ProfilePage() {
  return (
    <main className={` bg-backgroundPrimary min-h-[75vh]`}>
      <div className="py-[80px] ">
        <Hero />
      </div>
    </main>
  );
}

export default ProfilePage;