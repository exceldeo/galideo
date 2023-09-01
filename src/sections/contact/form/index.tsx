import Button from "@/components/Buttons";
import LayoutCard from "@/components/Cards/LayoutCard";
import { H2, H3, H4, H5 } from "@/components/Typography";
import TextInput from "@/components/textInput";
import React from "react";

function FormContactSection() {
  return (
    <div>
      <LayoutCard className="rounded-3xl">
        <div className="flex flex-col p-14 space-y-10">
          <div>
            <H2>
              <span className="text-primary">Isi Form</span> dibawah ini
            </H2>
            <H4>
              <span className="font-medium">
                Silahkan Dapat Memilih Layanan Dukungan Kami Dibawah Ini
              </span>
            </H4>
          </div>
          <div className="space-y-6">
            <TextInput
              label="Nama"
              full={true}
              placeholder="Masukkan Nama Disini"
              inputSize={"lg"}
            />
            <TextInput
              label="Email"
              full={true}
              placeholder="Masukkan Email Disini"
              inputSize={"lg"}
            />
            <TextInput
              label="Nomor Telepon / Whatsapp"
              full={true}
              placeholder="Masukkan Nomor Telepon / Whatsapp Disini"
              inputSize={"lg"}
            />
            <TextInput
              label="Pesan"
              full={true}
              placeholder="Masukkan Pesan Disini"
              inputSize={"lg"}
            />
          </div>
          <div className="w-full flex justify-center">
            <Button buttonType="primary" size="md" className="text-white">
              Kirim Pesan
            </Button>
          </div>
        </div>
      </LayoutCard>
    </div>
  );
}

export default FormContactSection;
