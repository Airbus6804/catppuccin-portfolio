"use client";

import { SettingsContext } from "@/contextes/settings";
import { useContext } from "react";
import bg1 from "@/assets/bg/1.avif";
import bg2 from "@/assets/bg/2.avif";
import Image from "next/image";

export default function ChooseBg() {
  const { availableBg, bg: currentBg, setBg } = useContext(SettingsContext);

  const bgImages = [bg1, bg2];

  return (
    <div className="flex gap-4">
      {availableBg.map((bg, i) => (
        <div
          aria-selected={currentBg === bg.id}
          key={bg.id}
          className="h-[100px] w-[160px] bg-ctp-base rounded-md cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out aria-selected:outline-2 outline-ctp-overlay1 outline-offset-4"
          onClick={() => setBg(bg.id)}
        >
          <Image
            src={bgImages[i]}
            alt={`bg-${bg.id}`}
            className="object-cover h-full w-full"
            width={160}
            height={90}
          />
        </div>
      ))}
    </div>
  );
}
