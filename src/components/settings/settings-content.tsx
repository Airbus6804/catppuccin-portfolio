

import { SettingsContext } from "@/contextes/settings";
import { useContext } from "react";
import ChooseTheme from "./choose-theme";
import CloseSettings from "./close-settings";

export default function SettingsContent() {
  return (
    <div className="flex flex-col gap-4 p-4">
      <CloseSettings />
      <div className="flex flex-col gap-4 text-ctp-text">
        <ChooseTheme />
      </div>
    </div>
  );
}
