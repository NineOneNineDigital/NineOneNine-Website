# Follow-up plan: business evidence and search measurement

Created: September 9, 2026. Status: planned; owner information and Google account
setup are pending. This plan resumes from implementation commit `dc237a9` on
`main`. That commit was pushed to GitHub; production deployment and indexing
must be checked separately.

## Starting point

The site has eight indexable pages: the homepage, three services, and four
projects, including Dealer Lifts. Canonicals use the www domain, project and
service pages link to each other, and native FAQs render in the initial HTML.
Inquiry events and an optional Search Console verification tag are implemented.
Analytics reporting is not connected and no Search Console property is verified.

See [Search and measurement](search-and-measurement.md) for implementation details
and event names. Existing project pages describe verified public website context;
they do not yet include owner-confirmed delivery details or measured results.

## 1. Gather the owner inputs

These inputs can be collected in parallel. Missing content should not hold up
analytics setup, and account setup should not hold up verified content work.

| Workstream | Information needed from the business owner |
| --- | --- |
| Team | Public names, exact roles, a short approved biography, relevant experience, actual team structure, approved photos, and optional professional-profile links |
| Projects | Start with Dealer Lifts: original problem, agreed scope, NineOneNine's contribution, deliverables, timeline, and technologies actually used; then repeat for the other three projects |
| Results | Metric definition, before/after values, measurement periods, source evidence, and permission to publish; use concrete qualitative outcomes when reliable numbers do not exist |
| Testimonials | Exact approved quotation, attribution, client role/company, and permission to publish names/photos/logos; include a public review link when available |
| Business profiles | Official Google Business Profile, LinkedIn company page, GitHub organization, and other established profile URLs; confirm public business name, email, location/service area, and phone if one should be published |
| Google Analytics | Create the business-owned GA4 account/property and Web stream for `https://www.nineoneninedigital.com`; supply the public Measurement ID beginning with `G-` |
| Search Console | Create the URL-prefix property `https://www.nineoneninedigital.com/`; supply the HTML verification tag or its public content token |

Account sign-in, account terms, property creation, and verification confirmation
are owner actions. No account passwords or private customer data belong in this
repository. For results evidence, provide aggregates or a redacted report.

## 2. Connect analytics and Search Console

Recommended order: connect measurement first so it starts building a baseline
while the business content is assembled. GA4 is the proposed analytics service;
confirm the created account/property before installing its integration.

Engineering work:

- [ ] Check that `dc237a9` or a later commit deployed successfully and that the
      four project pages are reachable on the public www domain.
- [ ] Add the GA4 integration using the owner's Measurement ID and a documented
      environment setting. Keep local development and previews out of production
      reporting. Do not add Tag Manager unless the chosen setup needs it.
- [ ] Connect the existing `contact_click`, `form_start`, and `generate_lead`
      events to GA4. The current data-layer objects alone do not install GA4 or
      send its events; an adapter or tag configuration is required.
- [ ] Handle initial page views and Next.js client navigation without double
      counting. Avoid duplicate automatic form measurement alongside our events.
- [ ] Apply the owner's consent/privacy choices. Exclude form values and
      potentially sensitive URL query/hash values from transmitted data.
- [ ] Configure `generate_lead` as a key event in the property. Treat it as an
      inquiry, with actual client qualification recorded in a CRM or lead log.
- [ ] Set `GOOGLE_SITE_VERIFICATION` in deployment settings, rebuild and deploy,
      then have the owner complete verification in Search Console.
- [ ] Submit `https://www.nineoneninedigital.com/sitemap.xml` and inspect the
      homepage, Dealer Lifts, and the eCommerce service page. Confirm the selected
      canonical; request indexing where appropriate and review all eight URLs.

If the owner prefers a Domain property instead, use Google's supplied DNS record
to verify `nineoneninedigital.com`; the website meta tag is not used for that
method. Do not change unrelated DNS records.

Completion checks:

- [ ] Realtime/DebugView receives a page view and contact event from a controlled
      production test, with no duplicate events on navigation.
- [ ] An explicitly authorized test inquiry reaches Formspree and produces one
      `generate_lead` event. Failed submissions produce none. Delete or mark the
      test lead in the business workflow afterward.
- [ ] Search Console ownership is verified and the sitemap is accepted.
- [ ] Record initial indexing coverage, impressions, clicks, and inquiry counts;
      an indexing request is not proof that a page is indexed.

## 3. Publish verified people and business identity

- [ ] Add approved team information and images to the About section, accurately
      describing who clients work with and the team's experience.
- [ ] Add visible official business-profile links in About or the footer.
- [ ] Update `src/lib/site.js` with verified organization `sameAs` links and any
      confirmed public contact details. Personal profiles belong to the relevant
      person, not the organization's `sameAs` list.
- [ ] Keep visible facts and structured data consistent. Do not add placeholder
      people, inferred credentials, invented locations, or unverified ratings.
- [ ] Have the owner review names, roles, biographies, images, and links before
      publishing this new personal/business information.

Done when the owner-approved information is visible, links resolve to the right
business/people, and metadata contains the same facts.

## 4. Turn project overviews into evidence-backed case studies

Start with `/work/dealer-lifts`, then Bost Homes, Grande Manor, and McMillan Design.

- [ ] Expand `src/lib/projects-content.js` with the verified problem, scope,
      implementation, and outcomes. Extend the project page template only for
      sections supported by real content; omit empty sections.
- [ ] Add approved testimonials to relevant project pages and select a strong
      quotation for the homepage near the work or contact section.
- [ ] Label quantitative results with their measurement period and context.
      Distinguish observed changes from claims that our work caused the change.
- [ ] Use concrete qualitative results when numerical evidence is unavailable;
      never substitute invented percentages or praise.
- [ ] Preserve each project's live-site link, screenshot, and related services.
- [ ] Review all case-study claims and testimonial attributions with the owner.

Done when each published claim has a source or owner confirmation and any client
quotation has explicit publication permission. It is acceptable to finish one
verified case study first while leaving other pages as accurate overviews.

## 5. Release and evaluate

- [ ] Run `npm run build`, `npm run check:seo`, focused lint, and relevant browser
      checks. Check mobile layouts, FAQ keyboard operation, native form fallback,
      project links, and analytics success/error behavior.
- [ ] Commit and push the reviewed changes when authorized for that follow-up
      session. Verify production deployment, redirects, sitemap, and metadata.
- [ ] After the first week of reporting, check data collection and event counts.
- [ ] After roughly 30 days, compare queries, landing pages, inquiries, and
      qualified opportunities against the baseline. Allow for small sample sizes
      and indexing delays; do not promise a ranking or lead increase.

Known tooling issue: the legacy `npm run lint` command calls removed `next lint`.
Use the installed ESLint 9 flat configuration for focused checks; migrate the
repository-wide lint workflow as a separate task.

## Resume checklist

1. Read this plan and check GitHub/current working-tree state before editing.
2. Collect the Measurement ID, verification tag, and available business evidence.
3. Complete ready workstreams; leave unsupported facts unpublished.
4. Update these checkboxes with verified outcomes and any remaining dependencies.

No reminder or scheduled automation is created by this document.
