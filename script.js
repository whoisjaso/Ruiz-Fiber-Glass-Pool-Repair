document.documentElement.classList.add("js");

const header = document.querySelector("[data-header]");
const menuToggle = document.querySelector("[data-menu-toggle]");
const siteNav = document.querySelector("[data-site-nav]");
const estimateForm = document.querySelector("[data-estimate-form]");
const beforeAfter = document.querySelector("[data-before-after]");
const beforeAfterToggle = document.querySelector("[data-before-after-toggle]");
const year = document.querySelector("[data-year]");

if (year) {
  year.textContent = new Date().getFullYear();
}

if (header) {
  const updateHeader = () => {
    header.classList.toggle("is-scrolled", window.scrollY > 8);
  };
  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });
}

if (menuToggle && siteNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  siteNav.addEventListener("click", (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      siteNav.classList.remove("is-open");
      menuToggle.setAttribute("aria-expanded", "false");
    }
  });
}

if (estimateForm) {
  estimateForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const success = estimateForm.querySelector(".form-success");
    if (success) {
      success.hidden = false;
      success.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
    estimateForm.reset();
  });
}

if (beforeAfter && beforeAfterToggle) {
  beforeAfterToggle.addEventListener("click", () => {
    const isAfter = beforeAfter.classList.toggle("is-after");
    beforeAfterToggle.textContent = isAfter ? "Show before" : "Show after";
  });
}

const revealItems = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}
