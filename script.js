// ── Scroll throttle helper (16ms ≈ 60fps cap) ──
function throttle(fn, ms) {
  let last = 0;
  return function() {
    let now = Date.now();
    if (now - last >= ms) { last = now; fn.apply(this, arguments); }
  };
}

// ── Toast helper ──
function showToast(msg, duration) {
  let toast = document.getElementById('copy-toast');
  if (!toast) return;
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(function() { toast.classList.remove('show'); }, duration);
}

// ── Locale helper ──
function isSpanish() {
  return typeof currentLocale !== 'undefined' && currentLocale === 'es';
}

// ── Timing constants ──
const TOAST_OK_MS      = 3000;  // toast after successful clipboard copy
const TOAST_FALLBACK_MS = 5000; // toast when clipboard unavailable
const FAQ_AUTO_CLOSE_MS = 15000; // FAQ modal auto-close delay
const TERMINAL_ROTATE_MS = 3000;
const COUNTER_LONG_MS  = 1400; // counter animation for numbers > 100
const COUNTER_SHORT_MS = 900;  // counter animation for numbers ≤ 100
const WA_NUMBER = atob('NTczMTM2NDU5Mjk5'); // WhatsApp — single source of truth  // terminal line rotation interval

// translations object → translations.js (loaded before this file)


// DOM references
const langButtons = document.querySelectorAll('[data-lang-toggle]');
const metaDescription = document.querySelector('meta[name="description"]');
const ogTitle = document.querySelector('meta[property="og:title"]');
const ogDescription = document.querySelector('meta[property="og:description"]');
const ogLocale = document.querySelector('meta[property="og:locale"]');
const waFloatEl = document.querySelector('.wa-float');

let currentLocale = localStorage.getItem('portfolio-lang') || 'en';
let prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
let terminalTimer = null;

// Terminal animation — single implementation
function startTerminal(locale) {
  const stream = document.querySelector('.terminal-stream');
  if (!stream) return;
  const lines = translations[locale] && translations[locale].terminalLines;
  if (!lines) return;
  if (terminalTimer) { clearInterval(terminalTimer); terminalTimer = null; }
  let index = 0;
  function render() {
    stream.replaceChildren();
    for (let i = 0; i < 4; i++) {
      let pre = document.createElement('pre');
      pre.textContent = lines[(index + i) % lines.length];
      stream.appendChild(pre);
    }
    index = (index + 1) % lines.length;
  }
  render();
  if (!prefersReducedMotion) terminalTimer = setInterval(render, TERMINAL_ROTATE_MS);
}

// Locale
function applyLocale(locale) {
  const copy = translations[locale] || translations.en;
  Object.entries(copy.selectors).forEach((entry) => {
    document.querySelectorAll(entry[0]).forEach((node) => {
      if (node.dataset.html) node.innerHTML = entry[1]; else node.textContent = entry[1];
    });
  });
  if (copy.placeholders) {
    Object.entries(copy.placeholders).forEach((entry) => {
      let node = document.querySelector(entry[0]);
      if (node) node.placeholder = entry[1];
    });
  }
  document.documentElement.lang = locale === 'es' ? 'es' : 'en';
  document.title = copy.documentTitle;
  if (metaDescription) metaDescription.setAttribute('content', copy.metaDescription);
  if (ogTitle) ogTitle.setAttribute('content', copy.ogTitle);
  if (ogDescription) ogDescription.setAttribute('content', copy.ogDescription);
  if (ogLocale) ogLocale.setAttribute('content', locale === 'es' ? 'es_CO' : 'en_US');
  langButtons.forEach((btn) => {
    let active = btn.dataset.langToggle === locale;
    btn.classList.toggle('is-active', active);
    btn.setAttribute('aria-pressed', active ? 'true' : 'false');
  });
  startTerminal(locale);
  const waFloat = waFloatEl; // cached at init
  if (waFloat) {
    const waNum = WA_NUMBER;
    let waMsg = locale === 'es'
      ? 'Hola Daniel, me interesa conocer más sobre tus servicios de pentesting.'
      : 'Hi Daniel, I\'m interested in learning more about your pentesting services.';
    waFloat.href = 'https://wa.me/' + waNum + '?text=' + encodeURIComponent(waMsg);
  }

  // ── Dynamic aria-label updates ──
  let svcAriaEN = {
    pentest_web:'Select Web App Pentest, from $3,000',
    pentest_ad:'Select Active Directory Pentest, from $5,000',
    ai_llm:'Select AI / LLM Security, from $3,500',
    pentest_ai:'Select Network Pentest, from $3,500'
  };
  let svcAriaES = {
    pentest_web:'Seleccionar Pentest Web App, desde $3,000',
    pentest_ad:'Seleccionar Pentest Active Directory, desde $5,000',
    ai_llm:'Seleccionar Seguridad AI / LLM, desde $3,500',
    pentest_ai:'Seleccionar Pentest de Redes, desde $3,500'
  };
  let svcAriaMap = locale==='es' ? svcAriaES : svcAriaEN;
  document.querySelectorAll('.qc-svc-card[data-svc]').forEach((btn) => {
    let lbl = svcAriaMap[btn.dataset.svc]; if (lbl) btn.setAttribute('aria-label', lbl);
  });
  let tglAriaEN = {
    'small':'Scope: Small, 1 to 5 targets','medium':'Scope: Medium, 6 to 15 targets','large':'Scope: Large, 15 or more targets',
    'low':'Complexity: Standard, common tech stack','medium-cplx':'Complexity: Custom, proprietary logic','high':'Complexity: Enterprise, complex or hybrid',
    'black':'Testing type: Black-box, no prior access','grey':'Testing type: Grey-box, partial credentials','white':'Testing type: White-box, full access and code'
  };
  let tglAriaES = {
    'small':'Alcance: Peque\u00f1o, 1 a 5 objetivos','medium':'Alcance: Mediano, 6 a 15 objetivos','large':'Alcance: Grande, 15 o m\u00e1s objetivos',
    'low':'Complejidad: Est\u00e1ndar, stack com\u00fan','medium-cplx':'Complejidad: Personalizado, l\u00f3gica propietaria','high':'Complejidad: Empresarial, complejo o h\u00edbrido',
    'black':'Modalidad: Caja negra, sin acceso previo','grey':'Modalidad: Caja gris, credenciales parciales','white':'Modalidad: Caja blanca, acceso completo y c\u00f3digo'
  };
  let tglMap = locale==='es' ? tglAriaES : tglAriaEN;
  document.querySelectorAll('.qc-toggle[data-scope]').forEach((b) => {let k=tglMap[b.dataset.scope];if(k)b.setAttribute('aria-label',k);});
  document.querySelectorAll('.qc-toggle[data-cplx]').forEach((b) => {let k=b.dataset.cplx==='medium'?tglMap['medium-cplx']:tglMap[b.dataset.cplx];if(k)b.setAttribute('aria-label',k);});
  document.querySelectorAll('.qc-toggle[data-tbox]').forEach((b) => {let k=tglMap[b.dataset.tbox];if(k)b.setAttribute('aria-label',k);});
  let termBtn = document.getElementById('terminal-toggle-btn');
  if (termBtn) termBtn.setAttribute('aria-label', locale==='es'?'Alternar panel de estado':'Toggle status panel');
  let emailLink = document.querySelector('[data-contact]');
  if (emailLink && emailLink.getAttribute('role')==='button') emailLink.setAttribute('aria-label', locale==='es'?'Copiar correo al portapapeles':'Copy email address to clipboard');
    localStorage.setItem('portfolio-lang', locale);
  if(typeof window.recalc==='function')window.recalc();
}

