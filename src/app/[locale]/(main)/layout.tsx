import ThemeProvider from "@/components/theme-provider";
import MainCard from "../../../components/main-card";
import BgImage from "@/components/bg-image";
import SettingsMenu from "@/components/settings/settings-menu";
import SettingsContent from "@/components/settings/settings-content";
import Providers from "@/providers";
import SettingsTrigger from "@/components/settings/settings-trigger";
import { NextIntlClientProvider } from "next-intl";
interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <NextIntlClientProvider>
      <Providers>
        <ThemeProvider>
          <main className="flex flex-col items-center md:justify-center h-screen">
            <MainCard>{children}</MainCard>
          </main>

          <BgImage />
          <div className="absolute top-0 md:left-0 right-0 z-10 ">
            <SettingsMenu>
              <SettingsContent />
            </SettingsMenu>
            <div className="h-10 w-10 flex items-center justify-center gap-2 p-4 md:p-2 box-content">
              <SettingsTrigger />
            </div>
          </div>
        </ThemeProvider>
      </Providers>
    </NextIntlClientProvider>
  );
}
