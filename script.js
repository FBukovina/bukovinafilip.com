// ── Theme toggle ────────────────────────────────────────────────────────────
(function () {
  const STORAGE_KEY = "theme";
  const html = document.documentElement;
  const btn = document.getElementById("themeToggle");

  // Initialise from localStorage, then system preference, then default light
  function getPreferred() {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "dark" || stored === "light") return stored;
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }

  function applyTheme(theme) {
    html.setAttribute("data-theme", theme);
    if (btn) btn.setAttribute("aria-pressed", theme === "dark" ? "true" : "false");
  }

  // Apply on load (before paint to avoid flash)
  applyTheme(getPreferred());

  if (btn) {
    btn.addEventListener("click", function () {
      const next = html.getAttribute("data-theme") === "dark" ? "light" : "dark";
      applyTheme(next);
      localStorage.setItem(STORAGE_KEY, next);
    });
  }

  // Sync if system preference changes while page is open
  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", function (e) {
      // Only follow system if user hasn't manually chosen
      if (!localStorage.getItem(STORAGE_KEY)) {
        applyTheme(e.matches ? "dark" : "light");
      }
    });
})();

// ── Footer year ──────────────────────────────────────────────────────────────
(function () {
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();
