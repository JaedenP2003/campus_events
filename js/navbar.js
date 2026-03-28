const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");
const themeToggle = document.getElementById("themeToggle");

function applySavedTheme() {
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    document.documentElement.setAttribute("data-theme", "dark");
    if (themeToggle) {
      themeToggle.textContent = "☀️";
    }
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    if (themeToggle) {
      themeToggle.textContent = "🌙";
    }
  }
}

function setupThemeToggle() {
  if (!themeToggle) return;

  themeToggle.addEventListener("click", () => {
    const currentTheme = document.documentElement.getAttribute("data-theme");

    if (currentTheme === "dark") {
      document.documentElement.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
      themeToggle.textContent = "🌙";
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
      themeToggle.textContent = "☀️";
    }
  });
}

function setupMobileNav() {
  if (!navToggle || !navLinks) return;

  navToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("show");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

function setActiveNavLink() {
  const page = window.location.pathname.split("/").pop() || "index.html";
  const navAnchors = document.querySelectorAll(".nav-links a");

  navAnchors.forEach((link) => {
    const href = link.getAttribute("href");
    if (href === page) {
      link.classList.add("active");
    }
  });
}

applySavedTheme();
setupThemeToggle();
setupMobileNav();
setActiveNavLink();