langButtons.forEach((btn) => {
  btn.addEventListener('click', function() {
    currentLocale = btn.dataset.langToggle || 'en';
    applyLocale(currentLocale);
    window.dispatchEvent(new CustomEvent('localechange', { detail: { locale: currentLocale } }));
  });
});

applyLocale(currentLocale);

// Auto-update copyright year
function initCopyrightYear() { let el = document.getElementById('cy'); if (el) el.textContent = new Date().getFullYear(); }
initCopyrightYear();


// Restore obfuscated contact links from data attributes
function initContactBindings() {
  document.querySelectorAll('[data-contact]').forEach((el) => {
    let decoded = '';
    try { decoded = atob(el.dataset.contact || ''); } catch(e) { return; }
    if (decoded.startsWith('tel:')) {
      // Phone: native dialer is correct on mobile
      el.href = decoded;
    } else {
      // Email: use clipboard — avoids OS mailto: / login redirects
      el.setAttribute('href', '#');
      el.setAttribute('role', 'button');
      el.setAttribute('aria-label', (currentLocale==='es')?'Copiar correo al portapapeles':'Copy email address to clipboard');
      let email = decoded.replace(/^mailto:/, '');
      el.addEventListener('click', function(e) {
        e.preventDefault();
        let toast = document.getElementById('copy-toast');
        if (navigator.clipboard && window.isSecureContext) {
          navigator.clipboard.writeText(email).then(function() {
            showToast((currentLocale==='es'?'✓ Correo copiado: ':'✓ Email copied: ') + email, TOAST_OK_MS);
          }).catch(function() {
            // Fallback: show email inline
            showToast(email, TOAST_FALLBACK_MS);
          });
        } else {
          showToast(email, TOAST_FALLBACK_MS);
        }
      });
    }
  });
}
initContactBindings();

// Contact form — Formspree AJAX handler
function initContactForm() {
  let form = document.getElementById('contact-form');
  let btn  = document.getElementById('cf-submit');
  let status = document.getElementById('cf-status');
  if (!form || !btn || !status) return;

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    if (btn.disabled) return;

    // Client-side validation
    let name    = form.querySelector('#cf-name').value.trim();
    let email   = form.querySelector('#cf-email').value.trim();
    let message = form.querySelector('#cf-message').value.trim();
    let emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    let msgs = (translations[currentLocale] || translations.en).formMessages || {};
    if (!name || !email || !message) {
      status.textContent = msgs.requiredFields || 'Please fill in all fields.';
      status.className = 'cf-status error';
      return;
    }
    if (!emailRe.test(email)) {
      status.textContent = msgs.invalidEmail || 'Please enter a valid email address.';
      status.className = 'cf-status error';
      return;
    }

    // Submit
    btn.classList.add('loading');
    btn.disabled = true;
    status.textContent = '';
    status.className = 'cf-status';

    let data = new FormData(form);
    fetch(form.action, {
      method: 'POST',
      body: data,
      headers: { 'Accept': 'application/json' }
    })
    .then(function(res) {
      btn.classList.remove('loading');
      btn.disabled = false;
      if (res.ok) {
        status.textContent = ((translations[currentLocale]||translations.en).formMessages||{}).success||'✓ Message sent!';
        status.className = 'cf-status success';
        form.reset();
      } else {
        return res.json().then(function(data) {
          let msgs2=(translations[currentLocale]||translations.en).formMessages||{};
          let msg = (data&&data.errors)?data.errors.map(function(e){return e.message;}).join(', '):(msgs2.submitFailed||'Submission failed.');
          status.textContent = msg;
          status.className = 'cf-status error';
        });
      }
    })
    .catch(function() {
      btn.classList.remove('loading');
      btn.disabled = false;
      status.textContent=((translations[currentLocale]||translations.en).formMessages||{}).networkError||'Network error.';
      status.className = 'cf-status error';
    });
  });
}
initContactForm();


// Scroll reveal — fade+slide cards and elements into view
function initCounterAnimation() {
  if (!window.IntersectionObserver || prefersReducedMotion) return;
  let els = [];
  document.querySelectorAll('.card, .mini-card, .social-link').forEach((el) => {
    if (!el.closest('.hero')) {
      el.classList.add('reveal');
      els.push(el);
    }
  });
  let io = new IntersectionObserver(function(entries) {
    // Group by parent to stagger siblings
    let groups = new Map();
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      let p = e.target.parentElement || document.body;
      if (!groups.has(p)) groups.set(p, []);
      groups.get(p).push(e.target);
    });
    groups.forEach((siblings) => {
      siblings.forEach((el, i) => {
        if (i > 0 && i <= 3) el.setAttribute('data-delay', i);
        el.classList.add('is-visible');
        // Also trigger section-tag scan animation
        let tag = el.querySelector('.section-tag');
        if (tag) tag.classList.add('tag-animate');
        io.unobserve(el);
      });
    });
  }, { threshold: 0.05, rootMargin: '0px 0px -20px 0px' });
  els.forEach((el) => { io.observe(el); });
}
initCounterAnimation();


