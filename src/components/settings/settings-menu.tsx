"use client";

import { SettingsContext } from "@/contextes/settings";
import { useContext } from "react";

export default function SettingsMenu({ children }: React.PropsWithChildren) {
  const { menu, setMenu } = useContext(SettingsContext);

  const style = {
    transform: menu === "open" ? "translateX(0)" : "translateX(-100%)",
  };

  const backdropStyle = {
    width: menu === "open" ? "100vw" : "0",
    height: menu === "open" ? "100svh" : "0",
  };

  return (
    <div
      style={backdropStyle}
      className=" bg-ctp-base/10 absolute top-0 right-0 md:left-0 z-50"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          setMenu("closed");
        }
      }}
    >
      <div
        aria-expanded={menu === "open"}
        style={style}
        className='absolute right-0 md:left-0 h-[100svh] md:[aria-expanded="true"]:translate-x-[100%] md:translate-x-[0] [aria-expanded="true"]:translate-x-[100%] translate-x-[0%] transition-transform! duration-300 isolate w-[100vw] md:w-[30vw] md:min-w-[400px] md:max-w-[600px]'
      >
        <div className="absolute top-0 left-0 w-full h-full bg-ctp-base/90 backdrop-blur-md -z-50"></div>

        {children}
      </div>
    </div>
  );
}
