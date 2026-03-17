import { GithubIcon, InstagramIcon, Linkedin } from "lucide-react";
import Link from "next/link";
import ProjectShow from "./components/ProjectShow";
import BlogShow from "./components/BlogShow";
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
import { blogs } from "./data/blogs";

const links = [
  {
    url: "https://github.com/NexU20",
    icon: (
      <GithubIcon
        className="text-slate-400 hover:text-slate-100 transition-colors"
        size={24}
      />
    ),
  },
  {
    url: "https://www.instagram.com/lndn_af",
    icon: (
      <InstagramIcon
        className="text-slate-400 hover:text-slate-100 transition-colors"
        size={24}
      />
    ),
  },
  {
    url: "https://www.linkedin.com/in/lindan-akbar-5b31b4223",
    icon: (
      <Linkedin
        size={24}
        className="text-slate-400 hover:text-slate-100 transition-colors"
      />
    ),
  }
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
  return (
    <div className="min-h-lvh grid grid-rows-[auto,1fr] lg:grid-cols-2 lg:grid-rows-1 max-w-[1300px] mx-auto">
      <header className="px-6 md:px-12 md:py-16 lg:py-24 py-12 lg:sticky lg:top-0 lg:h-lvh lg:flex lg:flex-col lg:justify-between">
        <div className="flex flex-col gap-y-12">
          <div>
            <h1 className="font-extrabold text-4xl md:text-5xl">Lindan Akbar</h1>
            <h2 className="mt-1 md:text-lg">Front End Engineer and CTF Player</h2>
            <p className="text-slate-400 leading-relaxed mt-4 max-w-96">
              I craft seamless, pixel-perfect digital experiences that bring
              accessibility and innovation to the web.
            </p>
          </div>
          <SectionNav />
        </div>
        <ul className="flex gap-x-5 mt-8 lg:mt-0">
          {links.map(({ url, icon }) => (
            <li key={url}>
              <Link href={url} target="_blank" draggable={false}>
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
              I am currently a student at{" "}
              <a
                href="https://uinjkt.ac.id/"
                target="_blank"
                className="text-white hover:text-teal-300 transition-colors"
              >
                UIN Syarif Hidayatullah Jakarta
              </a>
              . During my studies, I developed an application designed to
              monitor academic activities for parents. In addition, I specialize
              in creating web interfaces that align precisely with provided
              designs, ensuring a flawless, pixel-perfect experience.
            </p>
            <p>
              Beyond web development, I have a strong interest in{" "}
              <span className="font-bold">cyber security</span> and actively
              participate as a{" "}
              <a
                href="https://ctftime.org/user/246529"
                target="_blank"
                className="text-white hover:text-teal-300 transition-colors"
              >
                CTF (Capture The Flag)
              </a>{" "}
              player, sharpening my skills in web penetration testing and
              security challenges. In my spare time, I enjoy exploring and
              deepening my knowledge, indulging in gaming, and watching films.
            </p>
          </div>
          <Link
            href="/CV-Lindan.pdf"
            target="_blank"
            className="font-semibold inline-flex items-end gap-x-2 group/resum hover:text-teal-300 transition-colors"
          >
            View my Résumé
            <ArrowUpRight
              size={16}
              className="group-hover/resum:translate-x-1 group-hover/resum:-translate-y-2 transition-transform"
            />
          </Link>
        </FirstSection>
        <NewSection id="projects">
          <SectionHeader>My Projects</SectionHeader>
          <ul className="text-slate-400 mt-4 flex flex-col gap-y-12 lg:gap-y-2 group/list">
            {projects.map(({ name, description, image, tools, link }, i) => (
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
        </NewSection>
        {/* <NewSection id="blogs">
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
                />
              </li>
            ))}
          </ul>
          <Link
            href="/blogs"
            className="mt-6 font-semibold inline-flex items-end gap-x-2 group/blog hover:text-teal-300 transition-colors"
          >
            View All Posts
            <ArrowUpRight
              size={16}
              className="group-hover/blog:translate-x-1 group-hover/blog:-translate-y-2 transition-transform"
            />
          </Link>
        </NewSection> */}
        <NewSection id="skill">
          <SectionHeader>Skill & Interest</SectionHeader>
          <div className="max-w-96 text-sm lg:mt-10">
            <h3>Technical: </h3>
            <ul className="w-full flex flex-wrap gap-4 justify-center mt-2">
              {skills.map((el, index) => (
                <li
                  key={index}
                  className="relative flex cursor-pointer p-2 items-center justify-center size-16 md:size-20 opacity-60 hover:opacity-100 transition-all duration-300 group/skill"
                >
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2 lg:px-3 lg:py-1.5 px-2 py-1 bg-slate-800/90 backdrop-blur-md border border-slate-700 text-white text-xs whitespace-nowrap rounded-md opacity-0 translate-y-2 group-hover/skill:opacity-100 group-hover/skill:translate-y-0 transition-all duration-300 pointer-events-none z-10">
                    {el.name}
                  </div>
                  <Image
                    src={`/img/${el.image}`}
                    width={100}
                    height={100}
                    alt={`Skill Image ${index + 1}`}
                    className="object-cover filter grayscale group-hover/skill:grayscale-0 drop-shadow-[0_0_12px_rgba(255,255,255,0.1)] group-hover/skill:drop-shadow-[0_0_16px_rgba(255,255,255,0.2)] transition-all duration-300"
                  />
                </li>
              ))}
            </ul>
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
  );
}
