// LIRA Math Audit — page controller
// Reads the last inputs saved by the estimator (localStorage `lira_audit_inp`),
// re-runs the same projection engine, and lays out every intermediate figure
// the model already computes. No new math lives here — this page only formats
// what `lira-model.js` returns from `project()`.

import * as model from "./lira-model.js";

const $ = (sel) => document.querySelector(sel);

function d2(n) {
  if (n == null || isNaN(n)) return "\u2014";
  const neg = n < 0;
  return (neg ? "\u2212$" : "$") + Math.abs(n).toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}
function pct(x) {
  return (x * 100).toFixed(3).replace(/\.?0+$/, "") + "%";
}
const gLabel = (g) => (g === "F" ? "Female" : "Male");
const hLabel = (h) => (h === "S" ? "Standard" : "Preferred");

function el(tag, opts = {}, children = []) {
  const node = document.createElement(tag);
  if (opts.className) node.className = opts.className;
  if (opts.text != null) node.textContent = opts.text;
  if (opts.style) Object.assign(node.style, opts.style);
  children.forEach((c) => node.appendChild(c));
  return node;
}
function td(text, opts = {}) {
  const cell = el("td", { text });
  if (opts.label) cell.classList.add("label");
  if (opts.cls) cell.classList.add(opts.cls);
  return cell;
}
function th(text, opts = {}) {
  const cell = el("th", { text });
  if (opts.lira) cell.classList.add("lira-head");
  if (opts.left) cell.style.textAlign = "left";
  return cell;
}

