/* @ds-bundle: {"format":3,"namespace":"SageWealthDesignSystem_6368d1","components":[{"name":"ComparisonTable","sourcePath":"components/collateral/ComparisonTable.jsx"},{"name":"DISCLAIMER_STANDARD","sourcePath":"components/collateral/DisclaimerFooter.jsx"},{"name":"DISCLAIMER_BGA","sourcePath":"components/collateral/DisclaimerFooter.jsx"},{"name":"DisclaimerFooter","sourcePath":"components/collateral/DisclaimerFooter.jsx"},{"name":"GoldRule","sourcePath":"components/collateral/GoldRule.jsx"},{"name":"LIRA_STEPS","sourcePath":"components/collateral/ProcessFlow.jsx"},{"name":"ProcessFlow","sourcePath":"components/collateral/ProcessFlow.jsx"},{"name":"SageEffectBar","sourcePath":"components/collateral/SageEffectBar.jsx"},{"name":"WHAT_YOU_DO_ROWS","sourcePath":"components/collateral/TwoColumnFramework.jsx"},{"name":"TwoColumnFramework","sourcePath":"components/collateral/TwoColumnFramework.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Callout","sourcePath":"components/core/Callout.jsx"},{"name":"Logo","sourcePath":"components/core/Logo.jsx"},{"name":"PullQuote","sourcePath":"components/core/PullQuote.jsx"},{"name":"SectionLabel","sourcePath":"components/core/SectionLabel.jsx"}],"sourceHashes":{"components/collateral/ComparisonTable.jsx":"6677f91060a3","components/collateral/DisclaimerFooter.jsx":"d0483000c6f7","components/collateral/GoldRule.jsx":"9e4a28199d75","components/collateral/ProcessFlow.jsx":"adb5172140c0","components/collateral/SageEffectBar.jsx":"2390fc39f7cf","components/collateral/TwoColumnFramework.jsx":"b719eb71bf13","components/core/Badge.jsx":"cb30518fb019","components/core/Button.jsx":"93a8fb01c9d3","components/core/Callout.jsx":"7c86931df69f","components/core/Logo.jsx":"8d408dde7e51","components/core/PullQuote.jsx":"c3557dfa5812","components/core/SectionLabel.jsx":"9a44b8e002bd"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.SageWealthDesignSystem_6368d1 = window.SageWealthDesignSystem_6368d1 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/collateral/ComparisonTable.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Before/After "Conventional → LIRA" comparison. Sage-wash panels with a
 * "REPLACED WITH" connector in sage green. Restrained, calm — never a
 * scare-tactic "70% LOST!" treatment.
 */
function ComparisonTable({
  rows = [],
  // rows: [{ before, after, replacedWith?: string }]
  leftLabel = "Conventional",
  rightLabel = "The Legacy-IRA Plan™",
  connector = "Replaced with",
  style,
  ...rest
}) {
  const panel = (bg, color) => ({
    background: bg,
    color,
    padding: "16px 20px",
    fontFamily: "var(--font-sans)",
    fontWeight: "var(--weight-body)",
    fontSize: "var(--type-small)",
    lineHeight: "var(--leading-body)",
    borderRadius: "var(--radius-sm)",
    flex: 1
  });
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 14,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "muted"
  }, leftLabel)), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 110,
      textAlign: "center"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "accent"
  }, rightLabel))), rows.map((r, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: panel("var(--ice-gray)", "var(--text-secondary)")
  }, r.before), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 110,
      flex: "0 0 auto",
      textAlign: "center",
      fontFamily: "var(--font-sans)",
      fontWeight: "var(--weight-light)",
      fontSize: "var(--type-caption)",
      letterSpacing: "var(--tracking-label-tight)",
      textTransform: "uppercase",
      color: "var(--sage-green)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("span", null, r.replacedWith || connector), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": true,
    style: {
      fontSize: 16,
      lineHeight: 1,
      color: "var(--sage-green)"
    }
  }, "\u2192")), /*#__PURE__*/React.createElement("div", {
    style: panel("var(--sage-wash)", "var(--deep-sage-1)")
  }, r.after))));
}
function Eyebrow({
  children,
  tone
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      fontWeight: "var(--weight-light)",
      fontSize: "var(--type-label)",
      letterSpacing: "var(--tracking-label)",
      textTransform: "uppercase",
      color: tone === "accent" ? "var(--sage-green)" : "var(--text-secondary)"
    }
  }, children);
}
Object.assign(__ds_scope, { ComparisonTable });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/collateral/ComparisonTable.jsx", error: String((e && e.message) || e) }); }

