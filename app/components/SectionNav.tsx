"use client";
import { useEffect, useState } from "react";
import Nav from "./ui/Nav";

const sections = [
	{ id: "about", label: "About" },
	{ id: "experience", label: "Experience" },
	{ id: "projects", label: "Projects" },
	{ id: "blogs", label: "Blogs" },
	{ id: "skill", label: "Skills" },
];

export default function SectionNav() {
	const [active, setActive] = useState("about");

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setActive(entry.target.id);
					}
				});
			},
			{
				rootMargin: "-30% 0px -70% 0px",
			},
		);

		sections.forEach(({ id }) => {
			const element = document.getElementById(id);
			if (element) observer.observe(element);
		});

		return () => observer.disconnect();
	}, []);

	return (
		<nav
			aria-label="Portfolio sections"
			className="lg:flex flex-col hidden flex-1 relative"
		>
			<div className="absolute left-[4px] top-3 bottom-3 w-px bg-slate-700/50" />

			<div className="flex flex-col gap-y-0.5">
				{sections.map(({ id, label }) => (
					<Nav key={id} section={label} active={active === id} />
				))}
			</div>
		</nav>
	);
}
