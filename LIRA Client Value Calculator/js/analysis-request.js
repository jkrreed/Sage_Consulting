// Analysis Request — page controller

import * as model from "./lira-model.js";
import { mountFooter } from "./footer.js";

const CONFIG = { calendlyUrl: "https://calendly.com/" };

const $ = (sel) => document.querySelector(sel);

mountFooter(document.getElementById("footer-mount"));
$("#go-meeting-confirm").href = CONFIG.calendlyUrl;

function money(s) {
  const n = parseFloat(String(s).replace(/[^0-9.]/g, ""));
  return isNaN(n) || !n ? "\u2014" : model.fmtMoney(n);
}

function renderSummary() {
  const strip = $("#summary-strip");
  let it = null;
  try {
    it = JSON.parse(localStorage.getItem("lira_intake") || "null");
    it = it && it.f ? it.f : null;
  } catch (e) {
    it = null;
  }

  let items = [];
  if (it) {
    const joint = it.joint === "two";
    items.push({
      k: joint ? "First insured" : "Client",
      v: `${it.gender === "F" ? "Female" : "Male"}, ${it.age}, ${it.health === "S" ? "Standard" : "Preferred"}`,
    });
    if (joint) {
      items.push({
        k: "Second insured",
        v: `${it.gender2 === "M" ? "Male" : "Female"}, ${it.age2}, ${it.health2 === "S" ? "Standard" : "Preferred"}`,
      });
    }
    items.push({ k: "Retirement assets for heirs", v: money(it.balanceStr) });
    items.push({ k: "Assumed return", v: `${it.ror}%` });
    items.push({ k: "Client state", v: model.STATE_NAMES[it.clientState] || it.clientState });
    items.push({ k: "Heir state", v: model.STATE_NAMES[it.heirState] || it.heirState });
    items.push({ k: "Estate value", v: money(it.netWorthStr) });
  } else {
    items = [{ k: "Estimator inputs", v: "None found \u2014 you can still submit; our team will gather the basics with you." }];
  }

  strip.innerHTML = items
    .map((s) => `<div class="item"><span class="k">${s.k}</span><span class="v">${s.v}</span></div>`)
    .join("");
}
renderSummary();

$("#request-form").addEventListener("submit", (e) => {
  e.preventDefault();
  // NOTE: this demo submission only stores the confirmation state locally.
  // Wire this up to your CRM / lead-routing endpoint before going live —
  // see "Open to-do items" in LIRA Estimator Reed.md.
  $("#request-form").classList.add("hidden");
  $("#confirm-panel").classList.remove("hidden");
  window.scrollTo(0, 0);
});
