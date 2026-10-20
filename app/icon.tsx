import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", background: "#242424", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ width: 44, height: 44, background: "#eaeaea", color: "#242424", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 30, fontWeight: 700 }}>M</div>
      </div>
    ),
    size,
  );
}
