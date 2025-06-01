"use client";

import { SettingsContext } from "@/contextes/settings";
import { useContext } from "react";

export default function SettingsMenu({ children }: React.PropsWithChildren) {
  const { menu, setMenu } = useContext(SettingsContext);

  const style = {
    width: menu === "open" ? "30vw" : "0",
    minWidth: menu === "open" ? "400px" : "0",
    maxWidth: menu === "open" ? "600px" : "0",
  };

  const backdropStyle = {
    width: menu === "open" ? "100vw" : "0",
    height: menu === "open" ? "100svh" : "0",
  };

  return (
    <div
      style={backdropStyle}
      className=" bg-ctp-base/10 absolute top-0 left-0 z-50"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          setMenu("closed");
        }
      }}
    >
      <div
        style={style}
        className="absolute right-0 md:left-0 h-[100svh] w-0 transition-all duration-300 z-50"
      >
        <div className="absolute top-0 left-0 w-full h-full bg-ctp-base/90 backdrop-blur-md z-50"></div>

        {children}
      </div>
    </div>
  );
}
