"use client";
import { useEffect, useRef } from "react";
import useMobile from "../hooks/use-mobile";

export default function Glowing() {
  const glowingEffectRef = useRef<HTMLDivElement>(null);
  const isMobile = useMobile();

  useEffect(() => {
    const glowingEffect = glowingEffectRef.current;
    if (!glowingEffect) return;
    if (isMobile) return;

    const mouseMove = (e: MouseEvent) => {
      const mouseX = e.clientX - glowingEffect.offsetWidth / 2;
      const mouseY = e.clientY - glowingEffect.offsetHeight / 2;

      const keyframes = {
        transform: `translate(${mouseX}px, ${mouseY}px)`,
      };

      glowingEffect.animate(keyframes, {
        duration: 300,
        fill: "forwards",
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => window.removeEventListener("mousemove", mouseMove);
  }, [isMobile]);

  return (
    <div
      ref={glowingEffectRef}
      className="bg-lightestNavy blur-[540px] opacity-50 hidden lg:block aspect-square size-[500px] fixed top-0 left-0 rounded-full -z-50 pointer-events-none"
    ></div>
  );
}
