import Button from "@/components/Buttons";
import LayoutCard from "@/components/Cards/LayoutCard";
import { H2, H3, H4, H5 } from "@/components/Typography";
import React from "react";

function ContactWaSection() {
  return (
    <div>
      <LayoutCard className="rounded-3xl">
        <div className="flex flex-col p-14 space-y-10">
          <div>
            <H2>Hubungi Kami Sekarang</H2>
            <H4>
              Kamu Akan Terhubung Dengan Admin Di Messager Kami Dan Mendapatkan
              Respon Yang Cepat
            </H4>
          </div>
          <div className="w-full ">
            <Button buttonType="primary" size="md" className="text-white">
              Chat Melalui Whatsapp
            </Button>
          </div>
        </div>
      </LayoutCard>
    </div>
  );
}

export default ContactWaSection;
