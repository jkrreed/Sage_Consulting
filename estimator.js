// LIRA Estimator — page controller
// No framework: plain DOM + the shared projection engine in lira-model.js.

import * as model from "./lira-model.js";
import { mountFooter } from "./footer.js";

const CALC_STEPS = [
  "Compounding account growth at the assumed rate of return",
  "Determining the RMD start year from date of birth",
  "Applying the IRS Uniform Lifetime Table to each distribution year",
  "Projecting to actuarial life expectancy",
  "Assessing federal estate-tax exposure",
  "Applying the heir\u2019s state and federal income-tax rates",
  "Pricing the Legacy-IRA Plan\u2122 against current inventory",
];

// Advisors can tune these two without touching the calculation engine.
const CONFIG = {
  calendlyUrl: "https://calendly.com/",
  benefitInsideEstate: false,
  estateExemption: 15000000,
};

const $ = (sel) => document.querySelector(sel);

const els = {
  screenIntake: $("#screen-intake"),
  screenCalc: $("#screen-calc"),
  screenResults: $("#screen-results"),
  form: $("#intake-form"),
  joint: $("#f-joint"),
  secondRow: $("#second-insured-row"),
  insured1Label: $("#insured1-label"),
  age: $("#f-age"),
  ror: $("#f-ror"),
  rorLabel: $("#ror-label"),
  balance: $("#f-balance"),
  netWorth: $("#f-netWorth"),
  clientState: $("#f-clientState"),
  heirState: $("#f-heirState"),
  formError: $("#form-error"),
  calcSteps: $("#calc-steps"),
  backToIntake: $("#back-to-intake"),
  advisorToggle: $("#advisor-toggle"),
  advisorBody: $("#advisor-body"),
  advisorChevron: $("#advisor-chevron"),
  goAnalysis: $("#go-analysis"),
  goMeeting: $("#go-meeting"),
  compTable: $("#comp-table"),
};

mountFooter(document.getElementById("footer-mount"));
els.goMeeting.href = CONFIG.calendlyUrl;

let calcTimer = null;

// ---------- Setup: state dropdowns ----------
function populateStates() {
  const options = Object.entries(model.STATE_NAMES)
    .map(([code, name]) => `<option value="${code}">${name}</option>`)
    .join("");
  els.clientState.innerHTML = options;
  els.heirState.innerHTML = options;
  els.clientState.value = "CA";
  els.heirState.value = "CA";
}
populateStates();

// ---------- Restore saved intake ----------
function restoreSavedIntake() {
  try {
    const saved = JSON.parse(localStorage.getItem("lira_intake") || "null");
    if (!saved || !saved.f) return;
    const f = saved.f;
    if (f.joint) els.joint.value = f.joint;
    if (f.age) els.age.value = f.age;
    if (f.gender) $("#f-gender").value = f.gender;
    if (f.health) $("#f-health").value = f.health;
    if (f.age2) $("#f-age2").value = f.age2;
    if (f.gender2) $("#f-gender2").value = f.gender2;
    if (f.health2) $("#f-health2").value = f.health2;
    if (f.balanceStr) els.balance.value = f.balanceStr;
    if (f.ror) els.ror.value = f.ror;
    if (f.clientState) els.clientState.value = f.clientState;
    if (f.heirState) els.heirState.value = f.heirState;
    if (f.netWorthStr) els.netWorth.value = f.netWorthStr;
  } catch (e) {
    /* ignore corrupt storage */
  }
}
restoreSavedIntake();

// ---------- Joint toggle ----------
function syncJointUI() {
  const isJoint = els.joint.value === "two";
  els.secondRow.classList.toggle("hidden", !isJoint);
  els.age.max = isJoint ? "80" : "75";
  els.insured1Label.textContent = isJoint ? "First insured age" : "Client age";
}
els.joint.addEventListener("change", syncJointUI);
syncJointUI();

