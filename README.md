# Mariam Hegazy: Portfolio

Next.js 16 (App Router) · React 19 · TypeScript (strict) · Tailwind CSS 4 · Motion for React · zod · Resend (HTTP API).
Design source of truth: `docs/DESIGN_BRIEF.md`. Content inventory: `docs/PROJECT_CONTENT.md`.

## Run locally
```bash
npm install
cp .env.example .env.local      # optional; the site runs without it
npm run dev                     # http://localhost:3000
```
Production check: `npm run build && npm start`.

## Checks
| Command | Purpose |
|---|---|
| `npm run typecheck` | `tsc --noEmit` (strict) |
| `npm run lint` | ESLint (next core-web-vitals + typescript) |
| `npm run build` | Production build |
| `npm run test:contact` | Contact-form logic tests (validation, config, payload, rate limit) with a **mocked** provider: no email is sent |

## Where to edit content
- `lib/projects.ts`: case studies, landing-page gallery, More Projects. Unapproved items never render: set the `*Approved` flags and add images under `public/projects/...` to publish.
- `lib/content.ts`: about, experience, education, skills (draft copy, pending approval).
- `lib/site.ts`: name, email, links. **The phone number is intentionally not in the site.**
- `app/globals.css`: design tokens (`--color-accent` holds the teal; swap the palette there).
- `public/cv/Mariam-Hegazy-CV.pdf`: public CV copy with the phone number removed.

## Contact form: configuration (NOT yet tested end to end)
Server-side route `app/api/contact/route.ts` validates input (zod), enforces length limits, uses a honeypot and a per-instance rate limit, and sends via Resend with a fixed recipient. Required env vars (server only):
| Variable | Meaning |
|---|---|
| `RESEND_API_KEY` | Resend API key |
| `CONTACT_TO_EMAIL` | Fixed recipient inbox (**to be confirmed**) |
| `CONTACT_FROM_EMAIL` | Sender on a domain verified in Resend. Resend's test sender (`onboarding@resend.dev`) only delivers to the account owner's address |

Without them the API answers 503 with a safe message. Real delivery must be tested after configuring Resend (add DNS records for your domain, send a test message, confirm it arrives).
Rate limiting is in-memory, so per serverless instance. Add a shared store or CAPTCHA if spam appears.

## SEO / indexing
Indexing is **off by default** (`noindex`, `robots.txt` disallows). When approved and a domain exists, set `NEXT_PUBLIC_SITE_URL` and `NEXT_PUBLIC_ALLOW_INDEXING=true`. OG image and favicon are generated (`app/opengraph-image.tsx`, `app/icon.tsx`).

## Deploy
Not deployed. Vercel is the intended target: import the repo, add the env vars above, deploy only after approval.

## Remaining placeholders
See `docs/PROJECT_CONTENT.md` (approval queue). All project screenshots, live/repo links for TABLYA and Dental, all BrandsDeal and landing-page content, and final WebSTDY/FlyRank wording are pending.
