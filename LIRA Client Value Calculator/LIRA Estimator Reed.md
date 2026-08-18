# LIRA Estimator Reed — Project Context Document
**For use when initializing a new Claude Project or chat session**
**Last updated: August 10, 2026**

---

## What This Is

The **LIRA Client Value Estimator** — a client-facing web tool for **Sage Consulting & Wealth Preservation** that projects a household's current-plan tax exposure against the **Legacy-IRA Plan™ (LIRA)** strategy, using Sage's real pricing inventory (survivorship and individual policy tables). Built as plain HTML/CSS/JS — no framework, no build step — so it can be deployed anywhere (GitHub Pages, the GoDaddy WordPress site, etc.) and edited by different team members file-by-file.

**Origin note:** the first version of this tool was prototyped inside an internal Claude "artifact" builder (a proprietary `x-dc` / `sc-if` / `sc-for` templating runtime — see `_legacy-dc-source/` in the repo). That runtime only works inside that builder's own bundler, so it is **not deployable as-is**. This project is the from-scratch, plain-web rebuild of that prototype: same calculation engine, same design tokens, same page flow — rewritten as vanilla HTML/CSS/JS so any team member can open a file and edit it directly.

---

## Live URLs

| File | URL | Password |
|---|---|---|
| Estimator | https://newenglandstandardrc-star.github.io/sage-reed-lira-estimator/ | coker2 |
| Analysis Request | https://newenglandstandardrc-star.github.io/sage-reed-lira-estimator/analysis-request.html | coker2 (shared session) |
| Math Audit | https://newenglandstandardrc-star.github.io/sage-reed-lira-estimator/lira-math-audit.html | coker2 (shared session) — click the lotus mark in the footer of either page to reach it |

**Repos:** there are currently **two** live copies while the team gets set up — keep this in mind so edits don't get made in one and lost in the other:
- `newenglandstandardrc-star/sage-reed-lira-estimator` — Robby's copy, `master` branch, Pages enabled
- `jkrreed/Sage_Consulting` — John Reed's copy, deployed at the repo root (`https://jkrreed.github.io/Sage_Consulting/`) — **this is a separate repo from the Sage Calculator**, despite sharing the `Sage_Consulting` name; John published the LIRA Estimator files into it directly

Longer-term, pick one of these as the canonical repo (or a brand-new one both of you push to) so there's a single source of truth. Push must be done manually from a local clone — see **How to Work on This** below.

---

## File Structure

```
LIRA-estimator/
├── index.html                 ← LIRA Estimator (intake → calculating → results)
├── analysis-request.html      ← "Request a formal analysis" lead form
├── lira-math-audit.html       ← internal math audit — every intermediate calculation, spelled out
├── css/
│   └── styles.css             ← all design tokens + component styles (one file, shared)
├── js/
│   ├── lira-model.js          ← projection engine + pricing tables (pure functions, no DOM)
│   ├── estimator.js           ← page controller for index.html
│   ├── analysis-request.js    ← page controller for analysis-request.html
│   ├── math-audit.js          ← page controller for lira-math-audit.html
│   ├── footer.js              ← shared disclaimer + "Sage Effect" footer bar
│   └── gate.js                ← shared password gate logic (see "Access Gate" below)
├── assets/
│   ├── sage-logo-full.png
│   └── sage-lotus-mark.png
├── LIRA Estimator Reed.md     ← this file
├── .gitignore
└── _legacy-dc-source/         ← original prototype (proprietary builder format) — reference only
```

`lira-model.js` is a plain ES module with no dependency on the browser DOM, so it can be unit-tested with Node directly (`node --check js/lira-model.js`, or `import()` it from a script) without spinning up the page.

---

## How It Works

**Screen 1 — Intake** (`index.html`, `#screen-intake`)
- Insureds: one or two (survivorship)
- Age / gender / health class per insured (55–75 single, 55–80 joint)
- Pre-tax retirement balance intended for heirs
- Assumed rate of return (0–12%, slider)
- Client state + heir state (drives income and estate tax rates)
- Total estate value today (drives estate-tax exemption math)
- Inputs are saved to `localStorage` (`lira_intake`) on submit so they carry over to the Analysis Request page and persist across visits.

**Screen 2 — Calculating** (`#screen-calc`)
- A seven-step animated checklist (`CALC_STEPS` in `estimator.js`) plays for ~4.3 seconds while the real calculation (`model.project()`) has already run instantly in the background. This is a pacing/trust device carried over from the prototype, not an actual processing delay — the model runs synchronously before the animation starts.

