function openLink(linkType) {
  let link;
  if (linkType === 'categories-1') {
    link = 'https://11111111u.github.io/archive/resources.html';
  } else if (linkType === 'categories-2') {
    link = 'https://11111111u.github.io/census';
  } else if (linkType === 'categories-3') {
    link = 'https://11111111u.github.io/gallery';
  }
  window.location.href = link;
}



let isPlaying = false;
const audio = document.getElementById('audio');
const soundButton = document.getElementById('soundButton');

function toggleSound() {
  if (isPlaying) {
    audio.pause();
    soundButton.textContent = 'M';
  } else {
    audio.play();
    soundButton.textContent = '♪';
  }
  isPlaying = !isPlaying;
}



// Disable right-click context menu
window.addEventListener('contextmenu', function (e) {
  e.preventDefault();
});

// Disable text selection
document.addEventListener('selectstart', function (e) {
  e.preventDefault();
});
