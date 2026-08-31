export const projects: Projects = [
	{
		name: "Outcome Based Education",
		description:
			"A curriculum management system for the faculty that maps course learning outcomes, aligns assessments, and tracks achievement of graduate competencies based on the OBE framework.",
		tools: ["php", "laravel", "mysql"],
		image: "obe.jpg",
		link: "https://layanan-obe.uinjakarta.id/",
		year: 2026,
		madeAt: "UIN Jakarta",
	},
	{
		name: "LedgerLens",
		description:
			" A recursive token tracking application providing end-to-end visibility across wallets, DEXs, and crypto mixers",
		image: "ledgerlens.png",
		tools: ["python", "solana"],
		year: 2026,
		link: "https://github.com/NexU20/LedgerLens",
	},
	{
		name: "NusaShield",
		description:
			"An OSINT threat intelligence platform for Indonesia's digital finance ecosystem",
		tools: ["react", "nextjs", "typescript"],
		link: "https://nusashield.vercel.app/",
		image: "nusashield.jpg",
		year: 2026,
	},
	{
		name: "Twitter Clone",
		description:
			"Twitter clone built with Next.js and Firebase for learning real-time social app patterns.",
		image: "twitter.PNG",
		tools: ["react", "nextjs", "firebase"],
		link: "https://github.com/NexU20/twitter-clone",
		year: 2023,
	},
	{
		name: "AmaTI",
		description:
			"This application helps parents monitor their children's academic progress in university. Features include real-time access to schedules, attendance, grades, and other academic updates, with a user-friendly and responsive interface. Designed for data accuracy and an optimal user experience.",
		image: "amati.PNG",
		tools: ["react", "tailwindcss", "mysql", "nextjs"],
		link: "https://github.com/NexU20/AmaTI/tree/amati-withbackend",
		year: 2024,
		madeAt: "UIN Jakarta",
	},
	{
		name: "Reaksi",
		description:
			"Reaksi is a JavaScript library inspired by React, designed to help me learn React internals more easily. Currently, Reaksi supports a state hook for managing component state.",
		image: "reaksi.PNG",
		tools: ["javascript", "nodejs"],
		link: "https://github.com/NexU20/reaksi/",
		year: 2024,
	},
	{
		name: "Portfolio",
		description: "My first personal website built with Next.js.",
		image: "porto.PNG",
		tools: ["react", "nextjs", "styled components"],
		link: "",
		year: 2023,
	},
	{
		name: "Notion - Clone",
		description:
			"Notion clone built with Next.js and Tailwind CSS for learning full-stack product interfaces.",
		image: "notion.PNG",
		tools: ["react", "nextjs", "tailwindcss", "clerk", "MongoDB"],
		link: "https://notion-lndn-lake.vercel.app",
		year: 2023,
	},
];

type Project = {
	name: string;
	description: string;
	image?: string;
	tools: string[];
	link?: string;
	year: number;
	madeAt?: string;
};

type Projects = Array<Project>;

export type { Project, Projects };
