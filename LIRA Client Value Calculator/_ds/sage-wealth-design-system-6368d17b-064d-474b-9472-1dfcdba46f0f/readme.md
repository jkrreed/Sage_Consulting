# Sage Wealth Design System

The brand and UI system for **Sage Consulting & Wealth Preservation, Inc.** — a fully remote, nationally operating wealth-preservation firm serving ultra- and high-net-worth families and the advisory teams (CPAs, estate attorneys, financial advisors, BGAs) around them. Flagship strategy: the **Legacy-IRA Plan™ (LIRA)**.

This system exists to produce on-brand, compliance-safe campaign collateral — one-pagers, webinar decks, landing pages, emails, conference materials — for the **Advisor's Edge** Q2 2026 campaign and beyond.

> **Brand personality:** A senior partner who happens to also be a gifted teacher — technically precise, compliance-aware, deeply knowledgeable, never condescending, never salesy. *When in doubt, restrain. When in doubt, qualify the claim.*

---

## Sources

This system was built from the **Claude Design Handoff Packet — Q2 2026 Campaign Assets** (Sage Brand & Compliance Review, June 30 2026). That packet is the authoritative spec for color, type, page architecture, voice, and compliance.

The supporting reference docs are now present in **`uploads/`** and corroborate the system (the `brand-voice-guidelines.md` v1.0 verifies the exact palette, the Cormorant Infant / Poppins fonts, page architecture, and voice rules used here):
`brand-voice-guidelines.md` · `Sage-Claude-Design-Packet.md` · `SAGE-Hiroshige-Illustration-Brief.md` · `SAGE-LIRA-Client-Facing-Review.md` · `SAGE-LIRA-Client-Facing-Language-Edits.md` · `Sage-Our-Commitment.md` · `Sage-Our-Proven-Process.md` · `Tax-Erosion-Slide-Rewrite.md`, plus the official logo (`Sage-Logo.png`, integrated into `assets/`).

No codebase or Figma file was provided — the visual system is reconstructed from the packet's verified specs (§4) and the supporting docs.

---

## ⚠️ Caveats / open asks (see also §11 of the packet)

