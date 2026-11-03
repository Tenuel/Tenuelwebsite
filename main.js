/* ============================================================
   AMINE PORTFOLIO — main.js
   ============================================================ */

/* ===== ACTIVE NAV LINK ===== */
function setActiveNav() {
  const page = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === page);
  });
}

/* ============================================================
   3-D ROTATING PHOTO CAROUSEL
   ============================================================ */
function initCarousel() {
  const stage = document.getElementById('carousel-stage');
  if (!stage) return;

  const cards  = Array.from(stage.querySelectorAll('.c-card'));
  const total  = cards.length;
  const radius = 200;          // distance from centre (px)
  let   angle  = 0;            // current Y-rotation in degrees
  let   speed  = 0.35;         // degrees per frame
  let   paused = false;
  let   raf;

  /* --- position cards evenly around the circle --- */
  cards.forEach((card, i) => {
    const theta = (360 / total) * i;
    card.style.transform =
      `rotateY(${theta}deg) translateZ(${radius}px)`;
  });

  /* --- animation loop --- */
  function tick() {
    if (!paused) {
      angle += speed;
      stage.style.transform = `rotateY(${angle}deg)`;
    }
    raf = requestAnimationFrame(tick);
  }
  tick();

  /* --- pause / resume button --- */
  const ctrl = document.getElementById('carousel-ctrl');
  if (ctrl) {
    ctrl.addEventListener('click', () => {
      paused = !paused;
      ctrl.textContent = paused ? '▶ Resume' : '⏸ Pause';
    });
  }

  /* --- drag to spin --- */
  let drag = false, startX = 0, startAngle = 0;

  stage.addEventListener('mousedown', e => {
    drag = true; startX = e.clientX; startAngle = angle;
    paused = true;
    if (ctrl) ctrl.textContent = '▶ Resume';
  });
  window.addEventListener('mousemove', e => {
    if (!drag) return;
    const delta = e.clientX - startX;
    angle = startAngle + delta * 0.4;
    stage.style.transform = `rotateY(${angle}deg)`;
  });
  window.addEventListener('mouseup', () => { drag = false; });

  /* touch */
  stage.addEventListener('touchstart', e => {
    drag = true; startX = e.touches[0].clientX; startAngle = angle;
    paused = true;
    if (ctrl) ctrl.textContent = '▶ Resume';
  }, { passive: true });
  window.addEventListener('touchmove', e => {
    if (!drag) return;
    const delta = e.touches[0].clientX - startX;
    angle = startAngle + delta * 0.4;
    stage.style.transform = `rotateY(${angle}deg)`;
  }, { passive: true });
  window.addEventListener('touchend', () => { drag = false; });
}

/* ============================================================
   AVATAR DROP + FLOAT (home only — main photo)
   ============================================================ */
function initAvatarDrop() {
  const front = document.querySelector('.avatar-drop');
  if (!front) return;

  /* drop on load */
  front.style.animation = 'none';
  front.offsetHeight;                                  // force reflow
  front.style.animation = 'dropIn 1.15s cubic-bezier(.36,.07,.19,.97) .25s both';

  /* float after drop lands */
  setTimeout(() => {
    front.style.animation = 'float 3.6s ease-in-out infinite';
  }, 1700);
}

/* ============================================================
   ANIMATED SKILL BARS (about page)
   ============================================================ */
function initSkillBars() {
  const bars = document.querySelectorAll('.skill-bar-fill');
  if (!bars.length) return;
  setTimeout(() => {
    bars.forEach(b => { b.style.width = b.dataset.width; });
  }, 300);
}

/* ============================================================
   PROJECT FILTER (projects page)
   ============================================================ */
function initProjectFilter() {
  const btns = document.querySelectorAll('.filter-btn');
  if (!btns.length) return;

  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      btns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;
      document.querySelectorAll('.project-card').forEach(card => {
        const show = filter === 'all' || card.dataset.cat === filter;
        card.style.opacity       = show ? '1'     : '0.18';
        card.style.transform     = show ? 'scale(1)' : 'scale(0.96)';
        card.style.transition    = 'opacity .3s, transform .3s';
        card.style.pointerEvents = show ? 'auto'  : 'none';
      });
    });
  });
}

/* ============================================================
   CONTACT FORM (contact page)
   ============================================================ */
function initContactForm() {
  const btn = document.getElementById('send-btn');
  if (!btn) return;
  btn.addEventListener('click', () => showToast('✅ Message sent! I\'ll get back to you soon.'));
}

/* ============================================================
   TOAST NOTIFICATION
   ============================================================ */
function showToast(msg) {
  let t = document.getElementById('toast');
  if (!t) {
    t = document.createElement('div');
    t.id = 'toast'; t.className = 'toast';
    document.body.appendChild(t);
  }
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 3500);
}

/* ============================================================
   BOOT
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  setActiveNav();
  initCarousel();
  initAvatarDrop();
  initSkillBars();
  initProjectFilter();
  initContactForm();
});