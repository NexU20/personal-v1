"use client";
import { useRef, useEffect, useCallback, ReactNode } from "react";
import useMobile from "../hooks/use-mobile";

export default function GlowCard({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isMobile = useMobile();

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      const card = cardRef.current;
      if (!card || isMobile) return;

      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const distX = Math.max(0, Math.max(rect.left - e.clientX, e.clientX - rect.right));
      const distY = Math.max(0, Math.max(rect.top - e.clientY, e.clientY - rect.bottom));
      const distance = Math.sqrt(distX * distX + distY * distY);

      const threshold = 300;

      if (distance < threshold) {
        const opacity = Math.max(0, 1 - distance / threshold);
        card.style.setProperty("--glow-x", `${x}px`);
        card.style.setProperty("--glow-y", `${y}px`);
        card.style.setProperty("--glow-opacity", `${opacity}`);
      } else {
        card.style.setProperty("--glow-opacity", "0");
      }
    },
    [isMobile]
  );

  useEffect(() => {
    if (isMobile) return;
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isMobile, handleMouseMove]);

  return (
    <div ref={cardRef} className={`project-glow-border ${className}`}>
      {children}
    </div>
  );
}
