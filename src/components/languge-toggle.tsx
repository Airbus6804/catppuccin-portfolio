"use client";

import italy from "@/assets/italy-flag-icon.png";
import english from "@/assets/united-kingdom-flag-icon.png";
import { useLocale } from "next-intl";
import Image from "next/image";
import { useState } from "react";
import { Popover } from "react-tiny-popover";
import { useRouter, usePathname } from "next/navigation";
import FadeIn from "./animations/fadeIn";
export default function LanguageToggle() {
  const lang = useLocale();
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const handleLanguageChange = () => {
    const newLocale = lang === "en" ? ["/en/", "/it/"] : ["/it/", "/en/"];

    router.push(pathname.replace(newLocale[0], newLocale[1]));
    setIsOpen(false);
  };

  return (
    <FadeIn>
      <div className="h-10 w-10 flex items-center justify-center gap-2">
        <Popover
          isOpen={isOpen}
          onClickOutside={() => setIsOpen(false)}
          content={
            <div className="bg-ctp-base border border-ctp-overlay rounded-lg p-2 relative z-[9999] shadow-lg">
              <div
                className="flex items-center gap-2 cursor-pointer"
                onClick={handleLanguageChange}
              >
                <Image
                  src={lang === "it" ? english : italy}
                  alt={lang === "it" ? "english" : "italy"}
                  width={20}
                  height={20}
                />
                <p className="text-sm text-ctp-text">
                  {lang === "it" ? "EN" : "IT"}
                </p>
              </div>
            </div>
          }
          positions={["bottom"]}
          containerStyle={{ zIndex: "9999" }}
        >
          <div
            className="flex items-center justify-center gap-2 cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Image
              src={lang === "it" ? italy : english}
              alt={lang === "it" ? "italy" : "english"}
              width={20}
              height={20}
            />
            <p className="text-sm">{lang === "it" ? "IT" : "EN"}</p>
          </div>
        </Popover>
      </div>
    </FadeIn>
  );
}