// components/collateral/DisclaimerFooter.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Approved disclaimer text (§6.5 standard / §6.6 BGA short). */
const DISCLAIMER_STANDARD = "Sage Consulting & Wealth Preservation, Inc. provides strategic planning consultation. This material is for informational purposes only and does not constitute legal, tax, or investment advice. Strategies described are designed to comply with applicable regulations and use structures recognized under the Internal Revenue Code; outcomes depend on individual circumstances and current law, which is subject to change. Illustrative figures are hypothetical and based on assumed rates. Clients should consult with their tax advisor and legal counsel before implementing any strategy. Legacy-IRA Plan\u2122 is a trademark of Sage Consulting & Wealth Preservation, Inc.";
const DISCLAIMER_BGA = "Sage Consulting & Wealth Preservation, Inc. Strategies described are designed to comply with applicable regulations and use structures recognized under the Internal Revenue Code; outcomes depend on individual circumstances and current law, which is subject to change. Legacy-IRA Plan\u2122 is a trademark of Sage Consulting & Wealth Preservation, Inc.";

/**
 * Compliance disclaimer footer. Poppins Regular at reduced size.
 * Required on all client- and advisor-facing collateral (standard);
 * BGA-facing pieces may use the short version.
 */
function DisclaimerFooter({
  variant = "standard",
  // "standard" | "bga"
  tone = "light",
  // "light" (on white) | "dark" (on near-black)
  style,
  ...rest
}) {
  const text = variant === "bga" ? DISCLAIMER_BGA : DISCLAIMER_STANDARD;
  return /*#__PURE__*/React.createElement("p", _extends({
    style: {
      fontFamily: "var(--font-sans)",
      fontWeight: "var(--weight-body)",
      fontSize: "var(--type-caption)",
      lineHeight: 1.55,
      color: tone === "dark" ? "rgba(255,255,255,0.6)" : "var(--text-secondary)",
      margin: 0,
      textWrap: "pretty",
      ...style
    }
  }, rest), text);
}
Object.assign(__ds_scope, { DISCLAIMER_STANDARD, DISCLAIMER_BGA, DisclaimerFooter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/collateral/DisclaimerFooter.jsx", error: String((e && e.message) || e) }); }

// components/collateral/GoldRule.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Thin gold decorative rule with small lotus end-cap marks.
 * Cover pages only. One or two per page maximum.
 */
function GoldRule({
  width = 120,
  endcaps = true,
  align = "left",
  // "left" | "center" | "right"
  style,
  ...rest
}) {
  const dot = /*#__PURE__*/React.createElement("span", {
    style: {
      width: 5,
      height: 5,
      flex: "0 0 auto",
      background: "var(--gold)",
      transform: "rotate(45deg)",
      borderRadius: "1px"
    }
  });
  const justify = align === "center" ? "center" : align === "right" ? "flex-end" : "flex-start";
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      justifyContent: justify,
      ...style
    }
  }, rest), endcaps && dot, /*#__PURE__*/React.createElement("span", {
    style: {
      width,
      height: 1,
      background: "var(--gold)",
      display: "block"
    }
  }), endcaps && dot);
}
Object.assign(__ds_scope, { GoldRule });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/collateral/GoldRule.jsx", error: String((e && e.message) || e) }); }

// components/collateral/ProcessFlow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** The six approved LIRA steps (§7.6) — use verbatim. */
const LIRA_STEPS = ["Determine Suitability", "Establish the Planning Structure", "Reposition Retirement Assets", "Plan Acquires Life Insurance with Pre-Tax Dollars", "Legacy Transfer & Optimization", "Ongoing Stewardship"];

/**
 * Numbered sage-green process circles connected by thin lines.
 * Steps never wrap mid-process — choose orientation to fit layout.
 */
