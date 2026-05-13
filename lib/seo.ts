export const siteConfig = {
  name: "Lindan Akbar Portfolio",
  author: "Lindan Akbar",
  title: "Lindan Akbar | Front End Engineer & CTF Player",
  description:
    "Portfolio of Lindan Akbar, a Front End Engineer and CTF player in Indonesia building accessible, performant web interfaces with React, Next.js, Tailwind CSS, and security-minded engineering.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://lindan.vercel.app",
  ogImage: "/opengraph-image",
  email: "fghics049@gmail.com",
  keywords: [
    "Lindan Akbar",
    "Lindan",
    "BocahanCiledug",
    "Lndn",
    "Front End Engineer",
    "Frontend Engineer Indonesia",
    "Frontend Developer Indonesia",
    "React Developer",
    "Next.js Developer",
    "Tailwind CSS Developer",
    "Portfolio Developer Indonesia",
    "CTF Player",
    "Cyber Security",
    "Web Penetration Testing",
  ],
  links: {
    github: "https://github.com/NexU20",
    instagram: "https://www.instagram.com/lndn_af",
    linkedin: "https://www.linkedin.com/in/lindan-akbar-5b31b4223",
    ctftime: "https://ctftime.org/user/246529",
  },
};

export function absoluteUrl(path = "/") {
  return new URL(path, siteConfig.url).toString();
}
