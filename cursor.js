(function () {
  'use strict';

  var CURSOR_RING_LERP = 0.14;

  if (!window.matchMedia('(pointer: fine)').matches) return;

  var dot = document.querySelector('.cursor-dot');
  var ring = document.querySelector('.cursor-ring');
  if (!dot || !ring) return;

  var mx = -200;
  var my = -200;
  var rx = -200;
  var ry = -200;
  var rafId = null;

  function animateRing() {
    rx += (mx - rx) * CURSOR_RING_LERP;
    ry += (my - ry) * CURSOR_RING_LERP;
    ring.style.left = rx + 'px';
    ring.style.top = ry + 'px';
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

  document.addEventListener('mousemove', function (e) {
    mx = e.clientX;
    my = e.clientY;
    dot.style.left = mx + 'px';
    dot.style.top = my + 'px';
    startLoop();
  });

  document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
      if (rafId) {
        cancelAnimationFrame(rafId);
        rafId = null;
      }
    } else {
      startLoop();
    }
  });

  var hoverTargets = 'a,button,[role="button"],input,textarea,select,label,.case-back';
  document.addEventListener('mouseover', function (e) {
    if (e.target.closest(hoverTargets)) document.body.classList.add('cursor-hovering');
  });
  document.addEventListener('mouseout', function (e) {
    if (e.target.closest(hoverTargets)) document.body.classList.remove('cursor-hovering');
  });
  document.addEventListener('mousedown', function () {
    document.body.classList.add('cursor-clicking');
  });
  document.addEventListener('mouseup', function () {
    document.body.classList.remove('cursor-clicking');
  });
  document.addEventListener('mouseleave', function () {
    dot.style.opacity = '0';
    ring.style.opacity = '0';
  });
  document.addEventListener('mouseenter', function () {
    dot.style.opacity = '1';
    ring.style.opacity = '1';
  });
})();