// Animated stat counters for quick-stats numbers
function initScrollReveal() {
  if (!window.IntersectionObserver || prefersReducedMotion) return;
  document.querySelectorAll('.quick-stats strong').forEach((el) => {
    let raw = el.textContent.trim();
    let num = parseInt(raw, 10);
    if (isNaN(num)) return; // Skip "Top 1%" etc.
    el.textContent = '0';
    let done = false;
    let io = new IntersectionObserver(function(entries) {
      entries.forEach((e) => {
        if (!e.isIntersecting || done) return;
        done = true;
        io.unobserve(e.target);
        let start = null;
        let duration = num > 100 ? COUNTER_LONG_MS : COUNTER_SHORT_MS;
        function step(ts) {
          if (!start) start = ts;
          let p = Math.min((ts - start) / duration, 1);
          let v = Math.round((1 - Math.pow(1 - p, 3)) * num);
          e.target.textContent = v;
          if (p < 1) requestAnimationFrame(step);
        }
        requestAnimationFrame(step);
      });
    }, { threshold: 0.6 });
    io.observe(el);
  });
}
initScrollReveal();


// Scroll progress
function updateScrollProgress() {
  try {
    const bar = document.querySelector('.progress-bar');
    if (!bar) return;
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const pct = scrollable > 0 ? Math.min(100, Math.max(0, window.scrollY / scrollable * 100)) : 0;
    bar.style.width = pct + '%';
  } catch(e) { console.error('[Scroll Progress]:', e); }
}

// Active nav highlight
function initActiveNav() {
  let navLinks = document.querySelectorAll('.topnav a');
  let sections = Array.from(document.querySelectorAll('main section[id]'));
  if (!navLinks.length || !sections.length) return;
  function setActive(id) {
    navLinks.forEach((link) => {
      link.classList.toggle('active', link.getAttribute('href') === '#' + id);
    });
  }
  let visible = new Set();
  let io = new IntersectionObserver(function(entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) visible.add(entry.target.id);
      else visible.delete(entry.target.id);
    });
    // Highlight the topmost visible section that has a nav link
    for (let i = 0; i < sections.length; i++) {
      if (visible.has(sections[i].id) &&
          document.querySelector('.topnav a[href="#' + sections[i].id + '"]')) {
        setActive(sections[i].id);
        return;
      }
    }
  }, { rootMargin: '-60px 0px -30% 0px', threshold: 0 });
  sections.forEach((sec) => { io.observe(sec); });
}

// Smooth scroll for nav links
document.querySelectorAll('.topnav a').forEach((a) => {
  a.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href && href.startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) target.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth', block: 'start' });
    }
  });
});

window.addEventListener('scroll', throttle(function() {
  updateScrollProgress();
}, 16), { passive: true });



window.matchMedia('(prefers-reduced-motion: reduce)').addEventListener('change', function(e) {
  prefersReducedMotion = e.matches;
  if (prefersReducedMotion && typeof terminalTimer !== 'undefined') clearInterval(terminalTimer);
});

// Back to top
function initBackToTop() {
  const btn = document.querySelector('.back-to-top');
  if (!btn) return;
  window.addEventListener('scroll', throttle(function() {
    btn.classList.toggle('visible', window.scrollY > 400);
  }, 16), { passive: true });
  btn.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: prefersReducedMotion ? 'auto' : 'smooth' });
  });
}
initBackToTop();






// Service Worker registration
if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/sw.js').catch(function(e) { console.warn('[SW] Registration failed:', e); });
  });
}


// ── HAMBURGER MENU ────────────────────────────
function initHamburgerMenu() {
  let topbar = document.getElementById('topbar');
  let btn = topbar && topbar.querySelector('.nav-toggle');
  if (!topbar || !btn) return;
  let links = topbar.querySelectorAll('.topnav a');

  function close() {
    topbar.classList.remove('nav-open');
    btn.setAttribute('aria-expanded', 'false');
  }
  btn.addEventListener('click', function() {
    let open = topbar.classList.toggle('nav-open');
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  links.forEach((a) => { a.addEventListener('click', close); });
  document.addEventListener('click', function(e) {
    if (!topbar.contains(e.target)) close();
  });
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') close();
  });
}
initHamburgerMenu();


// ── TERMINAL TOGGLE (mobile) ──────────────────
function initTerminalToggle() {
  let terminal = document.querySelector('.hero-panel.terminal');
  let btn = terminal && terminal.querySelector('.terminal-toggle');
  if (!terminal || !btn) return;

  function setOpen(open) {
    terminal.classList.toggle('is-open', open);
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
  }
  // Collapsed by default on mobile
  setOpen(window.innerWidth > 767);
  btn.addEventListener('click', function() {
    setOpen(!terminal.classList.contains('is-open'));
  });
}
initTerminalToggle();




