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



// var password = "tutorial";
// (function passcodeprotect() {
//    var passcode = prompt("Enter PassCode");
//    while (passcode !== password) {
//       alert("Incorrect PassCode");
//       return passcodeprotect();
//    }
// }());
// alert('Welcome To The TP..!');