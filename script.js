function openLink(linkType) {
  let link;
  if (linkType === 'devil-2') {
    link = 'https://11111111u.github.io/JavaScript/devil-2';
  } else if (linkType === 'devil-1') {
    link = 'https://11111111u.github.io/JavaScript/devil-1';
  } else if (linkType === 'devil-3') {
    link = 'https://11111111u.github.io/JavaScript/devil-3';
  }
  window.location.href = link;
}

let isPlaying = false;
const audio = document.getElementById('audio');
const soundButton = document.getElementById('soundButton');

function toggleSound() {
  if (isPlaying) {
    audio.pause();
    soundButton.textContent = '🔇';
  } else {
    audio.play();
    soundButton.textContent = '💥';
  }
  isPlaying = !isPlaying;
}