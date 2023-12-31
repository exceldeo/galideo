import React from "react";
import QuoteSection from "./quote";
import ContactWaSection from "./contactWa";
import FormContactSection from "./form";
import { useMediaQuery } from "@/hooks";
import cx from "@/helper/cx";

function ContactPage() {
  const lg = useMediaQuery("lg");

  return (
    <div className="md:container container-mobile">
      <div
        className={cx(
          lg
            ? "grid grid-rows-2 grid-flow-col grid-cols-2 gap-20 "
            : "flex flex-col space-y-10",
          ""
        )}
      >
        <div>
          <QuoteSection />
        </div>
        <div>
          <ContactWaSection />
        </div>
        <div className="row-span-2 ">
          <FormContactSection />
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
