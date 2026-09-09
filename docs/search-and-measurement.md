# Search and inquiry measurement

## Implemented in the site

- `src/lib/site.js` owns the canonical `https://www.nineoneninedigital.com`
  origin and the shared business and website identities. The production host
  already redirects the apex domain to www; keep that redirect in hosting.
- The sitemap includes the homepage, three service pages, and four project pages.
  It deliberately omits `lastmod`: add per-page dates only when significant
  content updates are tracked. Rebuilding alone is not a content update.
- Project content lives in `src/lib/projects-content.js`. Client context and
  visible features were checked against the linked client websites. Quantified
  outcomes, original delivery scope, technologies, and testimonials must be
  confirmed by the project owner before adding them. These are project
  overviews, not measured outcome case studies yet.
- Native homepage FAQ disclosures retain their answers in the initial HTML and
  work without JavaScript. The no-script fallback also reveals animated content.
  The inquiry form uses a native POST fallback when JavaScript is unavailable.
- Robots allow crawling. Host/CDN bot access must also remain allowed; robots
  alone cannot prove that a crawler can reach the site.

## Verify before and after release

Run `npm run build` followed by `npm run check:seo`. The SEO check inspects the
actual static HTML, canonical URLs, JSON-LD, sitemap, FAQs, form method, and
project/service links. Browser checks should also cover FAQ keyboard controls,
no-JavaScript rendering, project images, invalid routes, and form failures/success.

After deployment, verify the apex domain permanently redirects to www with the
same path, validate representative URLs in Google's Rich Results Test, and use
Search Console URL Inspection to check the selected canonical and indexed page.
Local success does not establish that production has been crawled or indexed.

## Search Console activation (account access required)

1. Use the existing property if one exists. Otherwise, verify a Domain property
   for `nineoneninedigital.com` with Google's exact DNS token in your DNS provider.
   Alternatively use the `https://www.nineoneninedigital.com/` URL-prefix property:
   set `GOOGLE_SITE_VERIFICATION` to the supplied public meta verification token
   in deployment settings, rebuild, deploy, then complete verification in Google.
2. Submit `https://www.nineoneninedigital.com/sitemap.xml`.
3. Inspect the homepage, three services, and four projects. Request indexing after
   release if needed. Check indexing exclusions and Google-selected canonicals.
4. Establish a baseline of impressions, clicks, queries, landing pages, and device
   categories; review against inquiries and qualified opportunities over time.

No Search Console property has been created, verified, or submitted by these code
changes. Verification tokens are public; no account password belongs in the repo.

## Inquiry event contract (provider connection required)

`src/lib/measurement.js` adds events to `window.dataLayer` and dispatches the
`nineonenine:measurement` browser event. It does not load an analytics service,
set cookies, or send reports. Connect the owner's selected analytics provider
and its consent handling before expecting a dashboard. Do not enable automatic
form-field collection or send inquiry details to analytics.

| Event | Trigger | Count interpretation |
| --- | --- | --- |
| `contact_click` | Link to the homepage contact section | Interest, not a lead |
| `form_start` | First input in an inquiry form | One per mounted form |
| `generate_lead` | Formspree reports a successful submission | One per mounted form; no event for failure |

Payload fields are `event`, `page_path` (without query string or hash), and
`source` (section identifier or `contact_form`). No name, email, website field,
message, or raw referrer is collected. Events stay in page memory until a
provider is connected. Native no-JavaScript submissions bypass these browser
events; Formspree's received submissions remain the delivery record.

For a provider such as Google Tag Manager, configure custom-event triggers using
these event names and map only the documented fields to the destination. Mark
`generate_lead` as a conversion/key event, then verify one event per successful
submission. Compare received inquiries with business-qualified opportunities in
your CRM or lead log; `generate_lead` alone does not mean a qualified client.

## Owner-supplied evidence still needed

- Team names, roles, biographies, and approved photographs.
- Verified business-profile URLs to display and connect with schema `sameAs`.
- Approved client testimonials and documented outcomes for each project.
- Confirmed project scope and delivery details beyond the public website.
- Analytics provider/account information and Search Console access or token.

Add business facts to visible content and schema together. Do not invent review
ratings, locations, results, or credentials to fill these gaps.

References: [Google AI search guidance](https://developers.google.com/search/docs/appearance/ai-features),
[canonical URLs](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls),
[sitemaps](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap),
[Search Console](https://developers.google.com/search/docs/monitor-debug/search-console-start).