/* ── Konami Code + Matrix Rain Easter Egg ── */
function initKonamiEasterEgg() {
  let KONAMI = ['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a'];
  let idx = 0;

  document.addEventListener('keydown', function(e) {
    let k = e.key.length === 1 ? e.key.toLowerCase() : e.key;
    if (k === KONAMI[idx]) {
      idx++;
      if (idx === KONAMI.length) { idx = 0; triggerMatrix(); }
    } else {
      idx = k === KONAMI[0] ? 1 : 0;
    }
  });

  function triggerMatrix() {
    // Overlay
    let overlay = document.createElement('div');
    overlay.id = 'matrix-overlay';
    overlay.style.cssText = [
      'position:fixed','inset:0','z-index:9999',
      'background:#000','display:flex',
      'flex-direction:column','align-items:center',
      'justify-content:center','cursor:pointer'
    ].join(';');

    // Canvas
    let canvas = document.createElement('canvas');
    canvas.style.cssText = 'position:absolute;inset:0;width:100%;height:100%';
    overlay.appendChild(canvas);

    // Access Granted message
    let msg = document.createElement('div');
    msg.style.cssText = [
      'position:relative','z-index:2','text-align:center',
      'font-family:"JetBrains Mono",monospace','color:#00ff41',
      'text-shadow:0 0 20px #00ff41,0 0 40px #00ff41',
      'animation:glitch 0.4s infinite alternate'
    ].join(';');
    msg.innerHTML = [
      '<div style="font-size:clamp(2rem,8vw,4rem);font-weight:700;letter-spacing:0.15em;">ACCESS GRANTED</div>',
      '<div style="font-size:clamp(0.8rem,2vw,1.1rem);margin-top:16px;opacity:0.8;">Welcome, ' + ((navigator.userAgentData&&navigator.userAgentData.platform||navigator.platform||'Unknown') || 'Unknown') + ' operator</div>',
      '<div style="font-size:clamp(0.7rem,1.5vw,0.9rem);margin-top:8px;opacity:0.6;">[ click or press ESC to exit ]</div>'
    ].join('');
    overlay.appendChild(msg);

    // Add glitch keyframes once
    if (!document.getElementById('matrix-style')) {
      let st = document.createElement('style');
      st.id = 'matrix-style';
      st.textContent = '@keyframes glitch{0%{text-shadow:0 0 20px #00ff41,0 0 40px #00ff41;transform:translate(0)}50%{text-shadow:-2px 0 #ff0000,2px 0 #0000ff,0 0 30px #00ff41;transform:translate(-1px,1px)}100%{text-shadow:2px 0 #ff0000,-2px 0 #0000ff,0 0 20px #00ff41;transform:translate(1px,-1px)}}';
      document.head.appendChild(st);
    }

    document.body.appendChild(overlay);
    document.body.style.overflow = 'hidden';

    // Matrix rain
    let ctx = canvas.getContext('2d');
    function resize() {
      canvas.width  = overlay.offsetWidth;
      canvas.height = overlay.offsetHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    let cols   = Math.floor(canvas.width / 16);
    let drops  = Array.from({length: cols}, function() { return Math.random() * -50 | 0; });
    let CHARS  = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*<>/\\|[]{}アイウエオカキクケコサシスセソタチツテトナニヌネノ';

    let raf;
    function draw() {
      ctx.fillStyle = 'rgba(0,0,0,0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.font = '14px "JetBrains Mono", monospace';
      for (let i = 0; i < drops.length; i++) {
        let ch = CHARS[Math.random() * CHARS.length | 0];
        let bright = Math.random() > 0.95;
        ctx.fillStyle = bright ? '#ffffff' : '#00ff41';
        ctx.fillText(ch, i * 16, drops[i] * 16);
        if (drops[i] * 16 > canvas.height && Math.random() > 0.975) drops[i] = 0;
        drops[i]++;
      }
      raf = requestAnimationFrame(draw);
    }
    draw();

    function close() {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
      if (overlay.parentNode) overlay.parentNode.removeChild(overlay);
      document.body.style.overflow = '';
    }

    overlay.addEventListener('click', close);
    document.addEventListener('keydown', function esc(e) {
      if (e.key === 'Escape') { close(); document.removeEventListener('keydown', esc); }
    });

    // Auto-close after 15s
    setTimeout(close, FAQ_AUTO_CLOSE_MS);
  }
}
initKonamiEasterEgg();


// 3D Tilt effect on cards
function initMotionObserver() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  if ('ontouchstart' in window) return;

  let STRENGTH = 7;

  function initTilt(card) {
    let glare = document.createElement('div');
    glare.style.cssText = 'position:absolute;inset:0;border-radius:inherit;pointer-events:none;opacity:0;transition:opacity 200ms ease;z-index:1';
    card.appendChild(glare);

    card.style.transformStyle = 'preserve-3d';
    card.style.transition = 'transform 100ms ease';
    card.style.willChange = 'transform';

    function onMove(e) {
      let rect = card.getBoundingClientRect();
      let x = (e.clientX - rect.left) / rect.width  - 0.5;
      let y = (e.clientY - rect.top)  / rect.height - 0.5;
      let rotY =  x * STRENGTH * 2;
      let rotX = -y * STRENGTH * 2;
      card.style.transform = 'perspective(900px) rotateX('+rotX+'deg) rotateY('+rotY+'deg) scale3d(1.012,1.012,1.012)';
      let gx = Math.round((x + 0.5) * 100);
      let gy = Math.round((y + 0.5) * 100);
      glare.style.background = 'radial-gradient(circle at '+gx+'% '+gy+'%, rgba(255,255,255,0.035), transparent 65%)';
      glare.style.opacity = '1';
    }

    function onLeave() {
      card.style.transition = 'transform 500ms ease';
      card.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)';
      glare.style.opacity = '0';
    }

    card.addEventListener('mousemove', onMove);
    card.addEventListener('mouseleave', onLeave);
  }

  function attachAll() {
    document.querySelectorAll('.card').forEach((c) => {
      if (c.closest('.hero') || c.classList.contains('terminal')) return;
      initTilt(c);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', attachAll);
  } else {
    attachAll();
  }
}
initMotionObserver();




/* ── Custom Crosshair Cursor ── */
function initCursorEffect() {
  if (!window.matchMedia('(pointer: fine)').matches) return;
  let dot  = document.querySelector('.cursor-dot');
  let ring = document.querySelector('.cursor-ring');
  if (!dot || !ring) return;

  let mx = -200, my = -200, rx = -200, ry = -200;
  let rafId = null;

  function animateRing() {
    rx += (mx - rx) * 0.14;
    ry += (my - ry) * 0.14;
    ring.style.left = rx + 'px';
    ring.style.top  = ry + 'px';
    // Keep looping only while ring hasn't converged (> 0.5px away from target)
    if (Math.abs(mx - rx) > 0.5 || Math.abs(my - ry) > 0.5) {
      rafId = requestAnimationFrame(animateRing);
    } else {
      rafId = null;
    }
  }

  function startLoop() {
    if (!rafId && !document.hidden) {
      rafId = requestAnimationFrame(animateRing);
    }
  }

  document.addEventListener('mousemove', function(e) {
    mx = e.clientX; my = e.clientY;
    dot.style.left = mx + 'px';
    dot.style.top  = my + 'px';
    startLoop();
  });

  // Pause when tab is hidden, resume on return
  document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
      if (rafId) { cancelAnimationFrame(rafId); rafId = null; }
    } else {
      startLoop();
    }
  });

  let hoverTargets = 'a,button,[role="button"],input,textarea,select,label,.mini-card,.social-link,.lang-button';
  document.addEventListener('mouseover', function(e) {
    if (e.target.closest(hoverTargets)) document.body.classList.add('cursor-hovering');
  });
  document.addEventListener('mouseout', function(e) {
    if (e.target.closest(hoverTargets)) document.body.classList.remove('cursor-hovering');
  });
  document.addEventListener('mousedown', function() { document.body.classList.add('cursor-clicking'); });
  document.addEventListener('mouseup',   function() { document.body.classList.remove('cursor-clicking'); });
  document.addEventListener('mouseleave', function() { dot.style.opacity='0'; ring.style.opacity='0'; });
  document.addEventListener('mouseenter', function() { dot.style.opacity='1'; ring.style.opacity='1'; });
}
initCursorEffect();


