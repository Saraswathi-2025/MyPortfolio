// ================================
// 🌸 Saraswathi | Portfolio Script
// ================================

// Welcome message (soft toast instead of alert)
window.addEventListener("load", () => {
  const toast = document.createElement("div");
  toast.textContent = "👋 Welcome to Saraswathi’s Portfolio!";
  toast.style.position = "fixed";
  toast.style.bottom = "30px";
  toast.style.right = "30px";
  toast.style.background = "linear-gradient(90deg, #007bff, #00c6ff)";
  toast.style.color = "white";
  toast.style.padding = "12px 20px";
  toast.style.borderRadius = "8px";
  toast.style.boxShadow = "0 4px 12px rgba(0,0,0,0.2)";
  toast.style.zIndex = "9999";
  toast.style.fontWeight = "600";
  toast.style.opacity = "0";
  toast.style.transition = "opacity 0.6s ease";
  document.body.appendChild(toast);
  setTimeout(() => (toast.style.opacity = "1"), 200);
  setTimeout(() => toast.remove(), 4000);
});

// ================================
// ✨ Typing effect for tagline
// ================================
const text = "BCA Graduate | Computer Instructor | Aspiring Web Developer";
let index = 0;

function typeEffect() {
  const tagline = document.querySelector(".tagline");
  if (index < text.length) {
    tagline.textContent += text.charAt(index);
    index++;
    setTimeout(typeEffect, 80); // typing speed
  }
}

window.addEventListener("load", () => {
  const tagline = document.querySelector(".tagline");
  tagline.textContent = "";
  typeEffect();
});

// ================================
// 🌈 Shrinking Navbar on Scroll
// ================================
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  navbar.classList.toggle("shrink", window.scrollY > 50);
});

// ================================
// ⬆ Back to Top button
// ================================
const backBtn = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  backBtn.classList.toggle("show", window.scrollY > 300);
});

backBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// ================================
// 🌟 Reveal elements on scroll
// ================================
const reveals = document.querySelectorAll(".reveal");
const revealObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

reveals.forEach((el) => revealObserver.observe(el));
// ================================
// 🌗 Dark/Light Mode Toggle
// ================================
const themeToggle = document.getElementById("themeToggle");
const root = document.documentElement;

// Load saved theme
const savedTheme = localStorage.getItem("theme") || "light";
if (savedTheme === "dark") {
  root.setAttribute("data-theme", "dark");
  themeToggle.textContent = "☀️";
} else {
  root.removeAttribute("data-theme");
  themeToggle.textContent = "🌙";
}

// Switch theme on click
themeToggle.addEventListener("click", () => {
  const isDark = root.getAttribute("data-theme") === "dark";
  if (isDark) {
    root.removeAttribute("data-theme");
    localStorage.setItem("theme", "light");
    themeToggle.textContent = "🌙";
  } else {
    root.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
    themeToggle.textContent = "☀️";
  }
});
// ===== Smart Navbar Hide/Show with Hover Control =====
let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');
let isHovering = false;

// Scroll behavior: hide when scrolling down, show when scrolling up
window.addEventListener("scroll", () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (!isHovering) {
    if (scrollTop > lastScrollTop && scrollTop > 150) {
      navbar.style.transform = "translateY(-100%)"; // hide
    } else {
      navbar.style.transform = "translateY(0)"; // show
    }
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

// Show navbar when mouse near top of screen
document.addEventListener("mousemove", (e) => {
  if (e.clientY <= 20) {
    navbar.style.transform = "translateY(0)";
    isHovering = true;
  } else if (isHovering && e.clientY > 80) {
    navbar.style.transform = "translateY(-100%)";
    isHovering = false;
  }
});