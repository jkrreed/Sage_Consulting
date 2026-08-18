// Shared disclaimer + "Sage Effect" footer bar, injected on every page.
// Keeping this in one place means legal/compliance edits only need to
// happen once, per Sage brand-review rules (footer text is verbatim).

export const DISCLAIMER_STANDARD =
  "Sage Consulting & Wealth Preservation, Inc. provides strategic planning consultation. " +
  "This material is for informational purposes only and does not constitute legal, tax, or investment advice. " +
  "Strategies described are designed to comply with applicable regulations and use structures recognized under " +
  "the Internal Revenue Code; outcomes depend on individual circumstances and current law, which is subject to " +
  "change. Illustrative figures are hypothetical and based on assumed rates. Clients should consult with their " +
  "tax advisor and legal counsel before implementing any strategy. Legacy-IRA Plan\u2122 is a trademark of " +
  "Sage Consulting & Wealth Preservation, Inc.";

export function mountFooter(targetEl, assetsPath = "assets") {
  targetEl.innerHTML = `
    <div class="disclaimer-footer">${DISCLAIMER_STANDARD}</div>
    <div class="sage-effect-bar">
      <div class="wordmark">
        <span>The Sage Effect</span>
        <span>Protect &middot; Maintain &middot; Enhance</span>
      </div>
      <a href="lira-math-audit.html" title="Math audit (internal)" style="display:inline-flex; line-height:0;">
        <img src="${assetsPath}/sage-lotus-mark.png" alt="Sage">
      </a>
    </div>
  `;
}
