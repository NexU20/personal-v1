import type { Metadata } from "next";
import { siteConfig } from "@/lib/seo";

export const metadata: Metadata = {
	title: "All Projects",
	description: `A collection of projects built by ${siteConfig.author} — from web apps to security tools and open-source experiments.`,
	alternates: {
		canonical: "/projects",
	},
	openGraph: {
		title: `All Projects | ${siteConfig.author}`,
		description: `A collection of projects built by ${siteConfig.author}.`,
		url: "/projects",
	},
};

export default function ProjectsLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <>{children}</>;
}