function render() {
  let inp;
  try {
    inp = JSON.parse(localStorage.getItem("lira_audit_inp") || "null");
  } catch (e) {
    inp = null;
  }
  if (!inp) {
    $("#audit-empty").classList.remove("hidden");
    $("#audit-sections").classList.add("hidden");
    return;
  }
  const res = model.project(inp);
  if (!res) {
    $("#audit-empty").classList.remove("hidden");
    $("#audit-sections").classList.add("hidden");
    return;
  }
  $("#audit-empty").classList.add("hidden");
  $("#audit-sections").classList.remove("hidden");

  const SN = model.STATE_NAMES;

  // ---------- Section 1: inputs ----------
  const inputRows = [
    { k: "Insureds", v: inp.joint ? "Two (survivorship)" : "One" },
    { k: "Insured 1", v: `${gLabel(inp.gender)}, age ${inp.age}, ${hLabel(inp.health)}` },
  ];
  if (inp.joint) inputRows.push({ k: "Insured 2", v: `${gLabel(inp.gender2)}, age ${inp.age2}, ${hLabel(inp.health2)}` });
  inputRows.push(
    { k: "Pre-tax balance for heirs", v: d2(inp.balance) },
    { k: "Assumed rate of return", v: pct(inp.ror) },
    { k: "Client state", v: `${SN[inp.clientState] || inp.clientState} (${model.STATE_RATES[inp.clientState] ?? 0}%)` },
    { k: "Heir state", v: `${SN[inp.heirState] || inp.heirState} (${model.STATE_RATES[inp.heirState] ?? 0}%)` },
    { k: "Total estate value", v: d2(inp.netWorth) },
    { k: "Other (non-modeled) assets", v: d2(res.otherAssets) },
    { k: "Birth year (derived)", v: String(res.birthYear) },
    { k: "RMD start age (derived)", v: String(res.startRMD) },
    { k: "Life-expectancy horizon", v: `${res.years} yrs (to age ${res.deathAge}, ${res.deathYear})` },
    { k: "Client combined tax rate", v: pct(res.clientRate) },
    { k: "Heir combined tax rate", v: pct(res.heirRate) },
    { k: "Federal estate exemption", v: d2(res.exemption) },
    { k: "DB inside estate?", v: inp.dbInEstate ? "Yes" : "No" }
  );
  const inputGrid = $("#audit-input-grid");
  inputGrid.innerHTML = "";
  inputRows.forEach((row) => {
    inputGrid.appendChild(
      el("div", { className: "cell" }, [el("div", { className: "k", text: row.k }), el("div", { className: "v", text: row.v })])
    );
  });

  // ---------- Section 2: pricing ----------
  const pricingRows = [
    { k: "Death benefit per $5,000,000 premium", v: d2(res.db5m), note: inp.joint ? "survivorship grid, interpolated" : "individual inventory" },
    { k: "Premium (= pre-tax balance)", v: d2(res.premium), note: "" },
    { k: "Projected death benefit (DB)", v: d2(res.db), note: "premium / 5,000,000 \u00d7 DB-per-5M" },
    { k: "Policy discount", v: pct(res.disc), note: "IRS Rev. Proc. 2005-25 safe harbor" },
    { k: "Trust buyout price", v: d2(res.buyout), note: "premium \u00d7 (1 \u2212 discount)" },
  ];
  const pricingBody = $("#audit-pricing-body");
  pricingBody.innerHTML = "";
  pricingRows.forEach((row) => {
    pricingBody.appendChild(el("tr", {}, [td(row.k, { label: true }), td(row.v), td(row.note, { cls: "muted" })]));
  });

  // ---------- Sections 3 & 4: year-by-year traces ----------
  const traceCols = ["Yr", "Age", "IRA begin", "\u00d7 ROR growth", "After growth", "RMD divisor", "RMD gross", "Tax on RMD", "RMD net \u2192 side", "Side begin", "Side growth", "Side end", "IRA end"];

  function renderTraceHead(targetId, lira) {
    const head = $(targetId);
    head.innerHTML = "";
    traceCols.forEach((c) => head.appendChild(th(c, { lira })));
  }
  function renderTraceBody(targetId, rows) {
    const body = $(targetId);
    body.innerHTML = "";
    rows.forEach((x, i) => {
      const tr = el("tr", { style: { background: i % 2 ? "#F7F9F3" : "#FFFFFF" } });
      tr.appendChild(td(String(x.year), { cls: "muted" }));
      tr.appendChild(td(String(x.age), { cls: "muted" }));
      tr.appendChild(td(d2(x.begin)));
      tr.appendChild(td(d2(x.growth), { cls: "pos" }));
      tr.appendChild(td(d2(x.afterGrowth)));
      tr.appendChild(td(x.divisor == null ? "\u2014" : x.divisor.toFixed(1), { cls: "muted" }));
      tr.appendChild(td(x.rmd ? d2(x.rmd) : "\u2014"));
      tr.appendChild(td(x.rmdTax ? "\u2212" + d2(x.rmdTax) : "\u2014", { cls: "neg" }));
      tr.appendChild(td(x.rmdNet ? d2(x.rmdNet) : "\u2014"));
      tr.appendChild(td(d2(x.sideBegin), { cls: "muted" }));
      tr.appendChild(td(d2(x.sideGrowth), { cls: "muted" }));
      tr.appendChild(td(d2(x.sideEnd)));
      tr.appendChild(td(d2(x.iraEnd)));
      body.appendChild(tr);
    });
  }

  renderTraceHead("#audit-trace-head-current", false);
  renderTraceBody("#audit-current-trace-body", res.trace.current);
  $("#audit-current-lede").textContent = `Starting balance ${d2(res.premium)}. Each column is one sub-step. Side fund holds after-tax RMDs (Scenario B); it is ignored in Scenario A.`;
  $("#audit-current-footnote").innerHTML =
    `Ending IRA balance: <strong>${d2(res.curBal)}</strong> &middot; Ending side fund (Scenario B): <strong>${d2(res.curSide)}</strong> &middot; Total RMDs withdrawn: ${d2(res.curTotalRMD)} &middot; Total tax on RMDs: ${d2(res.curTotalRmdTax)}`;

  renderTraceHead("#audit-trace-head-residual", true);
  renderTraceBody("#audit-residual-trace-body", res.trace.residual);
  $("#audit-residual-lede").textContent = `The trust\u2019s buyout payment of ${d2(res.buyout)} returns to the account and is projected under identical growth and RMD rules.`;
  $("#audit-residual-footnote").innerHTML = `Ending residual IRA balance: <strong>${d2(res.resBal)}</strong> &middot; Ending residual side fund: <strong>${d2(res.resSide)}</strong>`;

  // ---------- Section 5: estate-tax detail ----------
  $("#audit-estate-lede").textContent = `Taxable estate = other assets + modeled assets \u2212 exemption. The 40% rate applies only to the modeled dollars sitting above the exemption. Other assets held flat at ${d2(res.otherAssets)}.`;
  const eRow = (label, det) => ({
    label,
    cells: [d2(det.assets), d2(det.otherAssets), d2(det.combined), d2(det.exemption), d2(det.taxableEstate), d2(det.taxableModeled), d2(det.tax)],
  });
  const estateRows = [
    eRow("A \u2014 distributions spent", res.A.estateDetail),
    eRow("B \u2014 distributions saved", res.B.estateDetail),
    eRow("LIRA (A treatment) residual", res.liraA.estateDetail),
    eRow("LIRA (B treatment) residual", res.liraB.estateDetail),
  ];
  const estateBody = $("#audit-estate-body");
  estateBody.innerHTML = "";
  estateRows.forEach((row) => {
    const tr = el("tr", {}, [td(row.label, { label: true })]);
    row.cells.forEach((c) => tr.appendChild(td(c)));
    estateBody.appendChild(tr);
  });

  // ---------- Section 6: net-to-heirs by scenario ----------
  $("#audit-outcome-lede").textContent = `Income tax = ending IRA balance \u00d7 heir combined rate (${pct(res.heirRate)}). The estimator selects the stronger current scenario (${res.useB ? "B" : "A"}) and the LIRA under the same treatment.`;
  const oRow = (label, s, db, dbEstateTax, bg) => ({
    label,
    bg,
    cells: [d2(s.gross), "\u2212" + d2(s.estateTax + (dbEstateTax || 0)), "\u2212" + d2(s.incomeTax), db ? d2(db) : "\u2014", d2(s.net), pct(s.taxPct)],
  });
  const outcomeRows = [
    oRow("Current A", res.A, 0, 0, res.useB ? "#FFFFFF" : "#EFF3E6"),
    oRow("Current B", res.B, 0, 0, res.useB ? "#EFF3E6" : "#FFFFFF"),
    oRow("LIRA (A treatment)", res.liraA, res.liraA.db, res.liraA.dbEstateTax, res.useB ? "#FFFFFF" : "#F2F6EC"),
    oRow("LIRA (B treatment)", res.liraB, res.liraB.db, res.liraB.dbEstateTax, res.useB ? "#F2F6EC" : "#FFFFFF"),
  ];
  const outcomeBody = $("#audit-outcome-body");
  outcomeBody.innerHTML = "";
  outcomeRows.forEach((row) => {
    const tr = el("tr", { style: { background: row.bg } });
    tr.appendChild(td(row.label, { label: true, cls: undefined }));
    tr.firstChild.style.fontWeight = "500";
    row.cells.forEach((c) => tr.appendChild(td(c)));
    outcomeBody.appendChild(tr);
  });

  // ---------- Section 7: headline reconciliation ----------
  const headlineRows = [
    { k: "Chosen current scenario", v: res.useB ? "B \u2014 distributions saved" : "A \u2014 distributions spent" },
    { k: "Current plan \u2014 net to heirs", v: d2(res.bestCurrent) },
    { k: "LIRA strategy \u2014 net to heirs", v: d2(res.lira.net) },
    { k: "Tax-free advantage to heirs", v: d2(res.advantage) },
    { k: "Advantage as % of current net", v: pct(res.advantage / Math.max(1, res.bestCurrent)) },
  ];
  const headlineBody = $("#audit-headline-body");
  headlineBody.innerHTML = "";
  headlineRows.forEach((row) => {
    const tr = el("tr", {}, [td(row.k, { label: true })]);
    const valCell = td(row.v);
    valCell.style.fontWeight = "500";
    tr.appendChild(valCell);
    headlineBody.appendChild(tr);
  });
}

// The password gate (js/gate.js) removes #lira-gate from the DOM once
// unlocked. Only render the audit content once that has happened —
// otherwise numbers would be visible behind the gate for an instant.
function afterGate(cb) {
  const gateEl = document.getElementById("lira-gate");
  if (!gateEl) {
    cb();
    return;
  }
  const obs = new MutationObserver(() => {
    if (!document.getElementById("lira-gate")) {
      obs.disconnect();
      cb();
    }
  });
  obs.observe(document.body, { childList: true });
}

afterGate(render);
