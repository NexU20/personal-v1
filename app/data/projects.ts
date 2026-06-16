export const projects: Projects = [
  {
    name: "NusaShield",
    description: "An OSINT threat intelligence platform for Indonesia's digital finance ecosystem",
    tools: ["react", "nextjs", "typescript"],
    link: "https://nusashield.vercel.app/",
    image: "nusashield.jpg",
  },
  {
    name: "Twitter Clone",
    description: "Twitter clone built with Next.js and Firebase for learning real-time social app patterns.",
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
      "Reaksi is a JavaScript library inspired by React, designed to help me learn React internals more easily. Currently, Reaksi supports a state hook for managing component state.",
    image: "reaksi.PNG",
    tools: ["javascript", "nodejs"],
    link: "https://github.com/NexU20/reaksi/",
  },
  {
    name: "Portfolio",
    description: "My first personal website built with Next.js.",
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
      "Notion clone built with Next.js and Tailwind CSS for learning full-stack product interfaces.",
    image: "notion.PNG",
    tools: ["react", "nextjs", "tailwindcss", "clerk", "MongoDB"],
    link: "https://notion-lndn-lake.vercel.app",
  },
];

type Project = {
  name: string;
  description: string;
  image?: string;
  tools: string[];
  link?: string;
};

type Projects = Array<Project>;

export type {Project, Projects};