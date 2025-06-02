
export default function File({
  name,
  icon,
  link,
}: {
  name: string;
  icon: React.ReactNode;
  link: string;
}) {
  return (
    <a href={link} download>
      <div className="flex items-center gap-2 rounded-md text-sm text-ctp-subtext0 hover:bg-ctp-overlay hover:border-ctp-green hover:text-ctp-blue cursor-pointer">
        {icon}
        <span>{name}</span>
      </div>
    </a>
  );
}
