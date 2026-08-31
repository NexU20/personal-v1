"use client";

import { ArrowLeft, ArrowUpRight, ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { ToolBadge } from "../components/ToolBadge";
import { projects } from "../data/projects";

export default function ProjectsPage() {
	const grouped = projects.reduce(
		(acc, project) => {
			const year = project.year;
			if (!acc[year]) acc[year] = [];
			acc[year].push(project);
			return acc;
		},
		{} as Record<number, typeof projects>
	);

	const sortedYears = Object.keys(grouped)
		.map(Number)
		.sort((a, b) => b - a);

	return (
		<div className="max-w-[1000px] mx-auto px-6 md:px-12 py-12 md:py-20 min-h-lvh">
			<Link
				href="/#projects"
				className="text-slate-400 hover:text-teal-300 transition-colors inline-flex items-center gap-x-2 text-sm group/back"
			>
				<ArrowLeft
					size={14}
					className="group-hover/back:-translate-x-1 transition-transform"
				/>
				Back
			</Link>

			<div className="mt-10">
				<h1 className="font-extrabold text-4xl md:text-5xl bg-gradient-to-r from-white via-slate-200 to-teal-200 bg-clip-text text-transparent">
					All Projects
				</h1>
				<p className="text-slate-400 mt-3 max-w-lg leading-relaxed text-sm md:text-base">
					A complete archive of things I&apos;ve built, broken, and
					learned from.
				</p>
			</div>

			<div className="mt-14 flex flex-col gap-y-16">
				{sortedYears.map((year) => (
					<section key={year}>
						<div className="flex items-center gap-x-4 mb-6">
							<h2 className="text-teal-400 font-bold text-lg tabular-nums">
								{year}
							</h2>
							<div className="h-px flex-1 bg-gradient-to-r from-teal-400/30 to-transparent" />
						</div>

						<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
							{grouped[year].map((project, i) => {
								const isExternal =
									project.link?.startsWith("http");
								const displayUrl = project.link
									?.replace(/^https?:\/\//, "")
									.replace(/\/$/, "");

								return (
									<div
										key={i}
										className="group/card relative rounded-xl border border-slate-800/60 bg-slate-800/20 backdrop-blur-sm overflow-hidden hover:border-teal-500/30 hover:bg-slate-800/40 transition-all duration-500"
									>
										{/* Image area */}
										{project.image && (
											<div className="relative h-44 overflow-hidden">
												<Image
													src={`/${project.image}`}
													alt={project.name}
													fill
													className="object-cover object-top opacity-70 group-hover/card:opacity-90 group-hover/card:scale-105 transition-all duration-700"
												/>
												<div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />

												{/* Year pill on image */}
												<div className="absolute top-3 right-3 bg-slate-900/70 backdrop-blur-md text-teal-400 text-xs font-semibold px-2.5 py-1 rounded-full border border-teal-500/20">
													{project.year}
												</div>
											</div>
										)}

										{/* Content */}
										<div className="p-5">
											<div className="flex items-start justify-between gap-x-3">
												<h3 className="font-semibold text-white group-hover/card:text-teal-300 transition-colors text-lg leading-snug">
													{project.name}
												</h3>
												{project.link && (
													<Link
														href={project.link}
														target={
															isExternal
																? "_blank"
																: undefined
														}
														rel={
															isExternal
																? "noopener noreferrer"
																: undefined
														}
														aria-label={`Visit ${project.name}`}
														className="shrink-0 mt-0.5 p-1.5 rounded-lg text-slate-500 hover:text-teal-300 hover:bg-teal-500/10 transition-all"
													>
														<ExternalLink
															size={16}
														/>
													</Link>
												)}
											</div>

											<p className="text-slate-400 text-sm mt-2 leading-relaxed line-clamp-2">
												{project.description}
											</p>

											{/* Tools */}
											<div className="flex flex-wrap gap-1.5 mt-4">
												{project.tools.map((tool) => (
													<ToolBadge
														key={tool}
														name={tool}
													/>
												))}
											</div>

											{/* Link */}
											{project.link && displayUrl && (
												<Link
													href={project.link}
													target={
														isExternal
															? "_blank"
															: undefined
													}
													rel={
														isExternal
															? "noopener noreferrer"
															: undefined
													}
													className="mt-4 text-xs text-slate-500 hover:text-teal-300 transition-colors inline-flex items-center gap-x-1 group/link"
												>
													{displayUrl}
													<ArrowUpRight
														size={12}
														className="shrink-0 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 transition-transform"
													/>
												</Link>
											)}
										</div>

										{/* Subtle glow on hover */}
										<div className="absolute inset-0 rounded-xl opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-br from-teal-500/5 via-transparent to-teal-500/5" />
									</div>
								);
							})}
						</div>
					</section>
				))}
			</div>
		</div>
	);
}
