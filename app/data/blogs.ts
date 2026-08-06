export const blogs: Blogs = [
	{
		title: "Plunder Writeup: XSS via Joomla-style Sanitizer Bypass",
		summary:
			"One of the web challenges from CBD Nasional 2026 (First Blood btw)",
		date: "2026-05-13",
		slug: "plunder-writeup",
		tags: ["CTF", "Web Security", "XSS", "PHP", "CBC S3"],
	},
	{
		title: "Merak-17 Writeup",
		summary: "One of the largest yet the easist WRECKIT 7.0 DFIR chall",
		date: "2026-07-30",
		slug: "merak-writeup",
		tags: ["CTF", "DFIR", "WRECKIT70"],
	},
	{
		title: "It Wrecked Again Writeup",
		summary:
			"Challenge forensik dari WRECKIT 7.0. Memory dump 4GB, flag terenkripsi di RAM, harus reverse shellcode x86-64 untuk recovery.",
		date: "2026-08-06",
		slug: "it-wrecked-writeup",
		tags: ["CTF", "DFIR", "Linux", "WRECKIT70"],
	},
];

export type Blog = {
	title: string;
	summary: string;
	date: string;
	slug: string;
	tags: string[];
};

export type Blogs = Array<Blog>;
