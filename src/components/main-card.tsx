import BottomNavigationLink from "./bottomNavigationLink";
import LanguageToggle from "./languge-toggle";
interface MainCardProps {
  children: React.ReactNode;
}

export default function MainCard({ children }: MainCardProps) {
  return (
    <div className="flex flex-col overflow-hidden isolate relative z-10 text-ctp-text md:w-3/4 lg:w-1/2 md:h-1/2 w-full h-[100svh] rounded-lg max-w-[900px] border-2 border-ctp-overlay">
      <div className="absolute inset-0 bg-ctp-base/95 backdrop-blur-sm -z-10"></div>
      <div className="absolute p-4">
        <LanguageToggle />
      </div>
      
      <div className="h-full max-h-[calc(100dvh-1px)]">{children}</div>

      <BottomNavigationLink />
    </div>
  );
}