- **Logo:** the official artwork is in place (`assets/sage-logo-full.png` lockup, `assets/sage-lotus-mark.png` mark, cropped from the supplied file). It's full-color on transparency; on very dark grounds the white keylines hold the shape but a dedicated **reversed / mono ("mint") version is still recommended** — please supply if available.
- **Fonts load from Google Fonts CDN**, not self-hosted binaries. Cormorant Infant + Poppins are both on Google Fonts and match the spec. Supply licensed binaries to self-host (the compiler reports 0 fonts because the `@font-face` rules live in Google's remote CSS).
- **Hiroshige art panels are gradient placeholders.** The deep-sage gradient stands in for the commissioned illustration. Do not begin illustration production until `SAGE-Hiroshige-Illustration-Brief.md` is reviewed.
- **Do not set, pending compliance:** the 3x–10x multiplier claim, the full "Sage Effect → tax-free family wealth" sentence, any unqualified "tax-free," testimonials, named-competitor comparisons (packet §11, §6).

---

## CONTENT FUNDAMENTALS — how Sage writes

**Voice (constant across audiences):** Authoritative · Collaborative · Clear · Calm & Confident · Protective · Precise · Warm.
**Never:** Arrogant · Competitive · Simplistic · Aggressive · Paternalistic · Vague · Casual.

**Person & address.** Speaks to the reader as **"you,"** Sage as **"we."** Advisor/BGA pieces use parallel "Your role / our role" framing. Clients are addressed warmly and plainly; the family is always the subject behind the numbers ("Behind every financial model is a family").

**Casing.** Titles in serif sentence/title case. Section labels and eyebrows in **spaced UPPERCASE** (tracking 200–300%). Email subject lines are lowercase or sentence case — **never all caps**.

**Punctuation & tone rules (hard constraints):**
- **No exclamation points.** Anywhere. Ever.
- No urgency: no "limited time," "act now," "spots filling fast," countdown timers.
- No fear callouts ("70% LOST!", "TAX BOMB!"). The 70% statistic is a *calm problem frame*, presented with context.
- No superlatives ("the best," "the only," "revolutionary").

**Outcome language is always qualified.** Use "designed to," "may help," "seek to," "is intended to," "your heirs may receive." Never "will," "guarantees," "ensures," "eliminates," "saves you," or unqualified "tax-free."

**Required terminology.** `Legacy-IRA Plan™` (™ only — never ® or ©, hyphenated, first use per page), then `LIRA`. `Sage Consulting & Wealth Preservation` on formal first use (never "Sage Planning"). "advisory team / referring advisor" (never "your agent / your broker"). Tagline `PROTECT MAINTAIN ENHANCE` — three words, that order, no substitution.

**Emoji:** never. **Tone of voice in display copy** — example approved lines:
- *"You control the relationship. We control the complexity."*
- *"We do not replace advisors. We make them more powerful."*
- *"No sales pressure — only clarity."*
- *"Seamless. Sophisticated. Calm."*

See the full pre-approved copy library in the packet §7 (problem/solution statements, six-step process, three variants, the two-column framework, disclaimer footers) — set these **verbatim**; flag back to brand review rather than paraphrasing.

---

## VISUAL FOUNDATIONS

**The feeling:** Heritage. Nature. Calm authority. Permanence. Craftsmanship. The system is restrained *on purpose* — white space is deliberate, the voice is quiet, nothing shouts. "The work that earns their trust looks like something they would already trust."

**Color** (`tokens/colors.css`). Hierarchy rule: **Dark sage/black grounds. Primary green identifies. Light sage washes warm. Gold punctuates. Grays structure. White breathes.**
- *Sage Black* `#201F1E` (warm near-black, brown undertone) — dark covers, footers, body text.
- *Sage Green* `#97B37E` — the signature accent, tied to the name; logo, process circles, eyebrows.
- *Deep Sage* `#4E583F → #3A4233` — a top-to-bottom gradient for Hiroshige sidebar art panels.
- *Sage Wash* `#EAF2DA` and its pale siblings — light content fills, comparison "after" panels.
- *Gold* `#B3A87D` — **punctuation only**: thin decorative rules and corner marks, one or two per page; never a fill.
- Structural grays (`#B3B3BD` silver header bar, `#F2F2F5` ice-gray panels, `#DFDEE1` dividers, `#868584` secondary text) and whites (`#FFFFFF`, `#FAFFF8` sage-tinted).
- **Avoid:** bright/saturated colors, blue tones (except cool-cast structural grays), gradients outside the sage range.

**Typography** (`tokens/typography.css`). Two families only.
- *Cormorant Infant* (**Light, 300, only — never bold**) — cover titles, section headers, pull-quotes (italic variant). Authority comes from layout and spacing, not weight.
- *Poppins* — Regular for body/bullets/tables/disclaimers, Light for subtitles and secondary labels.
- Section labels: spaced uppercase, tracking 200–300%.
- *Do not use:* Playfair Display, Gotham, Oswald, Tinos, Inter (appeared in old docs; not the production fonts).

**Spacing & layout** (`tokens/spacing.css`). 4px base scale; generous margins (~48px). Three cover templates — **Type A** dark full-bleed (macro pieces), **Type B** split-panel (single-page collateral: art panel left ~20%, dark header bar top ~15%, content right, Sage Effect footer ~15%), **Type C** white/minimal (multi-page decks). Interior pages use a cool-silver header bar + white content + sage section dividers + ice-gray panels. **Pick one cover type per asset — never mix.**

**Backgrounds.** Flat grounds — solid Sage Black, white, or sage wash. The only "imagery" is the Hiroshige woodblock art panel (sage-green botanical/landscape) and the deep-sage gradient that stands in for it. No stock photography, no clip art, no decorative gradients outside the sage range.

**Borders, radii, shadows.** Near-square corners (`2–4px`); the **process-flow circles are the only fully round element** (`999px`). Borders are thin hairlines (`1px`, dove-gray or sage-medium). **Elevation is minimal** — the brand favors flat grounds and crisp dividers over shadow; cards/panels are flat or carry at most a whisper shadow. Comparison/callout panels use an ice-gray or sage-wash fill, optionally with a 3px sage-green left keyline.

**Motion & states.** Calm and minimal. **No animated slide transitions** in decks (webinar rule: no clicks-per-line). Where interactive (web), hovers are gentle (~160ms ease) color/background shifts — no bounce, no scale-pop, no urgency motion. Focus states use a sage-green border. Press states stay subtle.

**Decorative devices** (built as components): gold rule with lotus end-caps (covers only); the "THE SAGE EFFECT" dark footer bar (one-pager signature); numbered sage-green process circles; before/after "REPLACED WITH →" comparison; the "What You Do / What Sage Does" two-column framework.

**Imagery color vibe:** warm, muted, heritage — sage greens, charcoal, cream/ivory, gold accents. Calm and naturalistic, never bright or cool.

---

## ICONOGRAPHY

Sage's brand is **near-iconless by design** — quiet authority is carried by type, space, and the botanical lotus mark, not an icon set. No icon font, sprite, or icon library was supplied or implied by the packet.

- **The lotus mark** is the one recurring glyph — used as the logo, footer mark, and small accent. See `assets/sage-lotus-mark.png` (official artwork) and `assets/sage-logo-full.png` (lockup with wordmark).
- **Process flow** uses **numbered circles** (1–6), not icons.
- **Connectors/markers:** a small rotated gold diamond as a rule end-cap; a plain "→" arrow in the comparison device. No decorative iconography beyond these.
- **Emoji:** never used.
- **If an icon is genuinely required** (e.g. a web UI affordance), use a restrained thin-line set — **[Feather](https://feathericons.com/) / Lucide** at ~1.5px stroke, tinted sage green or gray — and **flag the substitution** to brand review, since no official icon system exists. Do **not** introduce filled, bright, or playful icons.

---

## INDEX — what's in this system

**Root**
- `styles.css` — global entry point (consumers link this). `@import`s the four token files.
- `tokens/` — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`.
- `assets/` — `sage-lotus-mark.svg` (placeholder logo).
- `SKILL.md` — Agent-Skill manifest for downloadable use.

**Components** (`window.SageWealthDesignSystem_6368d1.*`)
- `components/core/` — **Logo**, **Button**, **SectionLabel**, **PullQuote**, **Callout**, **Badge**.
- `components/collateral/` — **GoldRule**, **ProcessFlow** (+`LIRA_STEPS`), **TwoColumnFramework** (+`WHAT_YOU_DO_ROWS`), **ComparisonTable**, **SageEffectBar**, **DisclaimerFooter** (+`DISCLAIMER_STANDARD`/`DISCLAIMER_BGA`).

**Foundation cards** (`guidelines/`) — Colors, Type, Spacing, Brand specimen cards (Design System tab).

**Slides** (`slides/`) — Type A dark cover, Type C white cover, interior process, interior framework, section-divider quote, interior disclaimers (1280×720).

**UI kits** (`ui_kits/`)
- `one-pager/` — Type B split-panel BGA one-pager (US Letter).
- `landing-page/` — webinar registration page (responsive web).

All cards are visible in the **Design System** tab, grouped: Colors · Type · Spacing · Brand · Components · Slides · One-Pager · Landing Page.
