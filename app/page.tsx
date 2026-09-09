import { GithubIcon, InstagramIcon, Linkedin } from "lucide-react";
import Link from "next/link";
import ProjectShow from "./components/ProjectShow";
import BlogShow from "./components/BlogShow";
import ExperienceShow from "./components/ExperienceShow";
import SectionNav from "./components/SectionNav";
import { ArrowUpRight } from "lucide-react";
import {
	FirstSection,
	NewSection,
	SectionFooter,
	SectionHeader,
} from "./components/ui/ContentSection";
import Image from "next/image";
import { projects } from "./data/projects";
import { absoluteUrl, siteConfig } from "@/lib/seo";
import { blogs } from "./data/blogs";
import { experiences } from "./data/experiences";

const links = [
	{
		url: siteConfig.links.github,
		label: "GitHub profile",
		icon: (
			<GithubIcon
				className="text-slate-400 hover:text-slate-100 transition-colors"
				size={24}
			/>
		),
	},
	{
		url: siteConfig.links.instagram,
		label: "Instagram profile",
		icon: (
			<InstagramIcon
				className="text-slate-400 hover:text-slate-100 transition-colors"
				size={24}
			/>
		),
	},
	{
		url: siteConfig.links.linkedin,
		label: "LinkedIn profile",
		icon: (
			<Linkedin
				size={24}
				className="text-slate-400 hover:text-slate-100 transition-colors"
			/>
		),
	},
];

const skills = [
	{
		name: "React",
		image: "react.png",
	},
	{
		name: "Node.Js",
		image: "node.png",
	},
	{
		name: "Next.Js",
		image: "next1.png",
	},
	{
		name: "Tailwindcss",
		image: "tailwind.png",
	},
	{
		name: "MySQL",
		image: "mysql.png",
	},
];

