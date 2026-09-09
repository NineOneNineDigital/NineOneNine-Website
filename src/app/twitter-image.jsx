export const runtime = "edge";
export const alt = "NineOneNine — Software Development Studio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// biome-ignore lint/performance/noBarrelFile: Next.js requires this route entry point; both social images intentionally share one renderer.
export { default } from "./opengraph-image";
