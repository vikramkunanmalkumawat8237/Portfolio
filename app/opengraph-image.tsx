import { ImageResponse } from "next/og";
import { profile } from "@/lib/data";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${profile.name} — ${profile.headline}`;

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#08090A",
          backgroundImage:
            "linear-gradient(to right, rgba(242,244,241,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(242,244,241,0.06) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 10, height: 10, borderRadius: 999, background: "#13B27F" }} />
          <span style={{ color: "#13B27F", fontSize: 20, letterSpacing: 4, fontFamily: "monospace" }}>
            ACCT / 001 — AVAILABLE FOR OPPORTUNITIES
          </span>
        </div>
        <div style={{ display: "flex", fontSize: 88, fontWeight: 700, color: "#F2F4F1", marginTop: 28 }}>
          {profile.name}
        </div>
        <div style={{ display: "flex", fontSize: 34, color: "#8B938E", marginTop: 16 }}>
          {profile.headline} · {profile.subHeadline}
        </div>
      </div>
    ),
    { ...size }
  );
}