export default function Home() {
	const jsonLd = [
		{
			"@context": "https://schema.org",
			"@type": "ProfilePage",
			name: siteConfig.title,
			url: siteConfig.url,
			description: siteConfig.description,
			inLanguage: "en-US",
			mainEntity: {
				"@type": "Person",
				name: siteConfig.author,
				url: siteConfig.url,
				email: `mailto:${siteConfig.email}`,
				jobTitle: "Front End Engineer",
				sameAs: Object.values(siteConfig.links),
				knowsAbout: [
					"React",
					"Next.js",
					"Tailwind CSS",
					"Frontend Engineering",
					"Cyber Security",
					"Web Penetration Testing",
					"Capture The Flag",
				],
			},
		},
		{
			"@context": "https://schema.org",
			"@type": "ItemList",
			name: "Selected projects by Lindan Akbar",
			itemListElement: projects.map((project, index) => ({
				"@type": "ListItem",
				position: index + 1,
				item: {
					"@type": "CreativeWork",
					name: project.name,
					description: project.description,
					url: project.link || absoluteUrl("/"),
					keywords: project.tools?.join(", "),
				},
			})),
		},
	];

	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
				}}
			/>
			<div className="min-h-lvh grid grid-rows-[auto,1fr] lg:grid-cols-2 lg:grid-rows-1 max-w-[1300px] mx-auto">
				<header className="px-6 md:px-12 md:py-16 lg:py-24 py-12 lg:sticky lg:top-0 lg:h-lvh lg:flex lg:flex-col lg:justify-between">
					<div className="flex flex-col gap-y-12">
						<div>
							<h1 className="font-extrabold text-4xl md:text-5xl">
								Lindan Akbar
							</h1>
							<h2 className="mt-1 md:text-lg">
								Front End Engineer and CTF Player
							</h2>
							<p className="text-slate-400 leading-relaxed mt-4 max-w-96">
								I craft seamless, pixel-perfect digital experiences that bring
								accessibility and innovation to the web.
							</p>
						</div>
						<SectionNav />
					</div>
					<ul className="flex gap-x-5 mt-8 lg:mt-0">
						{links.map(({ url, label, icon }) => (
							<li key={url}>
								<Link
									href={url}
									target="_blank"
									rel="noopener noreferrer"
									draggable={false}
									aria-label={label}
								>
									{icon}
								</Link>
							</li>
						))}
					</ul>
				</header>
				<main className="px-6 pb-4 md:px-12 lg:pb-24">
					<FirstSection id="about">
						<SectionHeader>About</SectionHeader>
						<div className="text-slate-400 mt-4 mb-8 lg:mb-6 flex flex-col gap-y-4 lg:py-2">
							<p className="leading-relaxed">
								I&apos;m a developer passionate about crafting accessible,
								pixel-perfect user interfaces that blend thoughtful design with
								robust engineering. My favorite work lies at the intersection of
								design and development, creating experiences that not only look
								great but are meticulously built for performance and usability.
							</p>
							<p className="leading-relaxed">
								Currently studying at{" "}
								<a
									href="https://uinjkt.ac.id/"
									target="_blank"
									rel="noopener noreferrer"
									className="text-white hover:text-teal-300 transition-colors"
								>
									UIN Syarif Hidayatullah Jakarta
								</a>
								, where I also led frontend development, building the
								faculty&apos;s Outcome-Based Education (OBE) system from the
								ground up and maintaining mission-critical service applications
								used across the institution.
							</p>
							<p>
								Beyond web development, I have a strong interest in{" "}
								<span className="font-bold">cyber security</span> and actively
								participate as a{" "}
								<a
									href="https://ctftime.org/user/246529"
									target="_blank"
									rel="noopener noreferrer"
									className="text-white hover:text-teal-300 transition-colors"
								>
									CTF (Capture The Flag)
								</a>{" "}
								player, sharpening my skills in web penetration testing and
								security challenges. In my spare time, I enjoy exploring and
								deepening my knowledge, indulging in gaming, and watching films.
							</p>
						</div>
					</FirstSection>
					<NewSection id="experience">
						<SectionHeader>Experience</SectionHeader>
						<ul className="text-slate-400 mt-4 flex flex-col gap-y-12 lg:gap-y-2 group/list">
							{experiences.map((exp, i) => (
								<li
									key={i}
									className="lg:group-hover/list:opacity-50 transition-opacity lg:hover:!opacity-100"
								>
									<ExperienceShow {...exp} />
								</li>
							))}
						</ul>
						<Link
							href="/Lndn_resume.pdf"
							target="_blank"
							rel="noopener noreferrer"
							className="mt-6 font-semibold inline-flex items-end gap-x-2 group/resum hover:text-teal-300 transition-colors"
						>
							View my Résumé
							<ArrowUpRight
								size={16}
								className="group-hover/resum:translate-x-1 group-hover/resum:-translate-y-2 transition-transform"
							/>
						</Link>
					</NewSection>
					<NewSection id="projects">
						<SectionHeader>My Projects</SectionHeader>
						<ul className="text-slate-400 mt-4 flex flex-col gap-y-12 lg:gap-y-2 group/list">
							{projects
								.slice(0, 5)
								.map(({ name, description, image, tools, link }, i) => (
									<li
										key={i}
										className="lg:group-hover/list:opacity-50 transition-opacity lg:hover:!opacity-100"
									>
										<ProjectShow
											name={name}
											description={description}
											image={image}
											tools={tools}
											link={link}
										/>
									</li>
								))}
						</ul>
						{projects.length > 5 && (
							<Link
								href="/projects"
								className="mt-6 font-semibold inline-flex items-end gap-x-2 group/proj hover:text-teal-300 transition-colors"
							>
								View All Projects
								<ArrowUpRight
									size={16}
									className="group-hover/proj:translate-x-1 group-hover/proj:-translate-y-2 transition-transform"
								/>
							</Link>
						)}
					</NewSection>
					<NewSection id="blogs">
						<SectionHeader>Blog</SectionHeader>
						<ul className="text-slate-400 mt-4 flex flex-col gap-y-12 lg:gap-y-2 group/list">
							{blogs.slice(0, 5).map((blog, i) => (
								<li
									key={i}
									className="lg:group-hover/list:opacity-50 transition-opacity lg:hover:!opacity-100"
								>
									<BlogShow
										title={blog.title}
										summary={blog.summary}
										date={blog.date}
										slug={blog.slug}
										basePath="/blog"
									/>
								</li>
							))}
						</ul>
						<Link
							href="/blog"
							className="mt-6 font-semibold inline-flex items-end gap-x-2 group/blog hover:text-teal-300 transition-colors"
						>
							View All Posts
							<ArrowUpRight
								size={16}
								className="group-hover/blog:translate-x-1 group-hover/blog:-translate-y-2 transition-transform"
							/>
						</Link>
					</NewSection>
					<NewSection id="skills">
						<SectionHeader>Skill & Interest</SectionHeader>
						<div className="text-sm lg:mt-10">
						<h3>Technical: </h3>

						{/* Mobile — static wrapped chips */}
						<div className="flex flex-wrap gap-2 mt-3 lg:hidden">
							{skills.map((el, index) => (
								<div
									key={index}
									className="flex items-center gap-x-2 px-3 py-2 rounded-full border border-slate-700/50 bg-slate-800/50 backdrop-blur-sm"
								>
									<Image
										src={`/img/${el.image}`}
										width={20}
										height={20}
										alt={`${el.name} logo`}
										className="object-contain size-5"
									/>
									<span className="text-xs text-slate-300 font-medium">
										{el.name}
									</span>
								</div>
							))}
						</div>

						{/* Desktop — marquee */}
						<div className="marquee-container marquee-mask mt-3 -mx-12 overflow-hidden hidden lg:block">
							<div className="flex marquee-track w-max gap-3 py-1">
								{[...skills, ...skills, ...skills].map((el, index) => (
									<div
										key={index}
										className="flex items-center gap-x-2.5 px-4 py-2.5 rounded-full border border-slate-700/50 bg-slate-800/50 backdrop-blur-sm hover:border-teal-500/50 hover:bg-slate-700/50 transition-all duration-300 shrink-0"
									>
										<Image
											src={`/img/${el.image}`}
											width={24}
											height={24}
											alt={`${el.name} logo`}
											className="object-contain size-6"
										/>
										<span className="text-sm text-slate-300 font-medium whitespace-nowrap">
											{el.name}
										</span>
									</div>
								))}
							</div>
							<div className="flex marquee-track-reverse w-max gap-3 py-1 mt-2">
								{[...skills, ...skills, ...skills].map((el, index) => (
									<div
										key={index}
										className="flex items-center gap-x-2.5 px-4 py-2.5 rounded-full border border-slate-700/50 bg-slate-800/50 backdrop-blur-sm hover:border-teal-500/50 hover:bg-slate-700/50 transition-all duration-300 shrink-0"
									>
										<Image
											src={`/img/${el.image}`}
											width={24}
											height={24}
											alt={`${el.name} logo`}
											className="object-contain size-6"
										/>
										<span className="text-sm text-slate-300 font-medium whitespace-nowrap">
											{el.name}
										</span>
									</div>
								))}
							</div>
						</div>
						</div>
						<div className="text-sm mt-4 lg:mt-6">
							<h3>Interpersonal: </h3>
							<ul className="flex flex-wrap gap-2 mt-2">
								<li className="rounded-md bg-teal-600 px-2 py-1 text-xs font-semibold">
									Teamwork
								</li>
								<li className="rounded-md bg-teal-600 px-2 py-1 text-xs font-semibold">
									Problem Solving
								</li>
								<li className="rounded-md bg-teal-600 px-2 py-1 text-xs font-semibold">
									Communication
								</li>
							</ul>
						</div>
						<div className="text-sm mt-4 lg:mt-6">
							<h3>Interest: </h3>
							<ul className="flex flex-wrap gap-2 mt-2">
								<li className="rounded-md bg-teal-600 px-2 py-1 text-xs font-semibold">
									Cyber Security
								</li>
								<li className="rounded-md bg-teal-600 px-2 py-1 text-xs font-semibold">
									Web Penetration Testing
								</li>
								<li className="rounded-md bg-teal-600 px-2 py-1 text-xs font-semibold">
									Web Development
								</li>
								<li className="rounded-md bg-teal-600 px-2 py-1 text-xs font-semibold">
									Machine Learning
								</li>
							</ul>
						</div>
					</NewSection>
					<NewSection id="contact">
						<SectionHeader>Contact</SectionHeader>
						<div className="text-slate-400 mt-4 lg:mt-6">
							<p>
								If you have any questions or would like to work together, feel
								free to reach out to me at{" "}
								<a
									href="mailto:fghics049@gmail.com"
									className="text-slate-200 hover:text-teal-300"
								>
									fghics049@gmail.com
								</a>
							</p>
						</div>
					</NewSection>
					<SectionFooter />
				</main>
			</div>
		</>
	);
}