/* ── Quote Calculator v4 ─────────────────────────────────── */
function initQuoteCalculator() {
  'use strict';

  const PRICES = {
    pentest_web: { name:'Web App Pentest',nameEs:'Pentest de Aplicación Web',  base:[3000,6000], scope:{small:1.0,medium:1.55,large:2.3}, cplx:{low:1.0,medium:1.45,high:2.0}, tbox:{black:1.0,grey:1.2,white:1.45} },
    pentest_ad:     { name:'Active Directory',nameEs:'Directorio Activo',    base:[5000,9500], scope:{small:1.0,medium:1.4, large:2.0}, cplx:{low:1.0,medium:1.35,high:1.85}, tbox:{black:1.0,grey:1.2,white:1.45} },
    ai_llm:          { name:'AI / LLM Security',nameEs:'Seguridad AI / LLM',               base:[3500,8000],   scope:{small:1.0,medium:1.3, large:1.8}, cplx:{low:1.0,medium:1.25,high:1.6},  tbox:{black:1.0,grey:1.15,white:1.35} },
    pentest_ai:      { name:'Network Pentest',nameEs:'Pentest de Redes', base:[3500,8000],  scope:{small:1.0,medium:1.4, large:2.0}, cplx:{low:1.0,medium:1.35,high:1.85}, tbox:{black:1.0,grey:1.2,white:1.45} }
  };
  let ADDONS_EN = {};
  let ADDONS_ES = {};
  let SCOPE_LABELS_EN = { small:'Small · 1–5', medium:'Medium · 6–15', large:'Large · 15+' };
  let SCOPE_LABELS_ES = { small:'Pequeño · 1–5', medium:'Mediano · 6–15', large:'Grande · 15+' };
  let CPLX_LABELS_EN  = { low:'Standard', medium:'Custom', high:'Enterprise' };
  let CPLX_LABELS_ES  = { low:'Estándar', medium:'Personalizado', high:'Empresarial' };
  let TBOX_LABELS_EN  = { black:'Black-box', grey:'Grey-box', white:'White-box' };
  let TBOX_LABELS_ES  = { black:'Caja negra', grey:'Caja gris', white:'Caja blanca' };
  let SCOPE_SETS = {
    pentest_web:      { small:'1–5 pages/endpoints', medium:'6–15 pages/endpoints', large:'15+ pages/endpoints' },
    pentest_ad:       { small:'1–3 hosts',           medium:'4–10 hosts',           large:'10+ hosts'           },
    ai_llm:          { small:'1–3 AI integrations', medium:'4–8 AI integrations', large:'Full AI system'       },
    pentest_ai:       { small:'1–10 IPs/hosts',    medium:'11–50 IPs/hosts',       large:'50+ IPs/hosts'         }
  };
  let SCOPE_SETS_ES = {
    pentest_web:     { small:'1–5 páginas/endpoints', medium:'6–15 páginas/endpoints', large:'15+ páginas/endpoints' },
    pentest_ad:      { small:'1–3 hosts', medium:'4–10 hosts', large:'10+ hosts' },
    ai_llm:          { small:'1–3 integ. IA',    medium:'4–8 integ. IA',    large:'Sistema IA completo' },
    pentest_ai:      { small:'1–10 IPs/hosts',    medium:'11–50 IPs/hosts',       large:'50+ IPs/hosts'         }
  };

  let DURATIONS = {
    pentest_web:     { small:'3–5 days',  medium:'1–2 weeks', large:'2–3 weeks' },
    pentest_ad:      { small:'1 week',         medium:'1–2 weeks', large:'2–3 weeks' },
    ai_llm:          { small:'3–5 days',  medium:'1 week',         large:'2 weeks'        },
    pentest_ai:      { small:'3–5 days',  medium:'1–2 weeks', large:'2–3 weeks' }
  };
  let DURATIONS_ES = {
    pentest_web:     { small:'3–5 días',  medium:'1–2 semanas', large:'2–3 semanas' },
    pentest_ad:      { small:'1 semana',              medium:'1–2 semanas', large:'2–3 semanas' },
    ai_llm:          { small:'3–5 días',  medium:'1 semana',           large:'2 semanas'     },
    pentest_ai:      { small:'3–5 días',  medium:'1–2 semanas', large:'2–3 semanas' }
  };

  function fmt(n) { return '$' + Math.round(n).toLocaleString('en-US'); }

  function recalc() {
    const isSp = isSpanish(); // cached — avoids 7 separate calls
    let ADDONS = isSp ? ADDONS_ES : ADDONS_EN;
    let SCOPE_LABELS = isSp ? SCOPE_LABELS_ES : SCOPE_LABELS_EN;
    let CPLX_LABELS  = isSp ? CPLX_LABELS_ES  : CPLX_LABELS_EN;
    let TBOX_LABELS  = isSp ? TBOX_LABELS_ES  : TBOX_LABELS_EN;
    let svcBtn   = document.querySelector('.qc-svc-card.active');
    let scopeBtn = document.querySelector('.qc-toggle[data-scope].active');
    let cplxBtn  = document.querySelector('.qc-toggle[data-cplx].active');
    let tboxBtn  = document.querySelector('.qc-toggle[data-tbox].active');
    if (!svcBtn || !scopeBtn || !cplxBtn) return;

    let svc = svcBtn.dataset.svc, scope = scopeBtn.dataset.scope, cplx = cplxBtn.dataset.cplx, tbox = tboxBtn ? tboxBtn.dataset.tbox : 'black';
    let p = PRICES[svc]; if (!p) return;
    let mn = p.base[0] * (p.scope[scope]||1) * (p.cplx[cplx]||1) * (p.tbox[tbox]||1);
    let mx = p.base[1] * (p.scope[scope]||1) * (p.cplx[cplx]||1) * (p.tbox[tbox]||1);

    let addonMult = 1, addonTags = [];
    document.querySelectorAll('.qc-chip.active').forEach((btn) => {
      let a = ADDONS[btn.dataset.addon]; if (a) { addonMult += a.pct; addonTags.push(a.label); }
    });
    mn *= addonMult; mx *= addonMult;

    let el = function(id) { return document.getElementById(id); };
    if (el('q-min')) el('q-min').textContent = fmt(mn);
    if (el('q-max')) el('q-max').textContent = fmt(mx);
    if (el('q-unit')) el('q-unit').textContent = 'USD' + (p.unit||'');
    if (el('qc-bar')) {
      let svcMax = p.base[1] * (p.scope['large']||1) * (p.cplx['high']||1) * 1.7;
      el('qc-bar').style.width = Math.min(92,Math.max(8,(mn / svcMax)*100)).toFixed(1)+'%';
    }
    let ss = (isSp?SCOPE_SETS_ES:SCOPE_SETS)[svc];
    if (ss) {
      (_qcScopeToggles || document.querySelectorAll('.qc-toggle[data-scope]')).forEach((btn) => {
        let s = btn.dataset.scope, small2 = btn.querySelector('small');
        if (small2 && ss[s]) small2.textContent = ss[s];
      });
    }
    if (el('qr-svc-name')) el('qr-svc-name').textContent = (isSp&&p.nameEs)?p.nameEs:p.name;
    if (el('qr-scope')) el('qr-scope').textContent = SCOPE_LABELS[scope]||scope;
    if (el('qr-cplx')) el('qr-cplx').textContent = CPLX_LABELS[cplx]||cplx;
    if (el('qr-tbox')) el('qr-tbox').textContent = TBOX_LABELS[tbox]||tbox;
    let durMap = (isSp?DURATIONS_ES:DURATIONS)[svc];
    if (durMap && el('qr-duration')) el('qr-duration').textContent = durMap[scope] || '1–2 weeks';
    if (el('qr-duration-key')) el('qr-duration-key').textContent = isSp ? 'Duración' : 'Duration';
    let row = el('qr-addons-row'), tags = el('qr-addons-tags');
    if (row && tags) {
      if (addonTags.length) {
        tags.innerHTML = addonTags.map(function(t){return '<span class="qc-addon-tag">'+t+'</span>';}).join('');
        row.style.display = 'flex';
      } else { row.style.display = 'none'; }
    }
  }

  function activate(group, clicked) {
    document.querySelectorAll(group).forEach((b) => { b.classList.remove('active'); });
    clicked.classList.add('active');
    document.querySelectorAll(group).forEach((b) => {b.setAttribute('aria-pressed',b===clicked?'true':'false');});
    
    recalc();
  }

  function ready(fn) {
    if (document.readyState !== 'loading') { fn(); }
    else { document.addEventListener('DOMContentLoaded', fn); }
  }

  // Cached NodeLists for static QC toggle buttons (assigned once on ready)
  let _qcSvcCards, _qcScopeToggles, _qcCplxToggles, _qcTboxToggles;

  ready(function() {
    _qcSvcCards     = document.querySelectorAll('.qc-svc-card');
    _qcScopeToggles = document.querySelectorAll('.qc-toggle[data-scope]');
    _qcCplxToggles  = document.querySelectorAll('.qc-toggle[data-cplx]');
    _qcTboxToggles  = document.querySelectorAll('.qc-toggle[data-tbox]');
    // Event delegation: one listener for all calculator toggle buttons
    const _qcContainer = document.getElementById('quote');
    if (_qcContainer) {
      _qcContainer.addEventListener('click', function(e) {
        const btn = e.target.closest('.qc-svc-card, .qc-toggle[data-scope], .qc-toggle[data-cplx], .qc-toggle[data-tbox]');
        if (btn.classList.contains('qc-svc-card'))          activate('.qc-svc-card', btn);
        else if (btn.dataset.scope !== undefined)            activate('.qc-toggle[data-scope]', btn);
        else if (btn.dataset.cplx  !== undefined)            activate('.qc-toggle[data-cplx]', btn);
        else if (btn.dataset.tbox  !== undefined)            activate('.qc-toggle[data-tbox]', btn);
      });
    }
    document.querySelectorAll('.qc-chip').forEach((btn) => {
      btn.addEventListener('click', function() { btn.classList.toggle('active'); recalc(); });
    });
    recalc();

    // Testing type help button toggle
    let helpBtn = document.getElementById('qc-tbox-help-btn');
    let helpPanel = document.getElementById('qc-tbox-info');
    if (helpBtn && helpPanel) {
      helpBtn.addEventListener('click', function() {
        let isOpen = helpPanel.classList.toggle('open');
        helpBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      });
      // Close panel when user selects a testing type
      document.querySelectorAll('.qc-toggle[data-tbox]').forEach((btn) => {
        btn.addEventListener('click', function() {
          helpPanel.classList.remove('open');
          helpBtn.setAttribute('aria-expanded', 'false');
        });
      });
    }

    // service-cta cards on the services section pre-select calc
    document.querySelectorAll('.service-cta[data-select]').forEach((link) => {
      link.addEventListener('click', function() {
        let svc = link.dataset.select;
        let card = document.querySelector('.qc-svc-card[data-svc="'+svc+'"]');
        if (card) { activate('.qc-svc-card', card); }
      });
    });

    // CTA button opens WhatsApp with the selected service pre-filled
    let mainCta = document.getElementById('qc-main-cta');
    if (mainCta) {
      mainCta.addEventListener('click', function(e) {
        e.preventDefault();
        let svcBtn = document.querySelector('.qc-svc-card.active');
        let scopeBtn = document.querySelector('.qc-toggle[data-scope].active');
        let cplxBtn  = document.querySelector('.qc-toggle[data-cplx].active');
        let tboxBtn  = document.querySelector('.qc-toggle[data-tbox].active');
        let minEl = document.getElementById('q-min');
        let maxEl = document.getElementById('q-max');
        const waNum = WA_NUMBER;
        let svcName = '';
        if (svcBtn && minEl && maxEl) {
          svcName = (function(p){return (currentLocale==='es'&&p.nameEs)?p.nameEs:p.name;})(PRICES[svcBtn.dataset.svc]||{}) || svcBtn.dataset.svc;
        }
        let scopeStrong = scopeBtn && scopeBtn.querySelector('strong');
        let cplxStrong  = cplxBtn  && cplxBtn.querySelector('strong');
        let tboxStrong  = tboxBtn  && tboxBtn.querySelector('strong');
        let waMsg;
        if (currentLocale === 'es') {
          let scopeSummaryEs = scopeStrong ? scopeStrong.textContent : scope;
          let cplxSummaryEs  = cplxStrong  ? cplxStrong.textContent  : cplx;
          let tboxSummaryEs  = tboxStrong  ? tboxStrong.textContent  : tbox;
          waMsg = svcName
            ? 'Hola Daniel, me interesa el servicio de ' + svcName + ' — alcance ' + scopeSummaryEs + ', complejidad ' + cplxSummaryEs + ', tipo ' + tboxSummaryEs + ' (' + minEl.textContent + ' – ' + maxEl.textContent + ' USD). ¿Podemos coordinar una llamada de alcance?'
            : 'Hola Daniel, me interesa coordinar una llamada de alcance para un pentest.';
        } else {
          let scopeSummaryEn = scopeStrong ? scopeStrong.textContent : scope;
          let cplxSummaryEn  = cplxStrong  ? cplxStrong.textContent  : cplx;
          let tboxSummaryEn  = tboxStrong  ? tboxStrong.textContent  : tbox;
          waMsg = svcName
            ? 'Hi Daniel, I\'m interested in ' + svcName + ' — ' + scopeSummaryEn + ' scope, ' + cplxSummaryEn + ' complexity, ' + tboxSummaryEn + '-box (' + minEl.textContent + ' – ' + maxEl.textContent + ' USD). Can we schedule a scoping call?'
            : 'Hi Daniel, I\'d like to schedule a free scoping call.';
        }
        window.open('https://wa.me/' + waNum + '?text=' + encodeURIComponent(waMsg), '_blank', 'noopener,noreferrer');
      });
    }
  });
  window.recalc = recalc;
}
initQuoteCalculator();