**Screen 3 — Results** (`#screen-results`)
- Headline: total tax erosion under current planning vs. the tax-free advantage to heirs under LIRA
- Net-to-heirs bar comparison
- Full comparison table (current planning vs. LIRA strategy)
- "How each path arrives there" — three cards: Current Plan A (distributions spent), Current Plan B (distributions saved), Legacy-IRA Plan™ (assets repositioned)
- Next steps: **Request a formal analysis** (→ `analysis-request.html`) and **Meet with our team** (→ Calendly link, set in `CONFIG.calendlyUrl` in `estimator.js`)
- Collapsible "For the advisor" panel spelling out every assumption in the model (life expectancy tables, RMD start age, income/estate tax treatment, discount/buyout math)

**Analysis Request page** (`analysis-request.html`)
- Reads the saved `lira_intake` from the estimator and shows a read-only summary strip
- Advisor + client contact fields, referral source, exemption already used, free-text notes
- On submit, shows a confirmation panel. **This is currently local-only** — see Open To-Do Items to wire it to a real destination (CRM, email, webhook, etc.) before this goes live for real leads.

**Math Audit page** (`lira-math-audit.html`)
- Internal-only companion to the estimator — reached by clicking the lotus mark in the footer of either the estimator or the Analysis Request page
- Reads `lira_audit_inp` (saved by `estimator.js` on every intake submit) and re-runs `model.project()` on the exact same inputs — no separate math lives here, it only formats what the engine already returns
- Seven sections: (1) inputs & derived assumptions, (2) policy pricing & trust buyout, (3) current-plan year-by-year trace, (4) LIRA residual year-by-year trace, (5) estate-tax detail by scenario, (6) net-to-heirs by scenario, (7) headline reconciliation — matching the client-facing headline figures back to their inputs
- If no inputs have been saved yet (e.g. opened in a fresh browser with nothing run in the estimator), it shows an empty-state message instead of blank tables

---

## The Calculation Engine (`lira-model.js`)

Ported verbatim from the prototype — this file did not need rewriting, only relocating, since it was already framework-free:

- `DB_TABLE` — individual-policy pricing: `[gender, age, health, discount, death benefit per $5,000,000 premium]`, ages 55–75
- `SURV_TABLE` — survivorship pricing (priced male/female), ages 55–80 in 5-year increments, bilinearly interpolated by `lookupSurvivorship()`
- `lifeExpectancyYears()` — SSA period life table, ages 55–80
- `rmdDivisor()` / `rmdStartAge()` — IRS Uniform Lifetime Table (2022+); SECURE 2.0 start age (73 or 75 by birth year)
- `STATE_RATES` / `STATE_NAMES` — approximate top marginal state income tax rates (2026)
- `FED_TOP_RATE` (37%), `FED_ESTATE_EXEMPTION` ($15M, 2026), `FED_ESTATE_RATE` (40%)
- `project(inp)` — the main entry point: runs the current-plan projection (RMDs spent vs. saved), the LIRA projection (policy pricing + trust buyout + residual account growth), and returns every intermediate figure the UI needs, plus a full year-by-year `trace`.

