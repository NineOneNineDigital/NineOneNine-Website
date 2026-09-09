import assert from "node:assert/strict";

// Run against `npm run start`, not a dev server, after dependency upgrades.
const origin = new URL(process.argv[2] || "http://127.0.0.1:3000");
const routes = [
  "/",
  "/services/web-development",
  "/services/mobile-app-development",
  "/services/ecommerce-development",
  "/work/bost-homes",
  "/work/grande-manor",
  "/work/mcmillan-design",
  "/work/dealer-lifts",
];
const heading = /<h1\b/g;
const htmlContentType = /text\/html/;
const pngContentType = /image\/png/;
const request = (route) =>
  fetch(new URL(route, origin), {
    redirect: "manual",
    signal: AbortSignal.timeout(30_000),
  });

await Promise.all(
  routes.map(async (route) => {
    const response = await request(route);
    assert.equal(response.status, 200, route);
    assert.match(response.headers.get("content-type"), htmlContentType);
    assert.equal((await response.text()).match(heading)?.length, 1, route);
  })
);

await Promise.all(
  ["work", "services"].flatMap((section) =>
    ["missing-page", "constructor", "__proto__"].map(async (slug) => {
      const route = `/${section}/${slug}`;
      const response = await request(route);
      assert.equal(response.status, 404, route);
      await response.arrayBuffer();
    })
  )
);

await Promise.all(
  ["/opengraph-image", "/twitter-image"].map(async (route) => {
    const response = await request(route);
    assert.equal(response.status, 200, route);
    assert.match(response.headers.get("content-type"), pngContentType);
    const png = Buffer.from(await response.arrayBuffer());
    assert.equal(png.subarray(0, 8).toString("hex"), "89504e470d0a1a0a", route);
    assert.equal(png.readUInt32BE(16), 1200, `${route} width`);
    assert.equal(png.readUInt32BE(20), 630, `${route} height`);
  })
);

const optimized = await request(
  "/_next/image?url=%2Fdealer-lifts-site.jpg&w=640&q=75"
);
assert.equal(optimized.status, 200, "Local portfolio image optimization");
assert.match(optimized.headers.get("content-type"), /^image\//);
assert.ok((await optimized.arrayBuffer()).byteLength > 0);
console.log(
  "Runtime checks passed: eight pages, six invalid routes, both social images, and portfolio image optimization."
);