function ProcessFlow({
  steps = LIRA_STEPS,
  orientation = "horizontal",
  // "horizontal" | "vertical"
  circleSize = 44,
  tone = "default",
  // "default" | "on-dark"
  style,
  ...rest
}) {
  const isH = orientation === "horizontal";
  const lineColor = tone === "on-dark" ? "rgba(151,179,126,0.5)" : "var(--divider-sage)";
  const labelColor = tone === "on-dark" ? "var(--white)" : "var(--text-body)";
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      flexDirection: isH ? "row" : "column",
      alignItems: isH ? "flex-start" : "stretch",
      gap: 0,
      ...style
    }
  }, rest), steps.map((label, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "flex",
      flexDirection: isH ? "column" : "row",
      alignItems: isH ? "center" : "flex-start",
      flex: isH ? "1 1 0" : "0 0 auto",
      gap: isH ? 12 : 16,
      position: "relative",
      paddingBottom: isH ? 0 : i === steps.length - 1 ? 0 : 20
    }
  }, i < steps.length - 1 && /*#__PURE__*/React.createElement("span", {
    style: isH ? {
      position: "absolute",
      top: circleSize / 2,
      left: "50%",
      width: "100%",
      height: 1,
      background: lineColor
    } : {
      position: "absolute",
      left: circleSize / 2,
      top: circleSize,
      width: 1,
      height: "100%",
      background: lineColor
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: circleSize,
      height: circleSize,
      flex: "0 0 auto",
      borderRadius: "var(--radius-pill)",
      background: "var(--sage-green)",
      color: "var(--sage-black)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "var(--font-serif)",
      fontWeight: "var(--weight-serif)",
      fontSize: circleSize * 0.46,
      position: "relative",
      zIndex: 1
    }
  }, i + 1), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontWeight: "var(--weight-body)",
      fontSize: "var(--type-small)",
      lineHeight: "var(--leading-tight)",
      color: labelColor,
      textAlign: isH ? "center" : "left",
      maxWidth: isH ? circleSize * 3.4 : "none",
      paddingTop: isH ? 0 : (circleSize - 18) / 2
    }
  }, label))));
}
Object.assign(__ds_scope, { LIRA_STEPS, ProcessFlow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/collateral/ProcessFlow.jsx", error: String((e && e.message) || e) }); }

// components/collateral/TwoColumnFramework.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Approved "What You Do / What Sage Does" rows (§7.8) — use verbatim. */
const WHAT_YOU_DO_ROWS = [["Maintain the client relationship", "Provide the technical strategy framework"], ["Hold the family-goals conversation", "Translate goals into a planning structure"], ["Decide what's right for your client", "Model the planning options"], ["Stay in front of the client at every step", "Coordinate ERISA, valuation, actuarial, and trust counsel behind the scenes"], ["Sign the engagement", "Manage implementation and ongoing plan administration"], ["Receive credit for the outcome", "Operate as your preferred technical partner"]];

/**
 * "What You Do / What Sage Does" two-column framework — one of Sage's most
 * successful brand devices. Column headers and rows are fixed/approved.
 * Supports an optional third column (e.g. "What Hancock Does") — flag for
 * brand review before printing (§8.2 Asset 13).
 */
function TwoColumnFramework({
  rows = WHAT_YOU_DO_ROWS,
  leftHeader = "What You Do",
  rightHeader = "What Sage Does",
  thirdHeader,
  style,
  ...rest
}) {
  const cols = thirdHeader ? 3 : 2;
  const headerStyle = {
    fontFamily: "var(--font-sans)",
    fontWeight: "var(--weight-light)",
    fontSize: "var(--type-label)",
    letterSpacing: "var(--tracking-label)",
    textTransform: "uppercase",
    padding: "14px 20px",
    color: "var(--white)",
    background: "var(--deep-sage-1)"
  };
  const cellStyle = {
    fontFamily: "var(--font-sans)",
    fontWeight: "var(--weight-body)",
    fontSize: "var(--type-small)",
    lineHeight: "var(--leading-body)",
    color: "var(--text-body)",
    padding: "14px 20px",
    verticalAlign: "top"
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "grid",
      gridTemplateColumns: `repeat(${cols}, 1fr)`,
      border: "1px solid var(--divider-sage)",
      borderRadius: "var(--radius-sm)",
      overflow: "hidden",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: headerStyle
  }, leftHeader), /*#__PURE__*/React.createElement("div", {
    style: {
      ...headerStyle,
      background: "var(--sage-green)",
      color: "var(--sage-black)"
    }
  }, rightHeader), thirdHeader && /*#__PURE__*/React.createElement("div", {
    style: {
      ...headerStyle,
      background: "var(--deep-sage-4)"
    }
  }, thirdHeader), rows.map((row, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, Array.from({
    length: cols
  }).map((_, c) => /*#__PURE__*/React.createElement("div", {
    key: c,
    style: {
      ...cellStyle,
      background: c === 1 ? "var(--sage-wash)" : i % 2 ? "var(--white-sage)" : "var(--white)",
      borderTop: "1px solid var(--dove-gray)"
    }
  }, row[c] ?? "")))));
}
Object.assign(__ds_scope, { WHAT_YOU_DO_ROWS, TwoColumnFramework });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/collateral/TwoColumnFramework.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Small chip / badge — sage variants for tags like "Funded LIRA",
 * priority markers, "Illustrative". Restrained, no bright fills.
 */
