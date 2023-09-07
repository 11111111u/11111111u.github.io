function openLink(linkType) {
  let link;
  if (linkType === 'categories-1') {
    link = 'https://11111111u.github.io/page-1';
  } else if (linkType === 'categories-2') {
    link = 'https://11111111u.github.io/page-2';
  } else if (linkType === 'categories-3') {
    link = 'https://11111111u.github.io/page-3';
  } else if (linkType === 'categories-4') {
    link = 'https://11111111u.github.io/page-4';
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



// Disable right-click context menu
window.addEventListener('contextmenu', function (e) {
  e.preventDefault();
});

// Disable text selection
document.addEventListener('selectstart', function (e) {
  e.preventDefault();
});



// document.addEventListener('mousedown', function (e) {
//   if (e.button === 1) {

//     const centerButton = document.getElementById('soundButton');
//     if (centerButton && e.target === centerButton) {

//       window.location.href = 'https://11111111u.github.io/page-x';
//     }
//   }
// });