"use client";
import { useEffect, useState } from "react";
import Nav from "./ui/Nav";

export default function SectionNav() {
  const [active, setActive] = useState("about");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "projects", "skill"];
      let currentSection = "about";

      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const { top } = section.getBoundingClientRect();
          if (top <= 0) {
            currentSection = id;
          }
        }
      });

      setActive(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Panggil langsung agar state sesuai posisi awal

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
