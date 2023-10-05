function checkAuthentication() {
  const username = 'username';
  const password = 'password';

  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'https://11111111u.github.io/hidden/characters', true);
  xhr.setRequestHeader('Authorization', 'Basic ' + btoa(username + ':' + password));

  xhr.onload = function () {
      if (xhr.status === 200) {
          // Access granted
          console.log('Access granted');
      } else {
          // Access denied
          console.log('Access denied');
      }
  };

  xhr.onerror = function () {
      // Handle network errors
      console.error('Network error');
  };

  xhr.send();
}
checkAuthentication();



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
