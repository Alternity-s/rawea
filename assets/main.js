/* ═══════════════════════════════════════════════════
   RAWEA – Lingkar Pertiwi | main.js
   ═══════════════════════════════════════════════════ */

/* ── Navbar scroll effect ── */
const navbar = document.getElementById('navbar');
if (navbar) {
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
  });
  navbar.classList.toggle('scrolled', window.scrollY > 50);
}

/* ── Mobile menu ── */
const burger = document.getElementById('burger');
const mobileMenu = document.getElementById('mobile-menu');
let menuOpen = false;

if (burger && mobileMenu) {
  burger.addEventListener('click', () => {
    menuOpen = !menuOpen;
    mobileMenu.classList.toggle('open', menuOpen);
    burger.setAttribute('aria-expanded', menuOpen);
  });
}

function closeMenu() {
  menuOpen = false;
  if (mobileMenu) mobileMenu.classList.remove('open');
  if (burger) burger.setAttribute('aria-expanded', false);
}