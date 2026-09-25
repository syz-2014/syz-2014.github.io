// Fade-in-on-scroll for section content
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[aria-disabled="true"]').forEach((el) => {
    el.addEventListener('click', (e) => e.preventDefault());
  });

  const targets = document.querySelectorAll(
    '.edu-grid, .work-grid, .leadership-grid, .creative-inner, .contact-info'
  );
  targets.forEach((el) => el.classList.add('reveal'));

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  targets.forEach((el) => observer.observe(el));
});
