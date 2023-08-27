document.addEventListener('DOMContentLoaded', () => {
  const images = document.querySelectorAll('.image-container img');

  images.forEach((img) => {
    img.addEventListener('click', () => {
      img.classList.toggle('expanded');
      if (img.classList.contains('expanded')) {
        img.style.maxHeight = 'none';
      } else {
        img.style.maxHeight = '200px'; // Adjust the collapsed height as needed
      }
    });
  });
});