function Badge({
  children,
  tone = "sage",
  // "sage" | "outline" | "gold" | "neutral"
  style,
  ...rest
}) {
  const tones = {
    sage: {
      background: "var(--sage-wash)",
      color: "var(--deep-sage-1)",
      border: "1px solid transparent"
    },
    outline: {
      background: "transparent",
      color: "var(--text-secondary)",
      border: "1px solid var(--divider)"
    },
    gold: {
      background: "transparent",
      color: "var(--gold)",
      border: "1px solid var(--gold)"
    },
    neutral: {
      background: "var(--ice-gray)",
      color: "var(--text-secondary)",
      border: "1px solid transparent"
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      fontFamily: "var(--font-sans)",
      fontWeight: "var(--weight-body)",
      fontSize: "var(--type-caption)",
      letterSpacing: "var(--tracking-label-tight)",
      textTransform: "uppercase",
      padding: "5px 12px",
      borderRadius: "var(--radius-pill)",
      lineHeight: 1,
      ...tones[tone],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Sage button. Restrained — no heavy shadows, near-square corners.
 * Authority from type & space, not weight.
 */
function Button({
  variant = "primary",
  // "primary" | "secondary" | "ghost"
  size = "md",
  // "sm" | "md" | "lg"
  children,
  style,
  ...rest
}) {
  const sizes = {
    sm: {
      padding: "8px 18px",
      fontSize: 12
    },
    md: {
      padding: "12px 26px",
      fontSize: 13
    },
    lg: {
      padding: "15px 34px",
      fontSize: 14
    }
  };
  const base = {
    fontFamily: "var(--font-sans)",
    fontWeight: "var(--weight-body)",
    letterSpacing: "var(--tracking-label-tight)",
    textTransform: "uppercase",
    borderRadius: "var(--radius-sm)",
    border: "1px solid transparent",
    cursor: "pointer",
    transition: "background 160ms ease, color 160ms ease, border-color 160ms ease",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    lineHeight: 1,
    ...sizes[size]
  };
  const variants = {
    primary: {
      background: "var(--sage-green)",
      color: "var(--sage-black)",
      borderColor: "var(--sage-green)"
    },
    secondary: {
      background: "transparent",
      color: "var(--sage-black)",
      borderColor: "var(--sage-black)"
    },
    ghost: {
      background: "transparent",
      color: "var(--text-secondary)",
      borderColor: "transparent"
    }
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    style: {
      ...base,
      ...variants[variant],
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Callout.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Ice-gray callout / panel for comparisons & asides (per §4.4).
 * Optional sage-green left keyline. Flat — no heavy elevation.
 */
function Callout({
  children,
  tone = "panel",
  // "panel" (ice gray) | "wash" (sage wash) | "tinted"
  keyline = false,
  // sage-green left keyline
  label,
  style,
  ...rest
}) {
  const bg = tone === "wash" ? "var(--surface-wash)" : tone === "tinted" ? "var(--surface-tinted)" : "var(--surface-panel)";
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: bg,
      borderLeft: keyline ? "3px solid var(--sage-green)" : "none",
      padding: "var(--space-5) var(--space-6)",
      borderRadius: "var(--radius-sm)",
      ...style
    }
  }, rest), label && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      fontWeight: "var(--weight-light)",
      fontSize: "var(--type-label)",
      letterSpacing: "var(--tracking-label)",
      textTransform: "uppercase",
      color: "var(--sage-green)",
      marginBottom: "var(--space-3)"
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      fontWeight: "var(--weight-body)",
      fontSize: "var(--type-body)",
      lineHeight: "var(--leading-body)",
      color: "var(--text-body)",
      textWrap: "pretty"
    }
  }, children));
}
Object.assign(__ds_scope, { Callout });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Callout.jsx", error: String((e && e.message) || e) }); }