// ---------- Rate-of-return label ----------
els.ror.addEventListener("input", () => {
  els.rorLabel.textContent = `Assumed rate of return \u2014 ${els.ror.value}%`;
});
els.rorLabel.textContent = `Assumed rate of return \u2014 ${els.ror.value}%`;

// ---------- Money field formatting ----------
function parseMoney(s) {
  const n = parseFloat(String(s).replace(/[^0-9.]/g, ""));
  return isNaN(n) ? 0 : n;
}
function fmtInput(s) {
  const n = parseMoney(s);
  return n ? "$" + Math.round(n).toLocaleString("en-US") : "";
}
[els.balance, els.netWorth].forEach((input) => {
  input.addEventListener("blur", () => {
    input.value = fmtInput(input.value);
  });
});

// ---------- Screen switching ----------
function showScreen(name) {
  els.screenIntake.classList.toggle("hidden", name !== "intake");
  els.screenCalc.classList.toggle("hidden", name !== "calc");
  els.screenResults.classList.toggle("hidden", name !== "results");
  window.scrollTo(0, 0);
}

// ---------- Calculating animation ----------
function renderCalcSteps(activeIndex) {
  els.calcSteps.innerHTML = CALC_STEPS.map((label, i) => {
    const done = activeIndex > i;
    const active = activeIndex === i;
    const bg = done ? "#97B37E" : active ? "#EAF2DA" : "transparent";
    const fg = done ? "#201F1E" : "transparent";
    const border = done || active ? "#97B37E" : "#DFDEE1";
    const anim = active ? "sagePulse 1.1s ease infinite" : "none";
    const op = done || active ? "1" : "0.45";
    const mark = done ? "\u2713" : "";
    return `<div class="calc-step" style="opacity:${op}">
      <span class="mark" style="background:${bg}; color:${fg}; border-color:${border}; animation:${anim}">${mark}</span>
      <span class="label">${label}</span>
    </div>`;
  }).join("");
}

function runCalcAnimation(onDone) {
  let step = 0;
  renderCalcSteps(step);
  clearInterval(calcTimer);
  calcTimer = setInterval(() => {
    step += 1;
    if (step > CALC_STEPS.length) {
      clearInterval(calcTimer);
      onDone();
      return;
    }
    renderCalcSteps(step);
  }, 620);
}

// ---------- Form submit ----------
function readForm() {
  return {
    joint: els.joint.value,
    age: els.age.value,
    gender: $("#f-gender").value,
    health: $("#f-health").value,
    age2: $("#f-age2").value,
    gender2: $("#f-gender2").value,
    health2: $("#f-health2").value,
    balanceStr: els.balance.value,
    ror: els.ror.value,
    clientState: els.clientState.value,
    heirState: els.heirState.value,
    netWorthStr: els.netWorth.value,
  };
}

function showFormError(msg) {
  els.formError.textContent = msg;
  els.formError.classList.remove("hidden");
}
function clearFormError() {
  els.formError.classList.add("hidden");
  els.formError.textContent = "";
}

let lastResult = null;

els.form.addEventListener("submit", (e) => {
  e.preventDefault();
  clearFormError();

  const f = readForm();
  const joint = f.joint === "two";
  const age = Math.round(Number(f.age));
  const age2 = Math.round(Number(f.age2));
  const balance = parseMoney(f.balanceStr);
  const netWorth = parseMoney(f.netWorthStr);
  const maxA = joint ? 80 : 75;

  if (!(age >= 55 && age <= maxA)) {
    showFormError(`Estimates are available for insureds aged 55 to ${maxA}.`);
    return;
  }
  if (joint && !(age2 >= 55 && age2 <= 80)) {
    showFormError("Estimates are available for insureds aged 55 to 80.");
    return;
  }
  if (balance <= 0) {
    showFormError("Please enter the pre-tax retirement amount intended for heirs.");
    return;
  }

  const inp = {
    age,
    gender: f.gender,
    health: f.health,
    joint,
    age2,
    gender2: f.gender2,
    health2: f.health2,
    balance,
    ror: Number(f.ror) / 100,
    clientState: f.clientState,
    heirState: f.heirState,
    netWorth: netWorth || balance,
    dbInEstate: !!CONFIG.benefitInsideEstate,
    exemption: Number(CONFIG.estateExemption),
  };

  const result = model.project(inp);
  if (!result) {
    showFormError("Pricing is not available for this combination. Please adjust the ages or health class.");
    return;
  }

  localStorage.setItem("lira_intake", JSON.stringify({ f, savedAt: Date.now() }));
  localStorage.setItem("lira_audit_inp", JSON.stringify(inp));

  lastResult = { res: result, f };
  showScreen("calc");
  runCalcAnimation(() => {
    renderResults(lastResult.res, lastResult.f);
    showScreen("results");
  });
});

