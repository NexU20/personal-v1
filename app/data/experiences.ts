export interface Experience {
	period: string;
	title: string;
	company: string;
	companyUrl?: string;
	roles?: string[];
	description: string;
	attachments?: { label: string; url: string }[];
	tools: string[];
}

export const experiences: Experience[] = [
	{
		period: "2025 — 2026",
		title: "Frontend Developer",
		company: "Universitas Islam Negeri Syarif Hidayatullah Jakarta",
		companyUrl: "https://uinjkt.ac.id/",
		description:
			"Led frontend development for the faculty's Outcome-Based Education (OBE) system. Managed sprints, designed routing architectures, and built reusable component hierarchies. Maintained and optimized existing faculty service applications to improve reliability.",
		tools: ["HTML & CSS", "JavaScript", "PHP", "MySQL", "Git"],
		attachments: [
			{ label: "OBE", url: "https://layanan-obe.uinjakarta.id/" },
			{
				label: "Layanan FST",
				url: "https://layanan-fst.uinjakarta.id/",
			},
		],
	},
];
