"use client";
import { useEffect, useState } from "react";
import Nav from "./ui/Nav";

export default function SectionNav() {
  const [active, setActive] = useState("about");

  useEffect(() => {
    const handleScroll = () => {
      const about = document.getElementById("about");
      const projects = document.getElementById("projects");
      const skill = document.getElementById("skill");
      const scrollY = window.scrollY;

      console.log(scrollY);

      if (about && scrollY < about.offsetTop + 400) {
        setActive("about");
      } else if (projects && scrollY < projects.offsetTop + 400) {
        setActive("projects");
      } else if (skill && scrollY < skill.offsetTop + 400) {
        setActive("skill");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="lg:flex flex-col gap-y-2 hidden flex-1">
      <Nav section="About" active={active === "about"} />
      <Nav section="Projects" active={active === "projects"} />
      <Nav section="Skill & Interest" active={active === "skill"} />
    </div>
  );
}
