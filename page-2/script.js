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



const scrollToTopButton = document.getElementById("scrollToTop");
const scrollToBottomButton = document.getElementById("scrollToBottom");
let scrollInterval;

function handleScroll(direction) {
    scrollInterval = setInterval(() => {
        window.scrollBy(0, direction * 35);
    }, 10);
}

window.addEventListener("scroll", () => {
    const shouldDisplay = document.body.scrollTop >= 0 || document.documentElement.scrollTop >= 0;
    scrollToTopButton.style.display = scrollToBottomButton.style.display = shouldDisplay ? "block" : "none";
});

scrollToTopButton.addEventListener("mousedown", () => {
    handleScroll(-1);
});

scrollToBottomButton.addEventListener("mousedown", () => {
    handleScroll(1);
});

document.addEventListener("mouseup", () => {
    clearInterval(scrollInterval);
});



// Disable right-click context menu
window.addEventListener('contextmenu', function (e) {
  e.preventDefault();
});
// Disable text selection
document.addEventListener('selectstart', function (e) {
  e.preventDefault();
});
