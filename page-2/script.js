function openLink(linkType) {
  const link = linkType === 'categories-0' ? 'https://11111111u.github.io' : 'https://11111111u.github.io';
  window.location.href = link;
}



const sections = document.querySelectorAll('.section');

sections.forEach(section => {
  const h1Element = section.querySelector('h2');

  h1Element.addEventListener('click', () => {
    sections.forEach(s => s.classList.remove('active'));
    section.classList.add('active');
  });
});



const galleryItems = document.querySelectorAll('.gallery-item');

galleryItems.forEach(item => {
  item.addEventListener('click', () => {
    if (document.fullscreenElement) {
      document.exitFullscreen();
      item.classList.remove('fullscreen');
    } else {
      item.requestFullscreen();
      item.classList.add('fullscreen');
    }
  });
});



// Disable right-click context menu
window.addEventListener('contextmenu', function (e) {
  e.preventDefault();
});
// Disable text selection
document.addEventListener('selectstart', function (e) {
  e.preventDefault();
});
