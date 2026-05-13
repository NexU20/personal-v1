import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/seo";

// Avoid the Windows-specific next/og Node runtime path bug during build.
export const runtime = "edge";
export const alt = `${siteConfig.author} portfolio preview`;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          position: "relative",
          overflow: "hidden",
          background: "#0f172a",
          color: "#f8fafc",
          padding: "72px",
          fontFamily: "Inter, Arial, sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(135deg, rgba(20,184,166,0.25), transparent 38%), linear-gradient(315deg, rgba(59,130,246,0.2), transparent 36%)",
          }}
        />
        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            gap: "28px",
          }}
        >
          <div
            style={{
              width: "96px",
              height: "6px",
              borderRadius: "999px",
              background: "#2dd4bf",
            }}
          />
          <h1
            style={{
              margin: 0,
              fontSize: "88px",
              lineHeight: 1,
              fontWeight: 800,
              letterSpacing: 0,
            }}
          >
            Lindan Akbar
          </h1>
          <p
            style={{
              margin: 0,
              maxWidth: "860px",
              color: "#cbd5e1",
              fontSize: "36px",
              lineHeight: 1.25,
              fontWeight: 500,
            }}
          >
            Front End Engineer and CTF Player building accessible, performant
            web experiences.
          </p>
        </div>
        <div
          style={{
            position: "relative",
            display: "flex",
            gap: "16px",
            color: "#99f6e4",
            fontSize: "26px",
            fontWeight: 700,
          }}
        >
          <span>React</span>
          <span>Next.js</span>
          <span>Tailwind CSS</span>
          <span>Web Security</span>
        </div>
      </div>
    ),
    size
  );
}
