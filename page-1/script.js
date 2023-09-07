function openLink(linkType) {
  const link = linkType === 'categories-0' ? 'https://11111111u.github.io' : 'https://11111111u.github.io';
  window.location.href = link;
}



// Disable right-click context menu
window.addEventListener('contextmenu', function (e) {
  e.preventDefault();
});
// Disable text selection
document.addEventListener('selectstart', function (e) {
  e.preventDefault();
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