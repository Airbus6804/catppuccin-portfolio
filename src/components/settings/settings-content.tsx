

import ChooseBg from "./choose-bg";
import ChooseTheme from "./choose-theme";
import CloseSettings from "./close-settings";
export default function SettingsContent() {
  return (
    <div className="flex flex-col gap-4 p-4">
      <CloseSettings />
      <div className="flex flex-col gap-4 text-ctp-text">
        <ChooseTheme />
        <ChooseBg />
      </div>
    </div>
  );
}
