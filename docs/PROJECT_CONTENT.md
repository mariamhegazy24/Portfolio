# PROJECT_CONTENT.md — Project inventory & asset register (rev. 3)

Legend: **[VERIFIED]** seen in a source I inspected · **[STATED]** told to me by Mariam, no independent evidence yet · **[NEEDS INPUT]** missing · **[CONFIRM]** conflict or doubt · **[CONFIDENTIAL]** needs explicit approval first.
Sources inspected: CV PDF, Canva PDF, public GitHub profile, `react-project` repo, `Ai-Chat-Assistant` repo.
NOT inspectable: the old portfolio (JS-rendered; only a page title came back). It is a **content reference only**; the new design follows the Canva reference. Nothing from it is assumed.
Excluded by Mariam: **Nuzul** (never featured), **Todo-list** (out for now).

## Page-level structure
A) Featured case studies: TABLYA-APP · Dental Clinic Management System · BrandsDeal
B) Landing Pages gallery (prominent, image-led; approved entries only)
C) More Projects (compact): Blog App · HR Management System · AI Chat Assistant
(Section label: "More Projects" is the working name; you also wrote "More Builds". Either is a one-line change.)

## A1. TABLYA-APP — ITI graduation team project
- Same project as CV "HomeMade Food Delivery App" [STATED, confirmed]. Use one name; suggest "TABLYA — HomeMade Food Delivery" [CONFIRM].
- Stack [STATED]: React, React Native, Redux Toolkit, Chakra UI, Supabase. (CV additionally lists JavaScript.) Platforms: web + mobile (CV).
- My contribution [STATED, final wording]: **Admin role and landing page** within a team project. Nothing else may be attributed to me.
- Exact features I implemented: [NEEDS INPUT] · Screenshots: [NEEDS INPUT] · Live demo: [NEEDS INPUT] · Repo: [NEEDS INPUT] · Team size/roles: [NEEDS INPUT]
- [CONFIRM] CV bullets describe the whole app ("Developed a full-featured food delivery system..."). Reword the CV to say what you built before it is published as the downloadable file.

## A2. Dental Clinic Management System — personal project
Evidence status: **no repo, demo or screenshot inspected yet.** Everything below comes from you or the CV.
| Item | CV | Your description now | Status |
|---|---|---|---|
| Type | personal | personal | consistent |
| Language/UI | React, TypeScript | React, TypeScript, Vite, Chakra UI | CV omits Vite, Chakra UI |
| State/data | Redux Toolkit | RTK Query | [CONFIRM] RTK Query is part of Redux Toolkit; is any plain RTK slice state used too? |
| Backend | Firebase Authentication | Firebase Auth + Firestore | CV omits Firestore |
| Media | not mentioned | Cloudinary | CV omits it |
| Features | patient records, appointments, treatment tracking, booking with **real-time availability updates** | appointment booking, **doctor dashboard**, dental case/treatment presentation | [CONFIRM] "patient records", "treatment tracking" and "real-time availability" are not in your current description. They may overstate. "Doctor dashboard" and "case presentation" are not on the CV |
- Rule: publish only what you confirm is implemented now. Anything partial gets honest wording ("in progress") or is left out.
- Proposed CV rewrite after confirmation: align the bullets with the table's right-hand column.
- Screenshots, live URL, repo URL, challenges/decisions (e.g. availability handling, Firestore structure): [NEEDS INPUT]

## A3. BrandsDeal — company e-commerce project [CONFIDENTIAL]
- Frontend stack [STATED]: Nuxt, TypeScript, Nuxt UI, TanStack Vue Query, Pinia, i18n, API integration. (Never labelled Next.js.)
- Employer/engagement: [NEEDS INPUT] · My exact responsibilities: [NEEDS INPUT] · Team/company scope: [NEEDS INPUT]
- Approved screenshots: none · Approved descriptions: none · Live URL: none approved
- Hard rules: no source code, no private repo links, no internal data/dashboards, no unapproved URL, no sensitive business info. Each screenshot and sentence goes through your approval list below before it can render.
- Proposed generic framing (NOT approved): "E-commerce frontend built in a company setting. Nuxt + TypeScript." Nothing more until you approve.

## B. Landing Pages gallery
- Entries: [NEEDS INPUT] (count, which are public, which names may appear).
- Per entry fields: public name OR "Client project — name withheld" · one-line purpose · confirmed stack · my role · approved screenshots (desktop + mobile) · live URL only if public and approved · approval status (name / screenshots / copy).
- Rule: nothing renders until approved. Name approved but not screenshots, or the reverse, is handled per field.

## C1. Blog App
- [VERIFIED, README] React (Vite), Tailwind CSS, DaisyUI, json-server + json-server-auth, React Hooks, fetch/axios. Create/edit/delete posts, publish/unpublish, login/register.
- Live: react-project-five-henna.vercel.app (listed in README; not opened) · Repo: github.com/mariamhegazy24/react-project (public) · Demo video link in README.
- Backend is simulated (json-server): say so. Screenshots: [NEEDS INPUT]. My role: individual project per GitHub ownership [CONFIRM].