**Known pricing-data caveats (carried over from the prototype, not yet resolved):**
- Individual-policy figures are a rough actuarial sketch — **pending real carrier illustrations** (see Sage's June 2026 carrier data: M69 Super Preferred → 6.76x initial DB multiplier; F65 Standard → 6.15x)
- The model does not yet account for a **multi-year funding schedule** (the real carrier illustration used 4 annual premiums, not a single lump sum)
- M/M and F/F survivorship adjustments (×0.87 and ×1.09 vs. the M/F baseline) are approximations pending carrier confirmation

---

## Access Gate

Both pages open behind a full-screen password gate — same visual pattern as the Sage Calculator's gate, restyled with LIRA/Sage-green branding instead of the Calculator's gold. Password is **`coker2`** (same password as the Sage Calculator, for consistency — change it in `js/gate.js` if you want a different one).

- The overlay markup lives at the very top of `<body>` in both `index.html` and `analysis-request.html`, so it's part of the first paint — no flash of unprotected content before the gate appears.
- `js/gate.js` handles the password check. On a correct entry, it sets `sessionStorage.lira_gate_unlocked = "1"` and removes the overlay — so once unlocked, moving between the estimator and the Analysis Request page in the same browser session doesn't ask again. Closing the tab / browser clears it.
- This is a **client-side gate only** — same caveat as the Sage Calculator's gate. It stops casual access, not someone who reads the page source. Don't rely on it for anything genuinely sensitive.
- To change the password: edit `const PASSWORD = "coker2";` at the top of `js/gate.js`.

## Design System

Colors, type, and spacing are reproduced in `css/styles.css` from the **Sage Wealth Design System** (see `_legacy-dc-source/_ds/…/readme.md` for the full brand packet reference). Key rules if you're editing styles:

- **Fonts:** Cormorant Infant (serif, Light/300 only — never bold) for display type; Poppins for everything else. Loaded from Google Fonts CDN in `styles.css` — no self-hosted binaries yet.
- **Color hierarchy:** dark sage/black grounds → sage green identifies → light sage washes warm content → gold punctuates (rules only, never a fill) → grays structure → white breathes. Full token list at the top of `styles.css`.
- **Copy rules (compliance-sensitive):** no exclamation points, no urgency language, no unqualified "tax-free," no superlatives. Outcome language stays qualified ("designed to," "may help," "is intended to"). `Legacy-IRA Plan™` — hyphenated, ™ only, first use per page, then `LIRA`. The disclaimer footer text in `js/footer.js` (`DISCLAIMER_STANDARD`) is set **verbatim** per the brand packet — do not paraphrase; route any change through brand/compliance review.

---

## Open To-Do Items

### Immediate
- [ ] Wire `analysis-request.html`'s form submission to a real destination (CRM lead capture, email relay, or webhook) — it currently only flips a local confirmation panel
- [ ] Set the real Calendly URL in `CONFIG.calendlyUrl` (`js/estimator.js` and `js/analysis-request.js`) before launch
- [ ] Confirm `estateExemption` default ($15,000,000, 2026) against current law before each tax year
- [ ] Decide whether the Math Audit page should stay reachable by anyone who knows the gate password, or get an extra layer of access control before this goes to a wider team (it exposes full per-year RMD/estate-tax detail, not just the client-facing headline)

### Near-term
- [ ] Replace individual-policy sketch estimates in `lira-model.js` with real carrier illustration data
- [ ] Model the multi-year premium funding schedule instead of a single lump-sum buyout
- [ ] Self-host Cormorant Infant + Poppins instead of the Google Fonts CDN import, if brand wants it

### Eventually
- [ ] Embed as a WordPress HTML block on sageplanning.com (same pattern as the Sage Calculator project)
- [ ] Mobile layout pass (the comparison table and three-card "how each path arrives there" section are the tightest spots on narrow screens)

---

## How to Work on This

**One-time setup (new repo):**
1. Create a new, empty repo on GitHub — e.g. `sage-lira-estimator` (private, same as the Sage Calculator repo, if it should stay behind a login for now)
2. This project folder already has `git init` done locally with one commit. Connect it to the new GitHub repo:
   ```
   cd LIRA-estimator
   git remote add origin https://github.com/<your-org-or-user>/sage-lira-estimator.git
   git branch -M main
   git push -u origin main
   ```
   (or point GitHub Desktop at this folder and "Publish repository" — same workflow as the Sage Calculator project, just a brand-new repo instead of an existing one)
3. If you want GitHub Pages hosting: repo Settings → Pages → deploy from `main` / root

**Ongoing edits:**
1. Edit `index.html` / `analysis-request.html` / `css/styles.css` / `js/*.js` directly — no build step, no npm install
2. Preview locally with any static file server (`python3 -m http.server`, VS Code Live Server, etc.) — **don't open the HTML files directly via `file://`**, since the pages use ES module `<script type="module">` imports, which most browsers block from `file://` for CORS reasons
3. `git add` / `git commit` / `git push` (or GitHub Desktop)
4. If deploying to GitHub Pages: allow a few minutes for the CDN to catch up after a push (same caching delay as the Sage Calculator repo)

---

## Team Access

**GitHub repo:** new dedicated repo (see How to Work on This) — team members need to be added as collaborators in GitHub settings for push access
**This project:** add team members to the Claude Team workspace and share this Project so everyone has this context doc going forward

---

## Tech Stack

- Pure HTML/CSS/JavaScript (ES modules) — no frameworks, no npm, no build step
- Fonts: Cormorant Infant + Poppins (Google Fonts CDN)
- Data: `js/lira-model.js` — self-contained pricing tables and projection math, no external API
- Storage: `localStorage` only (`lira_intake`, `lira_audit_inp`) — no backend, no database
- Deployment target: GitHub Pages (or any static host / WordPress HTML block)

---

## Key People

- **Robby Coker** — builder, primary contact (also builds the separate Sage Calculator project)
- **John Reed** — Sage advisor (jreed@sageplanning.com)
- **Jason Kurchner** — Sage advisor (jkurchner@sageplanning.com)
- **Timothy S. Garrity** — Paragon Capital Partners (tgarrity@paragoncapitalpartners.com)

---

## Related Project

This is a **separate project** from the Sage Calculator (estate-tax-calculator.html / estate-tax-calculator-v2.html, `sage-calculator-v1` repo). They share a client (Sage Consulting & Wealth Preservation) and a design language, but different codebases, different repos, and different purposes — the Sage Calculator shows the government's total claim on wealth; this tool shows the LIRA strategy's projected offset. Keep them in separate Claude Projects to avoid cross-contaminating context.
