/* ═══════════════════════════════════════════════════
   RAWEA – Lingkar Pertiwi | main.js
   Shared across all pages
   ═══════════════════════════════════════════════════ */

/* ── Navbar scroll effect ────────────────────────── */
const navbar = document.getElementById('navbar');
if (navbar) {
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
  });
  // init on load
  navbar.classList.toggle('scrolled', window.scrollY > 50);
}

/* ── Mobile menu ─────────────────────────────────── */
const burger     = document.getElementById('burger');
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

/* ── Product filter (products.html only) ─────────── */
function filterProducts(cat) {
  const cards   = document.querySelectorAll('#product-grid .product-card');
  const buttons = document.querySelectorAll('.filter-btn');

  if (!cards.length) return;

  cards.forEach(card => {
    const show = cat === 'all' || card.dataset.cat === cat;
    card.style.display = show ? '' : 'none';
  });

  buttons.forEach(btn => {
    btn.classList.toggle('active', btn.dataset.cat === cat);
  });
}

// Init filter on page load
document.addEventListener('DOMContentLoaded', () => {
  const grid = document.getElementById('product-grid');
  if (grid) filterProducts('all');
});

/* ── Contact form (contact.html only) ────────────── */
function submitForm(e) {
  e.preventDefault();
  const successMsg = document.getElementById('form-success');
  if (successMsg) {
    successMsg.classList.remove('hidden');
    e.target.reset();
    // Scroll to success message
    successMsg.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    setTimeout(() => successMsg.classList.add('hidden'), 6000);
  }
}

/* ── FAQ accordion (contact.html only) ──────────── */
function toggleFaq(item) {
  const isOpen = item.classList.contains('open');
  // Close all
  document.querySelectorAll('.faq-item.open').forEach(i => i.classList.remove('open'));
  // Open clicked if it was closed
  if (!isOpen) item.classList.add('open');
}
