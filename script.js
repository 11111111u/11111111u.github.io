function openLink(linkType) {
  let link;
  if (linkType === 'categories-1') {
    link = 'https://11111111u.github.io/categories/1';
  } else if (linkType === 'categories-2') {
    link = 'https://11111111u.github.io/categories/2';
  } else if (linkType === 'categories-3') {
    link = 'https://11111111u.github.io/categories/3';
  } else if (linkType === 'categories-x') {
    link = 'https://11111111u.github.io/categories/x';
  }
  window.location.href = link;
}

let isPlaying = false;
const audio = document.getElementById('audio');
const soundButton = document.getElementById('soundButton');

function toggleSound() {
  if (isPlaying) {
    audio.pause();
    soundButton.textContent = '💢';
  } else {
    audio.play();
    soundButton.textContent = '👹';
  }
  isPlaying = !isPlaying;
}