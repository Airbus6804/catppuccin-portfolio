"use client";

import { SettingsContext, Theme as ThemeType } from "@/contextes/settings";
import { useContext } from "react";
import { IoSunnyOutline } from "react-icons/io5";

const themes: { emoji: string; name: ThemeType; isLight: boolean }[] = [
  { emoji: "🌻", name: "latte", isLight: true },
  { emoji: "🪴", name: "frappe", isLight: false },
  { emoji: "🌺", name: "macchiato", isLight: false },
  { emoji: "🌿", name: "mocha", isLight: false },
];

function Theme({
  theme,
}: {
  theme: { emoji: string; name: ThemeType; isLight: boolean };
}) {
  const { theme: currentTheme, setTheme } = useContext(SettingsContext);
  return (
    <div
      className={`flex gap-1 relative justify-center items-center p-4 rounded-md bg-ctp-base/10 border border-ctp-overlay1/50 cursor-pointer hover:scale-105 transition-all duration-200 ${
        currentTheme === theme.name ? "bg-ctp-text text-ctp-base" : ""
      }`}
      data-tooltip-id={`theme-${theme.name}`}
      onClick={() => setTheme(theme.name)}
    >
      {theme.isLight && (
        <IoSunnyOutline className="absolute top-1 right-1 text-ctp-text text-xs" />

      )}
      <span>{theme.emoji}</span>

      <span>{theme.name.charAt(0).toUpperCase() + theme.name.slice(1)}</span>
      
    </div>
  );
}

export default function ChooseTheme() {
  return (

      <div className="grid md:grid-cols-4 grid-cols-2  gap-4">
        {themes.map((theme) => (
          <Theme key={theme.name} theme={theme} />
        ))}
      </div>
    
  );
}
