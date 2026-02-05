// animasi konten (punyamu)
const elements = document.querySelectorAll(".animate");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle("show", entry.isIntersecting);
    });
  },
  { threshold: 0.2 }
);
elements.forEach((el) => observer.observe(el));

// parallax background (WAJIB kalau mau smooth)
const bg = document.querySelector(".bg");

let current = 0;
let target = 0;

function parallax() {
  target = window.scrollY * 0.15;     // speed bg (lebih kecil = lebih pelan)
  current += (target - current) * 0.08; // smoothing
  bg.style.transform = `translate3d(0, ${-current}px, 0)`;
  requestAnimationFrame(parallax);
}

parallax();

const header = document.querySelector(".site-header");
const menuBtn = document.querySelector(".menu-btn");

// efek header saat scroll
window.addEventListener("scroll", () => {
  header.classList.toggle("is-scrolled", window.scrollY > 10);
});

// toggle menu (mobile)
menuBtn?.addEventListener("click", () => {
  const isOpen = header.classList.toggle("menu-open");
  menuBtn.setAttribute("aria-expanded", String(isOpen));
});

const cursor = document.querySelector(".cursor");
const follower = document.querySelector(".cursor-follower");

let mouseX = 0, mouseY = 0;
let posX = 0, posY = 0;

document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;

  cursor.style.left = mouseX + "px";
  cursor.style.top = mouseY + "px";
});

function animateCursor() {
  posX += (mouseX - posX) * 0.12;
  posY += (mouseY - posY) * 0.12;

  follower.style.left = posX + "px";
  follower.style.top = posY + "px";

  requestAnimationFrame(animateCursor);
}

animateCursor();

const hoverTargets = document.querySelectorAll("a, button");

hoverTargets.forEach(el => {
  el.addEventListener("mouseenter", () => {
    document.body.classList.add("cursor-hover");
  });

  el.addEventListener("mouseleave", () => {
    document.body.classList.remove("cursor-hover");
  });
});

const hero = document.querySelector(".hero");

hero.addEventListener("mouseenter", () => {
  follower.style.width = "80px";
  follower.style.height = "80px";
});

hero.addEventListener("mouseleave", () => {
  follower.style.width = "36px";
  follower.style.height = "36px";
});