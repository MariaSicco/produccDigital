let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(n) {
  slides[currentSlide].style.display = 'none';
  currentSlide = (n + slides.length) % slides.length;
  slides[currentSlide].style.display = 'block';
}

function nextSlide() {
  showSlide(currentSlide + 1);
}

setInterval(nextSlide, 3000); // Cambia las imágenes cada 3 segundos

window.addEventListener('scroll', function() {
  const backToTopButton = document.querySelector('.back-to-top');
  if (window.pageYOffset > 300) {
      backToTopButton.style.display = 'block';
  } else {
      backToTopButton.style.display = 'none';
  }
});

function scrollToTop() {
  window.scrollTo({
      top: 0,
      behavior: 'smooth'
  });
}
