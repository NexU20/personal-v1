export const blogs: Blogs = [
  {
    title: "Plunder Writeup: XSS via Joomla-style Sanitizer Bypass",
    summary: "One of the web challenges from CBD Nasional 2026 (First Blood btw)",
    date: "2026-05-13",
    slug: "plunder-writeup",
    tags: ["CTF", "Web Security", "XSS", "PHP"],
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