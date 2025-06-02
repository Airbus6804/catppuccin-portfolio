import FadeIn from "../animations/fadeIn";

export default function MainCardLayout({
  children,
  title,
}: {
  children: React.ReactNode;
  title: React.ReactNode;
}) {
  return (
    <div className="flex flex-col h-full">
      <div className="text-2xl font-bold text-ctp-text text-center py-4 h-10 flex items-center justify-center leading-none box-content">
        <FadeIn direction="bottom">
          <h2 className="h-5 inline-block leading-none align-top">{title}</h2>
        </FadeIn>
      </div>
      <div className="flex-1">{children}</div>
    </div>
  );
}
