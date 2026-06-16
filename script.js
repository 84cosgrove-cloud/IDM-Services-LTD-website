// mobile menu toggle
const mb = document.getElementById('menuBtn');
const nl = document.getElementById('navlinks');
if (mb) {
  mb.addEventListener('click', () => {
    const open = nl.classList.toggle('open');
    mb.setAttribute('aria-expanded', open ? 'true' : 'false');
    mb.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  });
  nl.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    nl.classList.remove('open');
    mb.setAttribute('aria-expanded', 'false');
  }));
}

// footer year
const yr = document.getElementById('yr');
if (yr) yr.textContent = new Date().getFullYear();

const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// animated fibre strand flow (hero)
if (!prefersReduced) {
  document.querySelectorAll('.strand').forEach((s, i) => {
    s.animate(
      [{ backgroundPositionX: '-400px' }, { backgroundPositionX: '400px' }],
      { duration: 7000, iterations: Infinity, delay: i * 600 }
    );
  });
}

// scroll reveal
if (prefersReduced) {
  document.querySelectorAll('.reveal').forEach(el => el.classList.add('in'));
} else {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));
}

// reveal hero immediately on load
window.addEventListener('load', () => {
  document.querySelectorAll('.hero .reveal, .page-head .reveal, .trust-strip').forEach(el => el.classList.add('in'));
});
