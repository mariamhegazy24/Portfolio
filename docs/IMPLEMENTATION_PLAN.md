# IMPLEMENTATION_PLAN.md (DRAFT — nothing installed, no repo modified)

## Decision log (approved by Mariam, 2026-10-12)
1. Nuzul excluded. Featured: TABLYA-APP, Dental Clinic Management System, BrandsDeal. Plus prominent Landing Pages gallery. Blog App, HR Management System and AI Chat Assistant in compact "More Projects". Todo-list out for now.
2. Landing pages: names and screenshots unpublished until each is approved.
3. TABLYA-APP: team ITI graduation project; my part = Admin role + landing page only. No invented features.
4. Dental: major case study, verified details only, else [NEEDS INPUT].
5. BrandsDeal: confidential; only explicitly approved screenshots/wording; no code, sensitive business info or private URLs.
6. Design: #242424, Aileron, oversized headings, monochrome, label-box nav, edge-to-edge imagery, restrained teal accent, responsive type.
7. Public email: mariamhegazy24@gmail.com. Downloadable CV without phone number.
8. Company work: ask before publishing any company-related screenshot or claim.
9. Workflow: progress without waiting for all answers; verify one project at a time; ask one question at a time.
10. No dependency installs or repo changes until the final plan is approved.

## Contradictions found in the first draft (all resolved above/in the docs)
| # | Conflict | Resolution |
|---|---|---|
| 1 | "More builds" vs. your "More Projects" | Renamed everywhere |
| 2 | Oversized type "bleeding off edges" vs. "never clipped on mobile" | Bleed only ≥1024px, decorative; mobile fully visible |
| 3 | Edge-to-edge imagery vs. my proposed thin frame | No frames |
| 4 | "Prominent gallery" vs. nothing publishable before approval | Build the gallery component now; ship only approved entries; unapproved entries are not rendered at all |
| 5 | Data model flagged only images as approved | Project names, summaries and links get `approved` flags too |
| 6 | CV says "full-featured food delivery system" vs. your Admin + landing-page role | Reword the CV bullet before it is published |
| 7 | CV says HR system "from scratch" vs. GitHub fork of a team repo | Compact card, "team project" wording until verified |
| 8 | Accent, email, Aileron listed as open/[CONFIRM] | Marked approved |
| 9 | Form recipient not stated (only the public email) | Still open: assumed same address |
| 10 | Dental CV vs. current description (Vite, Chakra UI, Firestore, Cloudinary missing from CV; "patient records"/"treatment tracking"/"real-time availability" unconfirmed) | Open: flagged in PROJECT_CONTENT |
| 11 | Earlier message approved the public email; latest message asks to confirm | Treated as provisional until Gate A |
| 12 | "More Projects" vs. "More Builds" wording | Working name "More Projects" |
| 13 | Teal "decided" earlier vs. "show me before finalizing" | Palette options A/B/C documented; not final |

## Data model sketch
`Project { slug, title, kind: 'case-study'|'gallery'|'more', summary, stack[], role, teamNote?, confidential, features[], images[{src,alt,w,h}], liveUrl?, repoUrl?, approval: { name, summary, images, links } }` — anything not approved is never rendered.

## Implementation checklist
**Gate A — before Phase 4 starts (Mariam approves the final plan)**
- [x] TABLYA = HomeMade Food Delivery (confirmed)
- [x] Hero: typography-led, no portrait (confirmed)
- [ ] Dental: repo/demo/screenshots to verify the feature table; resolve CV differences
- [ ] Palette option chosen (A/B/C/mono) and hero background (1/2/3)
- [ ] Public email + message recipient confirmed; sender domain decision
- [ ] Phone-free CV PDF supplied (and CV bullets reworded for TABLYA/Dental/HR)
- [ ] AI Chat Assistant: provider, demo, screenshots, contribution
- [ ] WebSTDY / FlyRank wording approved
- [ ] Landing-page list + approvals started
- [ ] BrandsDeal approval list started
- [ ] Final plan approved

**Phase 4 Foundation**
- [ ] Next.js App Router + strict TypeScript + Tailwind; `next/font/local` Aileron 400/700
- [ ] Tokens as CSS variables; lint, typecheck, build pass

**Phase 5 Visual** (each section ships only with approved content)
- [ ] Nav + label box, hero, About, Experience/Education, Skills (grouped)
- [ ] Dental case study (verified details; screenshots when supplied)
- [ ] TABLYA case study (Admin + landing page, team note)
- [ ] BrandsDeal (only approved items, confidentiality note)
- [ ] Landing Pages gallery (approved entries only)
- [ ] More Projects: Blog App (verified), HR (team wording), AI Chat Assistant (verified facts only)
- [ ] Contact + footer; mobile layouts intentionally designed 320–1920px

**Phase 6 Motion**
- [ ] Reveals, headline entrance, image mask reveals, one scroll-linked moment, progress optional
- [ ] Reduced-motion fallback verified; transform/opacity only; no sticky choreography on mobile

**Phase 7 Functionality**
- [ ] CV download (phone-free file), project links only when approved
- [ ] `/api/contact`: zod validation, limits, honeypot, rate limit, fixed recipient, Resend; all states
- [ ] DNS/sender verified; end-to-end send tested BEFORE claiming it works

**Phase 8 QA**
- [ ] Lighthouse; LCP ≤2.5s, INP ≤200ms, CLS ≤0.1 measured
- [ ] Keyboard, screen reader, contrast, WCAG 2.2 AA, no console/hydration errors
- [ ] Metadata, OG image, sitemap, robots, broken-link check
- [ ] Confidentiality sweep: no unapproved company content anywhere (including image alt text, filenames, metadata)

**Phase 9 Deploy**
- [ ] Vercel setup, env vars documented, README accurate; "deployed" only once actually done
