import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import BlogShow from "../components/BlogShow";
import {
  NewSection,
  SectionHeader,
} from "../components/ui/ContentSection";

const blogs = [
  {
    title: "Getting Started with Capture The Flag (CTF)",
    summary:
      "A beginner-friendly guide to starting your CTF journey, covering the essential categories like web exploitation, reverse engineering, and cryptography.",
    date: "2026-02-15",
    slug: "getting-started-with-ctf",
  },
  {
    title: "Understanding XSS: From Basics to Advanced Exploitation",
    summary:
      "Deep dive into Cross-Site Scripting vulnerabilities — how they work, different types (reflected, stored, DOM-based), and how to prevent them.",
    date: "2026-02-01",
    slug: "understanding-xss",
  },
  {
    title: "Building Performant React Apps with Next.js",
    summary:
      "Tips and tricks for optimizing your Next.js applications, including server components, dynamic imports, and effective caching strategies.",
    date: "2026-01-20",
    slug: "performant-react-nextjs",
  },
  {
    title: "My First CTF Competition: Lessons Learned",
    summary:
      "Reflecting on my experience in my first CTF competition — what went right, what went wrong, and the key takeaways for future competitions.",
    date: "2026-01-10",
    slug: "first-ctf-competition",
  },
  {
    title: "Web Penetration Testing Methodology",
    summary:
      "A structured approach to web application penetration testing, covering reconnaissance, vulnerability identification, and exploitation techniques.",
    date: "2025-12-28",
    slug: "web-pentest-methodology",
  },
];

export default function BlogsPage() {
  return (
    <div className="min-h-lvh max-w-[800px] mx-auto px-6 md:px-12 py-16 lg:py-24">
      <Link
        href="/"
        className="text-teal-300 hover:text-teal-200 transition-colors text-sm font-semibold flex items-center gap-1 mb-8 group/back"
      >
        <ArrowUpRight
          size={14}
          className="rotate-[225deg] group-hover/back:-translate-x-1 transition-transform"
        />
        Back to Home
      </Link>
      <NewSection id="all-blogs">
        <SectionHeader>All Blog Posts</SectionHeader>
        <ul className="text-slate-400 mt-4 flex flex-col gap-y-12 lg:gap-y-2 group/list">
          {blogs.map((blog, i) => (
            <li
              key={i}
              className="lg:group-hover/list:opacity-50 transition-opacity lg:hover:!opacity-100"
            >
              <BlogShow
                title={blog.title}
                summary={blog.summary}
                date={blog.date}
                slug={blog.slug}
              />
            </li>
          ))}
        </ul>
      </NewSection>
    </div>
  );
}
