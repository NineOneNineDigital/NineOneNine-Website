import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

// Check the actual prerendered output after `npm run build`, without a browser
// or network connection. These are public routes expected to remain indexable.
const origin = "https://www.nineoneninedigital.com";
const routes = [
  "/", "/services/web-development", "/services/mobile-app-development",
  "/services/ecommerce-development", "/work/bost-homes", "/work/grande-manor",
  "/work/mcmillan-design", "/work/dealer-lifts",
];
const readOutput = (name) => readFile(new URL(`../.next/server/app/${name}`, import.meta.url), "utf8");
const pages = new Map();

for (const route of routes) {
  const html = await readOutput(route === "/" ? "index.html" : `${route.slice(1)}.html`);
  pages.set(route, html);
  const canonical = html.match(/<link\b[^>]*rel="canonical"[^>]*href="([^"]+)"/);
  assert.ok(canonical, `Missing canonical: ${route}`);
  assert.equal(canonical[1].replace(/\/$/, ""), `${origin}${route}`.replace(/\/$/, ""));
  assert.match(html, /<title>[^<]+<\/title>/, `Missing title: ${route}`);
  assert.match(html, /<meta name="description" content="[^"]+"/, `Missing description: ${route}`);
  assert.doesNotMatch(html, /<meta name="robots" content="[^"]*noindex/, `Unexpected noindex: ${route}`);
  assert.equal((html.match(/<h1\b/g) || []).length, 1, `Expected one h1: ${route}`);

  const schemas = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)]
    .map((match) => JSON.parse(match[1]));
  const nodes = schemas.flatMap((schema) => schema["@graph"] || [schema]);
  assert.equal(nodes.filter((node) => node["@id"] === `${origin}/#business`).length, 1, `Business identity: ${route}`);
  assert.ok(nodes.some((node) => node["@type"] === "WebSite"), `Website identity: ${route}`);
  assert.ok(nodes.some((node) => ["WebPage", "Service"].includes(node["@type"])), `Page identity: ${route}`);
  if (route !== "/") assert.ok(nodes.some((node) => node["@type"] === "BreadcrumbList"));
  assert.doesNotMatch(JSON.stringify(schemas), /https:\/\/nineoneninedigital\.com/, `Old domain in schema: ${route}`);
}

const sitemap = await readOutput("sitemap.xml.body");
const urls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => match[1].replace(/\/$/, ""));
assert.deepEqual(urls.sort(), routes.map((route) => `${origin}${route}`.replace(/\/$/, "")).sort());
assert.doesNotMatch(sitemap, /<lastmod>/, "Do not add generated freshness dates");
assert.match(await readOutput("robots.txt.body"), /User-Agent: \*\nAllow: \/\n/);
assert.ok((await readOutput("robots.txt.body")).includes(`Sitemap: ${origin}/sitemap.xml`));

const home = pages.get("/");
const details = [...home.matchAll(/<details\b[\s\S]*?<\/details>/g)].map((match) => match[0]);
assert.equal(details.length, 5, "Homepage questions must remain native, prerendered disclosures");
assert.ok(details.some((text) => text.includes("Most websites take")), "FAQ answer missing from HTML");
assert.match(home, /<form[^>]*action="https:\/\/formspree.io\/f\/mreypprw"[^>]*method="POST"/i, "No-JS inquiries must POST");
for (const route of routes.filter((route) => route.startsWith("/work/"))) {
  assert.ok(home.includes(`href="${route}"`), `Project orphaned: ${route}`);
}
assert.ok(pages.get("/services/ecommerce-development").includes('href="/work/dealer-lifts"'));
assert.ok(pages.get("/work/dealer-lifts").includes('href="/services/ecommerce-development"'));
console.log(`SEO checks passed: ${routes.length} indexable pages, canonicals, schema, sitemap, native FAQs, project links, and form fallback.`);
