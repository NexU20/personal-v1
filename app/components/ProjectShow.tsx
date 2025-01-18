import { ArrowUpRight } from "lucide-react";
import { ToolBadge } from "./ToolBadge";
import Image from "next/image";
import Link from "next/link";

export default function ProjectShow({
  name,
  description,
  image,
  tools,
  link,
}: {
  name: string;
  description: string;
  image?: string;
  tools?: string[];
  link: string;
}) {
  return (
    <div className="projects flex flex-col lg:-translate-x-4 lg:cursor-pointer lg:group/item sm:flex-row gap-4 transition-color transition-opacity lg:hover:bg-blue-300 lg:py-5 rounded-md lg:px-4 hover:backdrop-blur-3xl lg:hover:bg-opacity-10">
      <div className="project-main sm:order-2 sm:flex-1">
        <Link
          href={link}
          target="_blank"
          className="flex items-end gap-x-1 text-white group/item cursor-pointer hover:text-teal-300 transition-colors w-fit"
        >
          <h3>{name}</h3>
          <ArrowUpRight
            size={16}
            className="group-hover/item:-translate-y-2 group-hover/item:translate-x-1 transition-transform"
          />
        </Link>
        <div className="mt-2 text-sm">
          <p>{description}</p>
        </div>
        {tools && (
          <div className="mt-4 flex gap-2 flex-wrap">
            {tools.map((tool) => (
              <ToolBadge key={tool} name={tool} />
            ))}
          </div>
        )}
      </div>
      {image && (
        <div className="bg-slate-950 aspect-video w-44 sm:h-20 sm:w-auto flex justify-center items-center rounded-md sm:order-1 text-sm">
          <Image
            src={`/${image}`}
            alt={name}
            width={200}
            height={100}
            className="rounded-md object-cover w-full h-full"
          />
        </div>
      )}
    </div>
  );
}
