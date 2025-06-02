import ChooseBg from "./choose-bg";
import ChooseTheme from "./choose-theme";
import CloseSettings from "./close-settings";
import { getTranslations } from "next-intl/server";
export default async function SettingsContent() {
  const t = await getTranslations("settings");
  return (
    <div className="flex flex-col gap-4 p-4">
      <CloseSettings />
      <div className="flex flex-col gap-4 text-ctp-text">
        <div className="flex flex-col gap-2">
          <h4 className="text-xl text-ctp-text">{t("theme")}</h4>
          <ChooseTheme />
        </div>
        <div className="md:flex flex-col gap-2 hidden">
          <h4 className="text-xl text-ctp-text">{t("bg")}</h4>
          <ChooseBg />
        </div>
      </div>
    </div>
  );
}
