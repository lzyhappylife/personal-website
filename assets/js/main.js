// 主题切换（本地持久化）
(function () {
  const saved = localStorage.getItem("theme");
  if (saved === "dark") {
    document.documentElement.setAttribute("data-theme", "dark");
  }
})();

const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");

function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  themeIcon.textContent = theme === "dark" ? "☀️" : "🌙";
  localStorage.setItem("theme", theme);
}

themeToggle.addEventListener("click", () => {
  const current =
    document.documentElement.getAttribute("data-theme") === "dark"
      ? "dark"
      : "light";
  applyTheme(current === "dark" ? "light" : "dark");
});

applyTheme(
  document.documentElement.getAttribute("data-theme") === "dark"
    ? "dark"
    : "light"
);

// 移动端菜单
const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("open");
});

navMenu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("open");
  });
});

// 页脚年份
document.getElementById("year").textContent = new Date().getFullYear();


/* Motion layer */
document.documentElement.classList.add("js-ready");

const revealItems = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -36px" }
  );
  revealItems.forEach((item) => revealObserver.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}

const scrollProgress = document.getElementById("scrollProgress");
let progressQueued = false;

function updateScrollProgress() {
  if (!scrollProgress) return;
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const progress = scrollable > 0 ? window.scrollY / scrollable : 0;
  scrollProgress.style.width = `${Math.min(progress, 1) * 100}%`;
}

window.addEventListener(
  "scroll",
  () => {
    if (progressQueued) return;
    progressQueued = true;
    window.requestAnimationFrame(() => {
      updateScrollProgress();
      progressQueued = false;
    });
  },
  { passive: true }
);
updateScrollProgress();

document.querySelectorAll("[data-spotlight]").forEach((card) => {
  card.addEventListener("pointermove", (event) => {
    const rect = card.getBoundingClientRect();
    card.style.setProperty("--x", `${event.clientX - rect.left}px`);
    card.style.setProperty("--y", `${event.clientY - rect.top}px`);
  });

  card.addEventListener("pointerleave", () => {
    card.style.removeProperty("--x");
    card.style.removeProperty("--y");
  });
});
