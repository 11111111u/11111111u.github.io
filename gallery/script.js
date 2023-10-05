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



function openLink(linkType) {
  const link = linkType === 'categories-0' ? 'https://11111111u.github.io' : 'https://11111111u.github.io';
  window.location.href = link;
}



// Disable right-click context menu
window.addEventListener('contextmenu', function (e) {
  e.preventDefault();
});
// Disable text selection
document.addEventListener('selectstart', function (e) {
  e.preventDefault();
});



// var password = "рістул";
// (function passcodeprotect() {
//    var passcode = prompt("Введіть кодове слово:");
//    while (passcode !== password) {
//       alert("Неправильне кодове слово!");
//       return passcodeprotect();
//    }
// }());
// alert('Ласкаво просимо!');