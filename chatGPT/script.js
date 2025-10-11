// Параллакс
(function () {
  const layers = document.querySelectorAll('.parallax .layer, .fire-glow');
  const prefersReducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)'
  ).matches;

  function updateParallax() {
    const scrollTop = window.pageYOffset;
    const section = document.querySelector('.parallax');
    const sectionTop = section.offsetTop;

    layers.forEach((layer) => {
      const speed = parseFloat(layer.dataset.speed) || 0.2;
      const offset = (scrollTop - sectionTop) * speed;
      const limited = prefersReducedMotion ? offset * 0.2 : offset;
      layer.style.transform = `translate3d(0, ${limited}px, 0)`;
    });
  }

  let ticking = false;
  window.addEventListener(
    'scroll',
    () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          updateParallax();
          ticking = false;
        });
        ticking = true;
      }
    },
    { passive: true }
  );
  updateParallax();
})();

// Слайдер
(function () {
  const slides = document.querySelector('.slides');
  const imgs = document.querySelectorAll('.slides img');
  const prev = document.querySelector('.prev');
  const next = document.querySelector('.next');
  let index = 0;

  function showSlide(i) {
    index = (i + imgs.length) % imgs.length;
    slides.style.transform = `translateX(${-index * 100}%)`;
  }
  prev.addEventListener('click', () => showSlide(index - 1));
  next.addEventListener('click', () => showSlide(index + 1));

  // автопрокрутка
  setInterval(() => showSlide(index + 1), 7000);
})();
