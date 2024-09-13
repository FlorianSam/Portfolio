// Dark Mode Toggle
const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;

darkModeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  darkModeToggle.innerHTML = body.classList.contains('dark-mode') ? '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-sun"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>' : '<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-moon"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>';

});

// Dynamic Text Animation
const texts = [
  'Creative Designer specializing in UI/UX & digital experiences 💻',
  'Presentation Designer 📉',
  'Photographer 📷'
];

const dynamicTextElement = document.getElementById('dynamic-text');
let currentTextIndex = 0;

function updateText() {
  dynamicTextElement.classList.add('fade-out');
  setTimeout(() => {
    dynamicTextElement.textContent = texts[currentTextIndex];
    dynamicTextElement.classList.remove('fade-out');
    currentTextIndex = (currentTextIndex + 1) % texts.length;
  }, 500); // Fade-out duration
}

setInterval(updateText, 4000); // Change text every 4 seconds


const prevButton = document.querySelector('.carousel-prev');
const nextButton = document.querySelector('.carousel-next');
const carouselItems = document.querySelector('.carousel-items');
const items = document.querySelectorAll('.carousel-item');

let currentIndex = 0;
const itemsPerSlide = 3; // Number of items visible per slide
const totalSlides = Math.ceil(items.length / itemsPerSlide);

function updateCarousel() {
  const offset = -currentIndex * 100;
  carouselItems.style.transform = `translateX(${offset}%)`;
}

prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex > 0) ? currentIndex - 1 : totalSlides - 1;
  updateCarousel();
});

nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex < totalSlides - 1) ? currentIndex + 1 : 0;
  updateCarousel();
});

// Initialize the carousel position
updateCarousel();







// Back to Top Button
const backToTopButton = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTopButton.style.display = 'block';
  } else {
    backToTopButton.style.display = 'none';
  }
});

backToTopButton.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Hamburger Menu Toggle
const hamburgerMenu = document.getElementById('hamburger-menu');
const navLinks = document.getElementById('nav-links');

hamburgerMenu.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  hamburgerMenu.classList.toggle('active');
});
