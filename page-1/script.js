const carouselInner = document.querySelector('.carousel-inner');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
let currentIndex = 0;

nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % carouselInner.children.length;
  updateCarousel();
});

prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + carouselInner.children.length) % carouselInner.children.length;
  updateCarousel();
});

function updateCarousel() {
  const translateX = -currentIndex * 100;
  carouselInner.style.transform = `translateX(${translateX}%)`;
}