## C2. HR Management System — team ITI project
- [VERIFIED, GitHub] Fork of Atef-mohamed/ITI-Client-Side-Project. Description: HTML5, CSS3, JavaScript, Bootstrap frontend; attendance captured by Security, employee permission requests, manager/HR approvals, task management with salary impact.
- Wording: "team ITI project". Do NOT say built alone or from scratch. My specific contribution: [NEEDS INPUT]. Demo: [NEEDS INPUT]. Screenshots: [NEEDS INPUT].

## C3. AI Chat Assistant (ChatGPT-style) — NEW, evidence reviewed
Source: public repo github.com/mariamhegazy24/Ai-Chat-Assistant (not a fork; 3 commits; 0 stars/forks; no releases). Old portfolio could not be opened, so no demo or screenshots were seen.
- [VERIFIED, README + file tree] React (Vite config present), Chakra UI, an Express server (`server/` folder). README features: chat with an AI model, clean responsive UI, fast response rendering, API key kept in a `.env` (server-side), works on desktop and mobile.
- [CONFIRM] AI provider: README says "OpenAI API (or any AI model you use)" and the `.env` example is `OPENAI_API_KEY`. Which provider is actually wired in `server/`?
- [CONFIRM] README is template-like. Not verified: streaming responses, message history/persistence, markdown rendering, error handling, auth. None of these may be claimed.
- Live demo: none found [NEEDS INPUT] · Screenshots: [NEEDS INPUT] · My contribution: author listed as Mariam Hegazy; solo? [CONFIRM] · Deployment of the Express backend (needed for a public demo): [NEEDS INPUT]
- Recommendation: **More Projects, compact.** Reasoning: small repo (3 commits), no demo or visuals yet. It earns more prominence only if a working demo plus screenshots exist and you can explain what you built (e.g., how the Express layer proxies the AI API and keeps the key off the client).

## Experience wording (all PENDING your approval; nothing published)
- WebSTDY — Frontend Developer, full-time on-site, Cairo, 02/2026–09/2026. Proposed general text: "Frontend development on web projects with a team, using Git/GitHub." No client or product details.
- FlyRank AI — Front-end AI Engineer Intern, remote, 07/2026–present. Proposed general text: "Internship focused on front-end work in an AI-related product." No proprietary detail. [NEEDS INPUT] approve or edit.
- ITI Intensive Code Camp (Mansoura) 07/2025–12/2025; B.D.S. Mansoura University 2016–2021; General Dentist 2022–2024.

## Approval queue (nothing below may render until approved)
| Item | Status |
|---|---|
| BrandsDeal screenshots + wording | Awaiting |
| Each landing page name / screenshots / copy | Awaiting |
| WebSTDY + FlyRank wording | Awaiting |
| Dental feature list (final) | Awaiting |
| TABLYA contribution details | Awaiting |
| HR contribution wording | Awaiting |
| AI Chat Assistant AI provider, demo, screenshots | Awaiting |
| Public CV file (no phone) | Awaiting file |

## Asset conventions
`public/projects/<slug>/<slug>-<view>-<w>x<h>.webp`, alt text recorded in typed data. Missing assets are omitted, never replaced with stock or placeholders. Check filenames and alt text for confidential names too.

## Rev 4: data received (screenshots + landing-page links)
- Screenshots supplied for BrandsDeal, Dental, Tablya, AI Chat Assistant, Hotel System and StdyStore. BrandsDeal: company URL visible in the mobile address bars was **masked** before use; no links published for it.
- Tablya: description rewritten per Mariam (no "ITI graduation project", no "mobile", no team wording). Role line stays exact: admin role + landing page. The overview image also shows customer/cook screens beyond that role: needs her confirmation.
- Dental: feature list updated from what is visible in the screenshot (to be confirmed). Video: place `public/projects/dental-clinic/dental-clinic-demo.mp4`; it renders automatically.
- Landing pages approved for publishing: Hotel System (nuzul-self.vercel.app) and StdyStore (stdystore.vercel.app). Stack still [NEEDS INPUT]. The Hotel System page's own title says "Nuzul": conflicts with the earlier "exclude Nuzul" instruction, to be confirmed.

- Decision (Mariam): the landing page is published under its real name, **Nuzul**. This supersedes the earlier "exclude Nuzul" instruction for the landing-page gallery.

## Rev 5 (Mariam's answers)
- BrandsDeal: role = frontend developer (approved wording; stack incl. i18n and API integration). No links.
- Tablya: React Native removed from the stack; image NOT cropped; my work = full admin dashboard (chef requests, orders, KPIs, tickets) + landing page.
- Dentistry background no longer mentioned in hero, about, experience or the Dental project scope. Education (B.D.S.) still listed: pending her decision. CV file and the Dental screenshot ("Developed by a Former Dentist") still mention it.
- Contact form: no domain; plan is Resend test sender (`onboarding@resend.dev`) delivering to the Resend account email.
