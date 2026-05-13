import Link from "next/link";
import { ArrowUpRight, Calendar } from "lucide-react";
import GlowCard from "./GlowCard";

export default function BlogShow({
  title,
  summary,
  date,
  slug,
  basePath = "/blogs",
}: {
  title: string;
  summary: string;
  date: string;
  slug: string;
  basePath?: string;
}) {
  return (
    <GlowCard className="flex flex-col lg:-translate-x-4 lg:cursor-pointer gap-2 transition-color transition-opacity lg:hover:bg-blue-300 lg:py-5 rounded-md lg:px-4 hover:backdrop-blur-3xl lg:hover:bg-opacity-10">
      <div className="flex items-center gap-2 text-xs text-slate-500">
        <Calendar size={12} />
        <time dateTime={date}>{date}</time>
      </div>
      <Link
        href={`${basePath}/${slug}`}
        className="flex items-end gap-x-1 text-white group/blog cursor-pointer hover:text-teal-300 transition-colors w-fit"
      >
        <h3>{title}</h3>
        <ArrowUpRight
          size={16}
          className="shrink-0 group-hover/blog:-translate-y-2 group-hover/blog:translate-x-1 transition-transform"
        />
      </Link>
      <p className="text-sm leading-relaxed">{summary}</p>
    </GlowCard>
  );
}
