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
      aria-current={active ? "true" : undefined}
      className="flex items-center gap-x-3 group cursor-pointer py-1.5 relative w-fit"
    >
      <div
        className={`${
          active
            ? "size-2.5 bg-teal-400 shadow-[0_0_8px_rgba(45,212,191,0.6)]"
            : "size-1.5 bg-slate-500 group-hover:bg-slate-300 group-hover:size-2"
        } rounded-full transition-all duration-300 shrink-0`}
      ></div>
      <span
        className={`${
          active
            ? "text-white translate-x-0.5"
            : "text-slate-500 group-hover:text-slate-300"
        } font-medium text-xs uppercase tracking-widest transition-all duration-300`}
      >
        {section}
      </span>
    </a>
  );
}