// components/core/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Resolve the design-system root from the loaded bundle's <script src>,
 * so asset paths work regardless of the consuming page's directory depth.
 */
function dsAssetBase() {
  if (typeof document === "undefined") return "";
  const s = Array.from(document.querySelectorAll("script")).find(el => el.src && el.src.includes("_ds_bundle.js"));
  if (s) return s.src.replace(/_ds_bundle\.js.*$/, "");
  return "";
}

/**
 * The official Sage lotus logo.
 *  - variant="mark"   → lotus mark only
 *  - variant="lockup" → lotus + "SAGE CONSULTING" wordmark (the supplied art)
 *
 * The artwork is full-color (sage greens + charcoal, white keylines). On dark
 * grounds the white keylines preserve the silhouette; a dedicated reversed/mono
 * asset is still recommended for very dark placements — see readme caveats.
 */
function Logo({
  variant = "mark",
  size = 48,
  // mark height in px
  showTagline = false,
  src,
  // override the image src if needed
  alt = "Sage Consulting & Wealth Preservation",
  colorway,
  // accepted for API compatibility; raster is full-color
  style,
  ...rest
}) {
  const base = dsAssetBase();
  const isLockup = variant === "lockup";
  const imgSrc = src || base + (isLockup ? "assets/sage-logo-full.png" : "assets/sage-lotus-mark.png");

  // full logo aspect ≈ 800/600; mark aspect ≈ 723/452
  const img = /*#__PURE__*/React.createElement("img", {
    src: imgSrc,
    alt: alt,
    style: {
      height: isLockup ? size * 1.45 : size,
      width: "auto",
      display: "block"
    }
  });
  if (!showTagline) {
    return /*#__PURE__*/React.createElement("span", _extends({
      style: {
        display: "inline-flex",
        ...style
      }
    }, rest), img);
  }
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      flexDirection: "column",
      alignItems: "center",
      gap: size * 0.22,
      ...style
    }
  }, rest), img, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontWeight: "var(--weight-light)",
      fontSize: Math.max(9, size * 0.18),
      letterSpacing: "var(--tracking-label)",
      textTransform: "uppercase",
      color: "var(--text-secondary)"
    }
  }, "Protect\xA0\xA0Maintain\xA0\xA0Enhance"));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Logo.jsx", error: String((e && e.message) || e) }); }

// components/collateral/SageEffectBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * "THE SAGE EFFECT" dark footer bar — the visual signature across all
 * one-pagers. Section label (left) + lotus logo (right) on near-black.
 * NOTE: the full "tax-free family wealth" sentence is NOT approved copy
 * (§11.2) — this bar carries the section label only.
 */
