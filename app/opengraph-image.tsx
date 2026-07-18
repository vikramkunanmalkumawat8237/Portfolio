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
          background: "#FBF1EC",
          backgroundImage:
            "linear-gradient(to right, rgba(31,58,95,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(31,58,95,0.06) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 10, height: 10, borderRadius: 999, background: "#B76E79" }} />
          <span style={{ color: "#B76E79", fontSize: 20, letterSpacing: 4, fontFamily: "monospace" }}>
            ACCT / 001 — AVAILABLE FOR OPPORTUNITIES
          </span>
        </div>
        <div style={{ display: "flex", fontSize: 88, fontWeight: 700, color: "#1F3A5F", marginTop: 28 }}>
          {profile.name}
        </div>
        <div style={{ display: "flex", fontSize: 34, color: "#4A6483", marginTop: 16 }}>
          {profile.headline} · {profile.subHeadline}
        </div>
      </div>
    ),
    { ...size }
  );
}
