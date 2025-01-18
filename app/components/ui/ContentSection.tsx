import { ReactNode } from "react";

export function FirstSection({
  id,
  children,
}: {
  id: string;
  children: ReactNode;
}) {
  return (
    <section className="pt-8 lg:pt-16" id={id}>
      {children}
    </section>
  );
}

export function SectionHeader({ children }: { children: ReactNode }) {
  return (
    <div className="bg-gradient-to-r lg:hidden from-slate-900 to-slate-900 via-transparent py-4 bg-opacity-70 backdrop-blur-lg lg:from-transparent lg:to-transparent sticky top-0 z-10">
      <h2 className="font-semibold">{children}</h2>
    </div>
  );
}

export function NewSection({
  id,
  children,
  className,
}: {
  id: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={`pt-12 lg:pt-14 ${className}`} id={id}>
      {children}
    </section>
  );
}

export function SectionFooter() {
  return (
    <div
      id="end"
      className="mt-14 lg:mt-16 text-xs md:text-sm max-w-96 text-slate-400 opacity-70"
    >
      <p>
        Coded in{" "}
        <a
          href="https://code.visualstudio.com/"
          className="text-slate-200 hover:text-teal-300 transition-colors"
        >
          Visual Studio Code
        </a>{" "}
        by Lindan Keren. Built with{" "}
        <a
          href="https://nextjs.org/"
          className="text-slate-200 hover:text-teal-300 transition-colors"
        >
          Next.js
        </a>
        ,{" "}
        <a
          href="https://tailwindcss.com/"
          className="text-slate-200 hover:text-teal-300 transition-colors"
        >
          Tailwind CSS
        </a>{" "}
        and 💖, deployed with{" "}
        <a
          href="https://vercel.com/"
          className="text-slate-200 hover:text-teal-300 transition-colors"
        >
          Vercel
        </a>
        .
      </p>
    </div>
  );
}
