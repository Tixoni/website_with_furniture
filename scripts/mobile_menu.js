/* ================= MOBILE MENU & SCROLL TOP — PRACTICE 5 ================= */

// Create overlay
const overlay = document.createElement('div');
overlay.className = 'nav-overlay';
document.body.appendChild(overlay);

// Elements
const nav = document.querySelector('nav');
const navLinks = document.querySelectorAll('.nav-menu a');
const scrollTopBtn = document.getElementById('scrollTop');

// Toggle menu
function toggleMenu() {
    nav.classList.toggle('active');
    overlay.classList.toggle('active');
    document.body.style.overflow =
        nav.classList.contains('active') ? 'hidden' : '';
}

// Open menu by clicking logo area (fallback)
document.querySelector('.header_top').addEventListener('click', (e) => {
    if (window.innerWidth <= 768 && e.target.tagName === 'IMG') {
        toggleMenu();
    }
});

// Close menu
overlay.addEventListener('click', toggleMenu);

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 768) toggleMenu();
    });
});

// ESC key support
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && nav.classList.contains('active')) {
        toggleMenu();
    }
});

// Scroll to top
window.addEventListener('scroll', () => {
    scrollTopBtn.classList.toggle('visible', window.scrollY > 300);
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
