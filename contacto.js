const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("nav-menu_visible");

  if (navMenu.classList.contains("nav-menu_visible")) {
    navToggle.setAttribute("aria-label", "Cerrar menú");
  } else {
    navToggle.setAttribute("aria-label", "Abrir menú");
  }
});

const galleryCarousel = document.querySelector('.gallery-carousel');
let currentIndex = 0;

function moveNext() {
  const imageWidth = galleryCarousel.querySelector('img').offsetWidth;
  currentIndex++;
  if (currentIndex >= galleryCarousel.children.length) {
    currentIndex = 0;
  }
  galleryCarousel.style.transform = `translateX(-${imageWidth * currentIndex}px)`;
}

setInterval(moveNext, 2000); // Mueve automáticamente cada 2 segundos