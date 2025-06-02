"use client";

import { useEffect, useState } from "react";
import { IconContext } from "react-icons";
import { bgData } from "./assets/bg/bg-data";
import ModalSetup from "./components/modal-setup";
import { ISettingsContext, SettingsContext, Theme } from "./contextes/settings";

export default function Providers({ children }: { children: React.ReactNode }) {
  //eslint-disable-next-line react-hooks/rules-of-hooks
  if (typeof window === "undefined") return null;

  //eslint-disable-next-line react-hooks/rules-of-hooks
  const [settings, setSettings] = useState<ISettingsContext>({
    theme: (localStorage?.getItem("theme") as Theme) ?? "mocha",
    setTheme: (theme: "mocha" | "latte" | "macchiato" | "frappe") => {
      localStorage.setItem("theme", theme);
      setSettings((prev) => ({ ...prev, theme }));
    },
    menu: "closed",
    setMenu: (menu: "open" | "closed") => {
      setSettings((prev) => ({ ...prev, menu }));
    },
    bg: Number(localStorage?.getItem("bg") ?? 1),
    setBg: (bg: number) => {
      localStorage.setItem("bg", bg.toString());

      const selectedBg = bgData.find((b) => bg === b.id)!.import;
      selectedBg().then((b) =>
        setSettings((prev) => ({ ...prev, bgImage: b, bg }))
      );
      // setSettings((prev) => ({ ...prev, bg }))
    },
    availableBg: bgData,
    bgImage: null,
  });

  //eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    const selectedBg = bgData.find((b) => settings.bg === b.id)!.import;
    selectedBg().then((b) => setSettings((prev) => ({ ...prev, bgImage: b })));
  }, [settings.bg]);

  return (

      <IconContext.Provider
        value={{ style: { color: "var(--ctp-text)", verticalAlign: "middle" } }}
      >
        <ModalSetup />
        <SettingsContext.Provider value={settings}>
          {children}
        </SettingsContext.Provider>
      </IconContext.Provider>

  );
}
