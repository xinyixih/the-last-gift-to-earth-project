// The Last Gift to Earth — site interactions
document.documentElement.classList.add("js");

document.addEventListener("DOMContentLoaded", () => {
  // ---------- Mobile menu ----------
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.getElementById("site-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const open = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!open));
      nav.classList.toggle("open", !open);
    });
  }

  // ---------- "Toolkit Steps" dropdown (click / keyboard) ----------
  document.querySelectorAll(".has-dropdown").forEach((item) => {
    const btn = item.querySelector(".dropdown-toggle");
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const open = item.classList.toggle("open");
      btn.setAttribute("aria-expanded", String(open));
    });
  });
  document.addEventListener("click", (e) => {
    document.querySelectorAll(".has-dropdown.open").forEach((item) => {
      if (!item.contains(e.target)) {
        item.classList.remove("open");
        item.querySelector(".dropdown-toggle").setAttribute("aria-expanded", "false");
      }
    });
  });
  document.addEventListener("keydown", (e) => {
    if (e.key !== "Escape") return;
    document.querySelectorAll(".has-dropdown.open").forEach((item) => item.classList.remove("open"));
    if (toggle && nav && nav.classList.contains("open")) {
      nav.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.focus();
    }
  });

  // ---------- Checklist with saved progress ----------
  const STORAGE_KEY = "lastgift-checklist";
  const boxes = document.querySelectorAll("[data-check]");
  if (boxes.length) {
    let saved = {};
    try { saved = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {}; } catch (_) { saved = {}; }

    const bar = document.querySelector("[data-progress-bar]");
    const text = document.querySelector("[data-progress-text]");
    const update = () => {
      const done = [...boxes].filter((b) => b.checked).length;
      if (bar) bar.style.width = `${(done / boxes.length) * 100}%`;
      if (text) text.textContent = `${done} of ${boxes.length}`;
    };
    const persist = () => {
      const state = {};
      boxes.forEach((b) => { if (b.checked) state[b.dataset.check] = true; });
      try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch (_) { /* storage unavailable */ }
    };

    boxes.forEach((b) => {
      b.checked = !!saved[b.dataset.check];
      b.addEventListener("change", () => { persist(); update(); });
    });

    const reset = document.querySelector("[data-reset-checklist]");
    if (reset) reset.addEventListener("click", () => {
      boxes.forEach((b) => (b.checked = false));
      persist(); update();
    });
    update();
  }

  // ---------- Fade-in on scroll ----------
  const reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    reveals.forEach((el) => io.observe(el));
  } else {
    reveals.forEach((el) => el.classList.add("is-visible"));
  }

  // ---------- Footer year ----------
  document.querySelectorAll("[data-year]").forEach((el) => (el.textContent = new Date().getFullYear()));
});