function SageEffectBar({
  label = "The Sage Effect",
  tagline = "Protect · Maintain · Enhance",
  height = 96,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      background: "var(--sage-footer-dark)",
      height,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "0 var(--space-7)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-serif)",
      fontWeight: "var(--weight-serif)",
      fontSize: 20,
      letterSpacing: "var(--tracking-label)",
      textTransform: "uppercase",
      color: "var(--sage-green)"
    }
  }, label), tagline && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-sans)",
      fontWeight: "var(--weight-light)",
      fontSize: "var(--type-caption)",
      letterSpacing: "var(--tracking-label-tight)",
      textTransform: "uppercase",
      color: "rgba(255,255,255,0.6)"
    }
  }, tagline)), /*#__PURE__*/React.createElement(__ds_scope.Logo, {
    variant: "mark",
    colorway: "green",
    size: height * 0.46
  }));
}
Object.assign(__ds_scope, { SageEffectBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/collateral/SageEffectBar.jsx", error: String((e && e.message) || e) }); }

// components/core/PullQuote.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Pull quote — Cormorant Infant, often italic. Reinforces voice.
 * One per slide / section maximum.
 */
function PullQuote({
  children,
  attribution,
  italic = true,
  tone = "default",
  // "default" | "on-dark" | "on-wash"
  size = "md",
  // "sm" | "md" | "lg"
  style,
  ...rest
}) {
  const sizes = {
    sm: "var(--type-subhead)",
    md: "var(--type-heading)",
    lg: "var(--type-title)"
  };
  const color = tone === "on-dark" ? "var(--white)" : "var(--sage-black)";
  return /*#__PURE__*/React.createElement("figure", _extends({
    style: {
      margin: 0,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("blockquote", {
    style: {
      fontFamily: "var(--font-serif)",
      fontWeight: "var(--weight-serif)",
      fontStyle: italic ? "italic" : "normal",
      fontSize: sizes[size],
      lineHeight: "var(--leading-title)",
      color,
      margin: 0,
      textWrap: "pretty"
    }
  }, children), attribution && /*#__PURE__*/React.createElement("figcaption", {
    style: {
      fontFamily: "var(--font-sans)",
      fontWeight: "var(--weight-light)",
      fontSize: "var(--type-small)",
      letterSpacing: "var(--tracking-label-tight)",
      textTransform: "uppercase",
      color: tone === "on-dark" ? "var(--sage-green)" : "var(--text-secondary)",
      marginTop: "var(--space-4)"
    }
  }, attribution));
}
Object.assign(__ds_scope, { PullQuote });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/PullQuote.jsx", error: String((e && e.message) || e) }); }

// components/core/SectionLabel.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Spaced uppercase section label — the quiet-authority device.
 * Tracking 200–300%. Poppins or Cormorant Infant.
 */
function SectionLabel({
  children,
  as = "div",
  font = "sans",
  // "sans" | "serif"
  tone = "default",
  // "default" | "accent" | "on-dark"
  align = "left",
  style,
  ...rest
}) {
  const Tag = as;
  const color = tone === "accent" ? "var(--sage-green)" : tone === "on-dark" ? "var(--white)" : "var(--text-secondary)";
  return /*#__PURE__*/React.createElement(Tag, _extends({
    style: {
      fontFamily: font === "serif" ? "var(--font-serif)" : "var(--font-sans)",
      fontWeight: font === "serif" ? "var(--weight-serif)" : "var(--weight-light)",
      fontSize: "var(--type-label)",
      letterSpacing: "var(--tracking-label)",
      textTransform: "uppercase",
      color,
      textAlign: align,
      margin: 0,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { SectionLabel });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SectionLabel.jsx", error: String((e && e.message) || e) }); }

__ds_ns.ComparisonTable = __ds_scope.ComparisonTable;

__ds_ns.DISCLAIMER_STANDARD = __ds_scope.DISCLAIMER_STANDARD;

__ds_ns.DISCLAIMER_BGA = __ds_scope.DISCLAIMER_BGA;

__ds_ns.DisclaimerFooter = __ds_scope.DisclaimerFooter;

__ds_ns.GoldRule = __ds_scope.GoldRule;

__ds_ns.LIRA_STEPS = __ds_scope.LIRA_STEPS;

__ds_ns.ProcessFlow = __ds_scope.ProcessFlow;

__ds_ns.SageEffectBar = __ds_scope.SageEffectBar;

__ds_ns.WHAT_YOU_DO_ROWS = __ds_scope.WHAT_YOU_DO_ROWS;

__ds_ns.TwoColumnFramework = __ds_scope.TwoColumnFramework;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Callout = __ds_scope.Callout;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.PullQuote = __ds_scope.PullQuote;

__ds_ns.SectionLabel = __ds_scope.SectionLabel;

})();
