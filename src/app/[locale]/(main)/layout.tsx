import { NextIntlClientProvider } from "next-intl";
import MainCard from "../../../components/main-card";
interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <NextIntlClientProvider>
      <main className="flex flex-col items-center md:justify-center h-screen">
        <MainCard>{children}</MainCard>
      </main>
    </NextIntlClientProvider>
  );
}
