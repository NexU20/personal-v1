import { ArrowUpRight, LinkIcon } from "lucide-react";
import { ToolBadge } from "./ToolBadge";
import Link from "next/link";
import GlowCard from "./GlowCard";
import type { Experience } from "../data/experiences";

export default function ExperienceShow({
	period,
	title,
	company,
	companyUrl,
	roles,
	description,
	attachments,
	tools,
}: Experience) {
	return (
		<GlowCard className="flex flex-col lg:-translate-x-4 lg:cursor-pointer sm:flex-row gap-4 transition-color transition-opacity lg:hover:bg-blue-300 lg:py-5 rounded-md lg:px-4 hover:backdrop-blur-3xl lg:hover:bg-opacity-10">
			<header className="text-xs text-slate-500 font-semibold uppercase tracking-wide whitespace-nowrap sm:w-32 sm:shrink-0 pt-1">
				{period}
			</header>
			<div className="flex-1">
				<div className="flex flex-col">
					{companyUrl ? (
						<Link
							href={companyUrl}
							target="_blank"
							rel="noopener noreferrer"
							aria-label={`Open ${company} website`}
							className="flex items-end gap-x-1 text-white group/exp cursor-pointer hover:text-teal-300 transition-colors w-fit"
						>
							<h3 className="font-medium">
								{title} · {company}
							</h3>
							<ArrowUpRight
								size={16}
								className="shrink-0 group-hover/exp:-translate-y-2 group-hover/exp:translate-x-1 transition-transform"
							/>
						</Link>
					) : (
						<h3 className="text-white font-medium">
							{title} · {company}
						</h3>
					)}

					{roles && roles.length > 0 && (
						<div className="text-slate-400 text-sm mt-0.5">
							{roles.map((role, i) => (
								<span key={i}>{role}</span>
							))}
						</div>
					)}
				</div>

				<p className="mt-2 text-sm leading-relaxed">{description}</p>

				{attachments && attachments.length > 0 && (
					<ul className="mt-3 flex flex-wrap gap-x-4 gap-y-1">
						{attachments.map((att, i) => (
							<li key={i}>
								<Link
									href={att.url}
									target="_blank"
									rel="noopener noreferrer"
									className="inline-flex items-center gap-x-1.5 text-sm text-slate-300 hover:text-teal-300 transition-colors"
								>
									<LinkIcon size={12} className="shrink-0" />
									{att.label}
								</Link>
							</li>
						))}
					</ul>
				)}

				{tools && tools.length > 0 && (
					<div className="mt-4 flex gap-2 flex-wrap">
						{tools.map((tool) => (
							<ToolBadge key={tool} name={tool} />
						))}
					</div>
				)}
			</div>
		</GlowCard>
	);
}
