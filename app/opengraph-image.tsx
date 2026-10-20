import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = `${site.name}, ${site.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", background: "#242424", color: "#eaeaea", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: 64 }}>
        <div style={{ display: "flex" }}>
          <div style={{ background: "#eaeaea", color: "#242424", padding: "10px 22px", fontSize: 32, fontWeight: 700 }}>{site.name}</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", fontSize: 190, fontWeight: 700, lineHeight: 0.86, letterSpacing: -10 }}>
          <span>Frontend</span>
          <span>Developer</span>
        </div>
        <div style={{ height: 6, background: "#2db8a6", width: "100%" }} />
      </div>
    ),
    size,
  );
}
