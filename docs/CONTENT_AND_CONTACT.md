# CONTENT_AND_CONTACT.md — Approved copy & contact configuration

## Positioning (DRAFT — not approved)
Target: Frontend Developer / Junior Frontend Developer. Pivoted from dentistry (BDS 2021, practiced 2022–2024) into frontend via ITI. Headline/intro copy: [NEEDS INPUT — will draft 2 options after approval]. WebSTDY and FlyRank wording: general only, pending approval (see PROJECT_CONTENT). Rule: no invented metrics, clients or experience levels.

## Public information
| Item | Value | Status |
|---|---|---|
| Name | Mariam Hegazy | CV |
| Location | Cairo, Egypt | CV |
| Public email (display) | mariamhegazy24@gmail.com | Provisional: approved in an earlier message, but your latest message asks to confirm the final public address and the message recipient before the form is configured |
| Contact-form recipient | [NEEDS INPUT] (assumed same as public email, unconfirmed) | env var `CONTACT_TO_EMAIL` |
| Phone | **Not shown** | decided |
| LinkedIn | linkedin.com/in/mariam-hegazy-a12051358 | CV |
| GitHub | github.com/mariamhegazy24 | CV |
| Public CV file | [NEEDS INPUT] phone-free PDF from Mariam | decided: must not contain the phone number (current CV does) |

## Contact form architecture (not built)
Next.js Route Handler `POST /api/contact`; server-side validation (zod), length limits, honeypot + IP rate limit, fixed recipient from env, Resend sender on a verified domain, visitor email only as `reply-to`. Env vars (server only): `RESEND_API_KEY`, `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL`. Sender domain/DNS (SPF/DKIM): [NEEDS INPUT] (no custom domain confirmed) — until then Resend's test sender can only deliver to the account owner's email. Delivery not tested.

## Language
English first. Arabic version: out of scope for v1.
