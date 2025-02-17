import { GithubIcon, InstagramIcon, Linkedin } from "lucide-react";
import Link from "next/link";
import ProjectShow from "./components/ProjectShow";
import SectionNav from "./components/SectionNav";
import { ArrowUpRight } from "lucide-react";
import {
  FirstSection,
  NewSection,
  SectionFooter,
  SectionHeader,
} from "./components/ui/ContentSection";
import Image from "next/image";

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
  },
];

const projects = [
  {
    name: "Twitter Clone",
    description: "Twitter clone with Next.Js and Firebase, just for fun ",
    image: "twitter.PNG",
    tools: ["react", "nextjs", "firebase"],
    link: "https://github.com/NexU20/twitter-clone",
  },
  {
    name: "AmaTI",
    description:
      "This application helps parents monitor their children's academic progress in university. Features include real-time access to schedules, attendance, grades, and other academic updates, with a user-friendly and responsive interface. Designed for data accuracy and an optimal user experience.",
    image: "amati.PNG",
    tools: ["react", "tailwindcss", "mysql", "nextjs"],
    link: "https://github.com/NexU20/AmaTI/tree/amati-withbackend",
  },
  {
    name: "Reaksi",
    description:
      "Reaksi is a JavaScript library inspired by React, designed to help me for learning React more easily. Currently, Reaksi supports the state hook for efficiently managing state within components.",
    image: "reaksi.PNG",
    tools: ["javascript", "nodejs"],
    link: "https://github.com/NexU20/reaksi/",
  },
  {
    name: "Portofolio",
    description: "My first personal Website using Next.Js",
    image: "porto.PNG",
    tools: ["react", "nextjs", "styled components"],
    link: "",
  },
  {
    name: "NobarYT",
    description:
      "This application allows users to watch YouTube videos together in real-time. Users can create a room and watch videos together. Features include real-time chat and video synchronization.",
    tools: ["react", "nextjs", "socket.io"],
    link: "https://github.com/NexU20/NobarYT/",
  },
  {
    name: "Notion - Clone",
    description:
      "Notion clone with Next.Js and Tailwindcss. For learning purpose",
    image: "notion.PNG",
    tools: ["react", "nextjs", "tailwindcss", "clerk", "MongoDB"],
    link: "https://notion-lndn-lake.vercel.app",
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
  return (
    <div className="min-h-lvh grid grid-rows-[auto,1fr] lg:grid-cols-2 lg:grid-rows-1 max-w-[1300px] mx-auto">
      <header className="px-6 md:px-12 md:py-16 lg:py-24 py-12 lg:sticky lg:top-0 lg:h-lvh lg:flex lg:flex-col lg:gap-y-12">
        <div>
          <h1 className="font-extrabold text-4xl md:text-5xl">Lindan Akbar</h1>
          <h2 className="mt-1 md:text-lg">Junior Front End Engineer</h2>
          <p className="text-slate-400 leading-relaxed mt-4 max-w-96">
            I craft seamless, pixel-perfect digital experiences that bring
            accessibility and innovation to the web.
          </p>
        </div>
        <SectionNav />
        <ul className="flex gap-x-5 mt-8">
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
              In my spare time, I enjoy exploring and deepening my knowledge,
              indulging in gaming, and watching films.
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
        <NewSection id="skill">
          <SectionHeader>Skill & Interest</SectionHeader>
          <div className="max-w-96 text-sm lg:mt-10">
            <h3>Technical: </h3>
            <ul className="w-full flex flex-wrap gap-4 justify-center mt-2">
              {skills.map((el, index) => (
                <li
                  key={index}
                  className="flex cursor-pointer hover:bg-neutral-400 hover:bg-opacity-30 hover:backdrop-blur-md p-2 items-center justify-center size-16 md:size-20 rounded-sm md:rounded-md opacity-50 hover:opacity-100 transition-opacity group/skill"
                >
                  <Image
                    src={`/img/${el.image}`}
                    width={100}
                    height={100}
                    alt={`Skill Image ${index + 1}`}
                    className="object-cover filter grayscale group-hover/skill:grayscale-0 transition-filter"
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
