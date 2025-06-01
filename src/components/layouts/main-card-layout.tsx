export default function MainCardLayout({
  children,
  title,
}: {
  children: React.ReactNode;
  title: React.ReactNode;
}) {
  return (
    <div className="flex flex-col h-full">
      <div className="text-2xl font-bold text-ctp-text text-center py-4">
        {title}
      </div>
      <div className="flex-1">{children}</div>
    </div>
  );
}
