"use client";

import { SettingsContext } from "@/contextes/settings";
import Image from "next/image";
import { useContext } from "react";

export default function BgImage() {
  const { bgImage } = useContext(SettingsContext);

  //   useEffect(() => {
  //     const bg = availableBg.find((bg) => bg.id === bgId)!.import;
  //     bg().then(setBg);
  //   }, [bgId]);

  if (!bgImage) return null;

  return (
    <div className="absolute inset-0 w-full h-full max-h-[100svh] max-w-[100svw] bg-ctp-blue">
      <Image
        src={bgImage}
        alt="bg"
        className="inset-0 w-full h-full object-cover "
        fill
      />
    </div>
  );
}
