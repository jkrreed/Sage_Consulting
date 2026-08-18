// Shared access-gate logic — same pattern as the Sage Calculator's
// password screen. The overlay markup itself lives at the top of each
// page's <body> (so it's part of the very first paint, no flash of
// unprotected content). This module just wires up the password check.
//
// Entering the password once unlocks every page for the rest of the
// browser session (sessionStorage), so people don't have to re-enter it
// going between the estimator and the analysis request form.
//
// NOTE: this is a client-side gate only, same caveat as the Sage
// Calculator gate — it stops casual access, not someone determined
// enough to read the page source. Don't rely on it for anything
// truly sensitive.

const PASSWORD = "coker2";
const SESSION_KEY = "lira_gate_unlocked";

const gate = document.getElementById("lira-gate");
if (gate) {
  if (sessionStorage.getItem(SESSION_KEY) === "1") {
    gate.remove();
  } else {
    const input = document.getElementById("lira-gate-input");
    const btn = document.getElementById("lira-gate-btn");
    const errMsg = document.getElementById("lira-gate-error");

    function attempt() {
      if (input.value.toLowerCase().trim() === PASSWORD) {
        sessionStorage.setItem(SESSION_KEY, "1");
        gate.remove();
      } else {
        input.classList.add("error");
        errMsg.textContent = "Incorrect password. Please try again.";
        input.value = "";
        setTimeout(() => input.classList.remove("error"), 400);
      }
    }
    btn.addEventListener("click", attempt);
    input.addEventListener("keydown", (e) => {
      if (e.key === "Enter") attempt();
    });
    input.focus();
  }
}
