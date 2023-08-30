const sections = document.querySelectorAll('.section');

sections.forEach(section => {
  section.addEventListener('click', () => {
    sections.forEach(s => s.classList.remove('active'));
    section.classList.add('active');
  });
});

const galleryItems = document.querySelectorAll('.gallery-item');

galleryItems.forEach(item => {
  item.addEventListener('click', () => {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      item.requestFullscreen();
    }
  });
});
