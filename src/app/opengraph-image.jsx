import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "NineOneNine — Software Development Studio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background:
            "radial-gradient(circle at 0% 100%, rgba(205,164,0,0.18) 0%, rgba(10,10,10,0) 55%), radial-gradient(circle at 100% 0%, rgba(205,164,0,0.08) 0%, rgba(10,10,10,0) 45%), #0a0a0a",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            fontSize: 18,
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.45)",
          }}
        >
          <div style={{ display: "flex", color: "#CDA400" }}>NineOneNine</div>
          <div style={{ display: "flex" }}>Raleigh, NC — Est. 2019</div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 108,
              fontWeight: 700,
              letterSpacing: "-0.04em",
              lineHeight: 1.05,
              color: "#ffffff",
            }}
          >
            We build software,
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 108,
              fontStyle: "italic",
              fontWeight: 400,
              letterSpacing: "-0.04em",
              lineHeight: 1.05,
              color: "#CDA400",
            }}
          >
            end to end.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 24,
              color: "rgba(255,255,255,0.55)",
              maxWidth: 760,
              lineHeight: 1.4,
            }}
          >
            Custom web applications, mobile apps, eCommerce, and APIs.
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 16,
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.35)",
            }}
          >
            nineoneninedigital.com
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
