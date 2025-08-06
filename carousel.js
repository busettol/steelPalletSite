document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.querySelector('.carousel');
  const leftArrow = document.querySelector('.carousel-arrow.left');
  const rightArrow = document.querySelector('.carousel-arrow.right');
  const card = carousel.querySelector('.carousel-card');
  const cardWidth = card.offsetWidth + 16;
  const totalCards = carousel.querySelectorAll('.carousel-card').length;

  if (!carousel) return;

  // Arrow button handlers
  if (leftArrow && rightArrow) {
    leftArrow.addEventListener('click', () => {
      carousel.scrollBy({ left: -300, behavior: 'smooth' });
    });

    rightArrow.addEventListener('click', () => {
      carousel.scrollBy({ left: 300, behavior: 'smooth' });
    });
  }

  let scrollPosition = 0;
  let autoScrollInterval = null;

  function startAutoScroll() {
    autoScrollInterval = setInterval(() => {
      scrollPosition += cardWidth;

      if (scrollPosition >= carousel.scrollWidth - carousel.clientWidth) {
        scrollPosition = 0;
      }

      carousel.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
    }, 2000);
  }

  function stopAutoScroll() {
    clearInterval(autoScrollInterval);
  }

  // Start on load
  startAutoScroll();

  // Pause/resume on hover
  carousel.addEventListener('mouseenter', stopAutoScroll);
  carousel.addEventListener('mouseleave', startAutoScroll);
});