// ── GA4 Event Tracking ──────────────────────────────────────────────────────
function initGATracking() {
  function gtagEvent(eventName, params) {
    if (typeof gtag === 'function') gtag('event', eventName, params);
  }

  // DOM ready guaranteed by defer attribute


  // Initial scroll state
  updateScrollProgress();
  initActiveNav();


  // HTB transcript download
  let htbBtn = document.getElementById('hero-htb-btn');
  if (htbBtn) htbBtn.addEventListener('click', function() {
    gtagEvent('file_download', { file_name: 'htb-academy-student-transcript.pdf', link_text: 'Verified by HTB Academy' });
  });

  // Case study report downloads
  document.querySelectorAll('a[href*="assets/reports/"]').forEach((link) => {
    link.addEventListener('click', function() {
      gtagEvent('file_download', { file_name: link.getAttribute('href'), link_text: link.textContent.trim() });
    });
  });

  // WhatsApp float button
  const waFloat = waFloatEl; // cached at init
  if (waFloat) waFloat.addEventListener('click', function() {
    gtagEvent('contact', { method: 'whatsapp', link_id: 'wa-float' });
  });

  // Calculator CTA → WhatsApp
  let calcCta = document.getElementById('qc-main-cta');
  if (calcCta) calcCta.addEventListener('click', function() {
    let svcBtn = document.querySelector('.qc-svc-card.active');
    gtagEvent('generate_lead', {
      method: 'whatsapp_calculator',
      service: svcBtn ? svcBtn.dataset.svc : 'unknown'
    });
  });

  // Hero scoping call CTA
  let heroCta = document.querySelector('.hero-actions .button.primary');
  if (heroCta) heroCta.addEventListener('click', function() {
    gtagEvent('generate_lead', { method: 'hero_cta' });
  });

  // Contact form submit
  let contactForm = document.querySelector('form[action*="formspree"]');
  if (contactForm) contactForm.addEventListener('submit', function() {
    gtagEvent('form_submit', { form_id: 'contact', method: 'formspree' });
  });

  // Language switch
  document.querySelectorAll('.lang-button').forEach((btn) => {
    btn.addEventListener('click', function() {
      gtagEvent('language_switch', { language: btn.dataset.lang || btn.textContent.trim() });
    });
  });

  // See pricing CTA
  let pricingCta = document.getElementById('see-pricing-cta');
  if (pricingCta) pricingCta.addEventListener('click', function() {
    gtagEvent('select_content', { content_type: 'section', item_id: 'pricing' });
  });

  // LinkedIn / GitHub / HTB social clicks
  document.querySelectorAll('.social-link, .footer-socials a').forEach((link) => {
    link.addEventListener('click', function() {
      gtagEvent('click', { link_url: link.href, link_id: link.getAttribute('aria-label') || link.href });
    });
  });

  // FAQ expand tracking
  document.querySelectorAll('.faq-q').forEach((btn) => {
    btn.addEventListener('click', function() {
      if (btn.getAttribute('aria-expanded') === 'false') {
        let textEl = btn.querySelector('span:not(.faq-num)');
        let qText = textEl ? textEl.textContent.trim() : btn.id;
        gtagEvent('select_content', { content_type: 'faq', item_id: qText.substring(0, 60) });
      }
    });
  });

  }
