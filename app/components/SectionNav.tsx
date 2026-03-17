"use client";
import { useEffect, useState } from "react";
import Nav from "./ui/Nav";

export default function SectionNav() {
  const [active, setActive] = useState("about");

  useEffect(() => {
    const sections = ["about", "projects", "skill"];
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-30% 0px -70% 0px",
      }
    );

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="lg:flex flex-col gap-y-2 hidden flex-1">
      <Nav section="About" active={active === "about"} />
      <Nav section="Projects" active={active === "projects"} />
      {/* <Nav section="Blogs" active={active === "blogs"} /> */}
      <Nav section="Skill & Interest" active={active === "skill"} />
    </div>
  );
}
