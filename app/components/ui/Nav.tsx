export default function Nav({
  active = false,
  section,
}: {
  active?: boolean;
  section: string;
}) {
  return (
    <a
      href={`#${section.split(" ")[0].toLowerCase()}`}
      className="flex items-center gap-x-3 group cursor-pointer w-fit min-h-10 py-2"
    >
      <div
        className={`${
          active ? "bg-white w-20" : "bg-slate-400 opacity-80 w-12"
        } h-[1px] rounded-full group-hover:w-20 transition-all group-hover:bg-white group-hover:opacity-100`}
      ></div>
      <span
        className={`${
          active ? "text-white" : "text-slate-400 text-opacity-80"
        } font-semibold group-hover:text-white group-hover:text-opacity-100 transition-all text-sm`}
      >
        {section}
      </span>
    </a>
  );
}
