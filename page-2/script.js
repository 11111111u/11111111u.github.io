function openLink(linkType) {
  let link;
  if (linkType === 'categories-1') {
    link = 'https://11111111u.github.io';
  } else {
    link = 'https://11111111u.github.io';
  }

  window.location.href = link;
}

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
      item.classList.remove('fullscreen');
    } else {
      item.requestFullscreen();
      item.classList.add('fullscreen');
    }
  });
});