els.backToIntake.addEventListener("click", () => showScreen("intake"));

// ---------- Advisor assumptions toggle ----------
let advisorOpen = false;
els.advisorToggle.addEventListener("click", () => {
  advisorOpen = !advisorOpen;
  els.advisorBody.classList.toggle("hidden", !advisorOpen);
  els.advisorChevron.textContent = advisorOpen ? "\u2013" : "+";
});

// ---------- Go to analysis request ----------
els.goAnalysis.addEventListener("click", () => {
  if (!lastResult) return;
  localStorage.setItem("lira_intake", JSON.stringify({ f: lastResult.f, savedAt: Date.now() }));
  // default <a href> navigation continues from here
});

// ---------- Results rendering ----------
function pct(x) {
  return (x * 100).toFixed(2).replace(/\.?0+$/, "") + "%";
}

function renderResults(res, f) {
  const fmt = (n) => model.fmtMoney(n);
  const maxN = Math.max(res.bestCurrent, res.lira.net, 1);
  const residualNet = res.lira.net - (res.lira.db - res.lira.dbEstateTax);
  const liraEstateTotal = res.lira.estateTax + res.lira.dbEstateTax;
  const deathLabel = res.joint
    ? `the second death (age ${res.deathAge})`
    : `age ${res.deathAge}`;
  const rorPct = `${Number(f.ror)}%`;
  const heirRatePct = pct(res.heirRate);
  const clientRatePct = pct(res.clientRate);
  const insideEstate = !!CONFIG.benefitInsideEstate;

  $("#r-taxTotal").textContent = fmt(res.current.taxTotal);
  $("#r-taxPct").textContent = model.fmtPct(res.current.taxPct);
  $("#r-deathLabelA").textContent = deathLabel;
  $("#r-deathLabelB").textContent = deathLabel;
  $("#r-advantage").textContent = fmt(res.advantage);
  $("#r-advantage2").textContent = fmt(res.advantage);
  $("#r-bestCurrent").textContent = fmt(res.bestCurrent);
  $("#r-netLira").textContent = fmt(res.lira.net);
  $("#r-netLira2").textContent = fmt(res.lira.net);
  $("#r-rorPct").textContent = rorPct;

  $("#bar-current").style.width = Math.max(2, Math.round((Math.max(res.bestCurrent, 0) / maxN) * 100)) + "%";
  $("#bar-lira").style.width = Math.max(2, Math.round((Math.max(res.lira.net, 0) / maxN) * 100)) + "%";

  $("#r-curBal").textContent = fmt(res.curBal);
  $("#r-grossB").textContent = fmt(res.B.gross);
  $("#r-estateTaxA").textContent = "\u2212" + fmt(res.A.estateTax);
  $("#r-incomeTaxA").textContent = "\u2212" + fmt(res.A.incomeTax);
  $("#r-netA").textContent = fmt(res.A.net);
  $("#r-estateTaxB").textContent = "\u2212" + fmt(res.B.estateTax);
  $("#r-incomeTaxB").textContent = "\u2212" + fmt(res.B.incomeTax);
  $("#r-netB").textContent = fmt(res.B.net);
  $("#r-heirRatePctA").textContent = heirRatePct;
  $("#r-heirRatePctB").textContent = heirRatePct;

  $("#r-db").textContent = fmt(res.db);
  $("#r-dbEstateTax").textContent = "\u2212" + fmt(res.lira.dbEstateTax);
  $("#r-buyout").textContent = fmt(res.buyout);
  $("#r-buyout2").textContent = fmt(res.buyout);
  $("#r-residualNet").textContent = fmt(residualNet);
  $("#r-liraEstateNote").textContent = insideEstate ? "" : " (outside estate)";

  // Comparison table rows
  const rows = [
    { label: "Pre-tax retirement balance", current: fmt(res.current.gross), lira: fmt(res.lira.gross) },
    { label: "Estate tax exposure", current: "\u2212" + fmt(res.current.estateTax), lira: "\u2212" + fmt(liraEstateTotal) },
    { label: "Income tax exposure", current: "\u2212" + fmt(res.current.incomeTax), lira: "\u2212" + fmt(res.lira.incomeTax) },
    { label: "Tax-free death benefit", current: "\u2014", lira: fmt(res.db) },
    { label: "Net to heirs", current: fmt(res.bestCurrent), lira: fmt(res.lira.net) },
  ];
  const rowsHtml = rows
    .map((row, i) => {
      const bg = i === 4 ? "#EFF3E6" : i % 2 ? "#FFFFFF" : "#F7F9F3";
      const bgLira = i === 4 ? "#EFF3E6" : i % 2 ? "#FAFCF7" : "#F2F6EC";
      return `
        <div class="cell" style="background:${bg}">${row.label}</div>
        <div class="cell right" style="background:${bg}">${row.current}</div>
        <div class="cell right lira-col" style="background:${bgLira}">${row.lira}</div>
      `;
    })
    .join("");

  // Rebuild table body (keep header + total row, replace the row content in between)
  els.compTable.innerHTML = `
    <div class="head-blank"></div>
    <div class="head current">Current planning</div>
    <div class="head lira">LIRA strategy</div>
    ${rowsHtml}
    <div class="total-label">Tax-free advantage to heirs</div>
    <div class="total-blank"></div>
    <div class="total-value">${fmt(res.advantage)}</div>
  `;

  // Advisor assumptions copy
  const horizonNote = res.joint
    ? `joint coverage is projected to the later of the two life expectancies (${res.deathYear}).`
    : `projected to age ${res.deathAge} (${res.deathYear}).`;
  $("#adv-p1").textContent =
    `Life expectancy from SSA period life tables by age and gender; ${horizonNote} ` +
    `Required minimum distributions begin at age ${res.startRMD} per the account owner\u2019s birth year, ` +
    `using the IRS Uniform Lifetime Table.`;
  $("#adv-p2").textContent =
    `Heir income tax at the top federal bracket (37%) plus the heir\u2019s state top marginal rate \u2014 combined ${heirRatePct}. ` +
    `Distributions under the 10-year rule are modeled at that bracket; growth within the payout window is excluded for ` +
    `comparability. The owner\u2019s RMDs are taxed at ${clientRatePct} before entering the side fund, which receives a basis ` +
    `step-up. The headline compares the stronger current-plan treatment against the Legacy-IRA Plan\u2122 under the same treatment.`;
  $("#adv-p3").textContent =
    `Estate tax at 40% on modeled dollars above a ${fmt(res.exemption)} federal exemption (other assets held flat). ` +
    `The Legacy-IRA Plan\u2122 benefit is modeled ${insideEstate ? "inside the taxable estate" : "outside the taxable estate, held in a properly structured trust"}. ` +
    `The trust\u2019s policy purchase price is the entered amount times one minus the applicable discount (${pct(res.disc)}); ` +
    `that payment is returned to the retirement account and projected under the same growth and RMD rules.`;
}