initGATracking();


// ── FAQ Accordion ─────────────────────────────────────────────────────────────
function initFAQAccordion() {
  // Translations for FAQ section
  const faqTranslations = {
    en: {
      tag: '[ FAQ ]',
      heading: 'Frequently asked questions',
      copy: 'Everything you need to know before booking a scoping call.',
      nav: 'FAQ',
      groups: ['Services', 'Pricing', 'Process', 'Credentials'],
      // items indexed 1-8 matching faq-q{n}-text / faq-a{n}-text IDs
      items: [
        { q: 'What penetration testing services do you offer?',
          a: 'Web application penetration testing, Active Directory security assessments, network infrastructure pentests, and AI / LLM security assessments. All engagements are remote-first, include a detailed PDF report and a free re-test after fixes.' },
        { q: 'Are you certified as a penetration tester?',
          a: 'I have completed the CPTS, CDSA, CJCA and CWEE paths on HTB Academy and rank in the Top 1% globally on Hack The Box with 658 targets compromised. I also hold the IBM Cybersecurity Analyst and Google Cybersecurity Professional certificates.' },
        { q: 'How much does a penetration test cost?',
          a: 'An AI / LLM Security Assessment starts from $3,500 USD, a web app pentest from $3,000, a network pentest from $3,500, and an Active Directory pentest from $5,000. Use the pricing calculator above for an instant estimate.' },
        { q: 'What does a pentest report include?',
          a: 'Every report includes an executive summary, detailed technical findings with evidence, CVSS risk ratings, reproducible proof-of-concept steps, and prioritized remediation recommendations. A free re-test is included to verify fixes.' },
        { q: 'Do you work remotely and with international clients?',
          a: 'Yes. I am based in Colombia and fully available for remote engagements worldwide. I work in both English and Spanish. Most engagements are conducted remotely with no disruption to your production environment.' },
        { q: 'How long does a penetration test take?',
          a: 'Most engagements complete in 1–3 weeks from the scoping call to the final report. An AI / LLM security assessment for focused integrations can be delivered in 3–5 days. Timeline is agreed and fixed in the written proposal before any work begins.' },
        { q: 'Is the first call free? What happens during it?',
          a: 'Yes, the scoping call is free and carries no commitment. In 30 minutes we define your environment, agree on targets and rules of engagement, and determine the right service. You receive a written proposal with a fixed price afterwards.' },
        { q: 'What is network penetration testing?',
          a: 'Network penetration testing is an offensive security assessment of your external and internal infrastructure — servers, firewalls, routers, and services — to identify misconfigurations, open ports, exploitable vulnerabilities, and lateral movement paths before a real attacker does.' },
        { q: 'What happens if you find a critical vulnerability during the engagement?',
          a: 'I report it immediately — you don\'t wait for the final report. Critical and high-severity findings are communicated as soon as they are confirmed, so your team can begin remediation while the engagement is still active. Everything is documented in the final report regardless.' }
      ]
    },
    es: {
      tag: '[ FAQ ]',
      heading: 'Preguntas frecuentes',
      copy: 'Todo lo que necesitas saber antes de agendar una llamada de alcance.',
      nav: 'FAQ',
      groups: ['Servicios', 'Precios', 'Proceso', 'Credenciales'],
      items: [
        { q: '¿Qué servicios de pentesting ofreces?',
          a: 'Pentest de aplicaciones web, evaluaciones de Active Directory, pentests de infraestructura de red y evaluaciones de seguridad AI / LLM. Todos los proyectos son remotos, incluyen un reporte PDF detallado y un re-test gratuito después de las correcciones.' },
        { q: '¿Estás certificado como pentester?',
          a: 'Completé los paths CPTS, CDSA, CJCA y CWEE en HTB Academy y estoy en el Top 1% global de Hack The Box con 658 objetivos comprometidos. También cuento con los certificados de IBM Cybersecurity Analyst y Google Cybersecurity Professional.' },
        { q: '¿Cuánto cuesta un pentest?',
          a: 'Una evaluación de seguridad AI / LLM parte desde $3,500 USD, un pentest de aplicación web desde $3,000, un pentest de red desde $3,500 y un pentest de Active Directory desde $5,000. Usa la calculadora de precios para obtener una estimación al instante.' },
        { q: '¿Qué incluye un informe de pentest?',
          a: 'Cada reporte incluye un resumen ejecutivo, hallazgos técnicos detallados con evidencia, clasificación de riesgos CVSS, pasos de explotación reproducibles y recomendaciones de remediación priorizadas. Se incluye un re-test gratuito para verificar las correcciones.' },
        { q: '¿Trabajas de forma remota y con clientes internacionales?',
          a: 'Sí. Estoy basado en Colombia y disponible para proyectos remotos en todo el mundo. Trabajo en inglés y español. La mayoría de los proyectos se realizan de forma remota sin interrupciones en tu entorno de producción.' },
        { q: '¿Cuánto tiempo tarda un pentest?',
          a: 'La mayoría de los proyectos se completan en 1–3 semanas desde la llamada de alcance hasta el informe final. Una evaluación de seguridad AI / LLM para integraciones puntuales puede entregarse en 3–5 días. El cronograma se acuerda y fija por escrito antes de comenzar.' },
        { q: '¿La primera llamada es gratuita? ¿Qué sucede en ella?',
          a: 'Sí, la llamada de alcance es gratuita y sin compromiso. En 30 minutos definimos tu entorno, acordamos objetivos y reglas de engagement, y determinamos el servicio adecuado. Recibes una propuesta escrita con precio fijo después.' },
        { q: '¿Qué es el pentesting de redes?',
          a: 'Es una evaluación de seguridad ofensiva de tu infraestructura externa e interna — servidores, firewalls, routers y servicios — para identificar configuraciones incorrectas, puertos abiertos, vulnerabilidades explotables y rutas de movimiento lateral antes de que lo haga un atacante real.' },
        { q: '¿Qué pasa si encuentras una vulnerabilidad crítica durante el pentest?',
          a: 'La reporto de inmediato — no tienes que esperar al informe final. Los hallazgos críticos y de alta severidad se comunican en cuanto se confirman, para que tu equipo pueda comenzar la remediación mientras el proyecto sigue activo. Todo queda documentado en el informe final.' }
      ]
    }
  };

  function applyFaqLocale(locale) {
    // faqTranslations is a standalone const — can be moved into translations.faq in a future refactor
    let t = faqTranslations[locale] || faqTranslations.en;
    let tag = document.getElementById('faq-tag');
    let heading = document.getElementById('faq-heading');
    let copy = document.getElementById('faq-copy');
    let navLink = document.querySelector('.topnav a[href="#faq"]');
    if (tag) tag.textContent = t.tag;
    if (heading) heading.textContent = t.heading;
    if (copy) copy.textContent = t.copy;
    if (navLink) navLink.textContent = t.nav;
    // Question and answer text
    t.items.forEach((item, i) => {
      let n = i + 1;
      let qEl = document.getElementById('faq-q' + n + '-text');
      let aEl = document.getElementById('faq-a' + n + '-text');
      if (qEl) qEl.textContent = item.q;
      if (aEl) aEl.textContent = item.a;
    });
  }

  function initFaqAccordion() {
    let faqBtns = document.querySelectorAll('.faq-q');
    faqBtns.forEach((btn) => {
      btn.addEventListener('click', function() {
        let expanded = btn.getAttribute('aria-expanded') === 'true';
        let answerId = btn.getAttribute('aria-controls');
        let wrap = document.getElementById(answerId);

        // Close all others
        faqBtns.forEach((other) => {
          if (other !== btn) {
            other.setAttribute('aria-expanded', 'false');
            let otherWrap = document.getElementById(other.getAttribute('aria-controls'));
            if (otherWrap) otherWrap.classList.remove('faq-open');
          }
        });

        // Toggle current
        btn.setAttribute('aria-expanded', String(!expanded));
        if (wrap) {
          if (expanded) {
            wrap.classList.remove('faq-open');
          } else {
            wrap.classList.add('faq-open');
          }
        }
      });
    });
  }

  // DOM ready guaranteed by defer attribute

  initFaqAccordion();
  // Hook into language switcher
  let locale = (typeof currentLocale !== 'undefined') ? currentLocale : 'en';
  applyFaqLocale(locale);
  
  // Re-apply when language changes
  window.addEventListener('localechange', function(e) {
    applyFaqLocale(e.detail.locale);
  });
}
initFAQAccordion();

