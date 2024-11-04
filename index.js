//DARKMODE

const darkModeToggle = document.getElementById('dark-mode-toggle');
const body = document.body;

darkModeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  
  darkModeToggle.innerHTML = body.classList.contains('dark-mode')
    ? '<img src="images/Icons/soleil.png" alt="Light Mode" width="35" height="35">'
    : '<img src="images/Icons/pleine-lune.png" alt="Dark Mode" width="35" height="35">';
});

// Dynamic Text Animation
document.addEventListener('DOMContentLoaded', () => {
  const professions = [
      'Front-end Developer React.JS',
      'Design UI / UX_',
      'Presentation Designer_',
      'Photographer_',
      'Osint_',
      'Tech addict_',
      'Content Creator_'
  ];
  
  let professionIndex = 0;
  const professionElement = document.querySelector('.profession');
  const typingSpeed = 150; // Vitesse de la machine à écrire (en millisecondes)
  const eraseSpeed = 100;  // Vitesse d'effacement (en millisecondes)
  const displayTime = 2000; // Temps d'affichage de chaque profession avant effacement (en millisecondes)

  // Fonction pour taper une profession
  function typeProfession(text, callback) {
      let charIndex = 0;
      professionElement.textContent = ''; // Réinitialiser le texte avant de commencer
      const typingInterval = setInterval(() => {
          professionElement.textContent += text[charIndex];
          charIndex++;
          if (charIndex === text.length) {
              clearInterval(typingInterval);
              setTimeout(callback, displayTime); // Appeler la fonction après avoir affiché le texte
          }
      }, typingSpeed);
  }

  // Fonction pour effacer la profession
  function eraseProfession(callback) {
      let charIndex = professionElement.textContent.length;
      const erasingInterval = setInterval(() => {
          professionElement.textContent = professionElement.textContent.slice(0, charIndex - 1);
          charIndex--;
          if (charIndex < 0) {
              clearInterval(erasingInterval);
              callback(); // Appeler la fonction après avoir effacé le texte
          }
      }, eraseSpeed);
  }

  // Fonction pour gérer l'animation de la machine à écrire
  function startTypingAnimation() {
      typeProfession(professions[professionIndex], () => {
          eraseProfession(() => {
              professionIndex = (professionIndex + 1) % professions.length;
              startTypingAnimation(); // Redémarrer l'animation avec la prochaine profession
          });
      });
  }

  // Démarrer l'animation au chargement de la page
  startTypingAnimation();
});


// CAROUSSEL

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


// MODAL caroussel


  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modal-img");
  const modalTitle = document.getElementById("modal-title");
  const modalDescription = document.getElementById("modal-description");
  const closeBtn = document.querySelector(".close-btn");

  // Pour chaque élément du carousel, ouvrir la modale avec les infos du projet
  document.querySelectorAll('.carousel-item a').forEach(item => {
    item.addEventListener('click', function(event) {
      event.preventDefault(); // Empêche la redirection du lien
      const imgSrc = this.querySelector('img').src;
      const title = this.querySelector('h3').textContent;
      const description = this.querySelector('p').textContent;

      modalImg.src = imgSrc;
      modalTitle.textContent = title;
      modalDescription.textContent = description;

      modal.style.display = "block"; // Affiche le modal
    });
  });

  // Fermer le modal en cliquant sur la croix
  closeBtn.addEventListener('click', () => {
    modal.style.display = "none";
  });

  // Fermer le modal si on clique à l'extérieur de la carte
  window.addEventListener('click', (event) => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });



//SWIPE

const carousel = document.querySelector('.carousel-items');
let isDown = false;
let startX;
let scrollLeft;

carousel.addEventListener('mousedown', (e) => {
  isDown = true;
  carousel.classList.add('active');
  startX = e.pageX - carousel.offsetLeft;
  scrollLeft = carousel.scrollLeft;
});

carousel.addEventListener('mouseleave', () => {
  isDown = false;
  carousel.classList.remove('active');
});

carousel.addEventListener('mouseup', () => {
  isDown = false;
  carousel.classList.remove('active');
});

carousel.addEventListener('mousemove', (e) => {
  if (!isDown) return; // stop the fn from running
  e.preventDefault();
  const x = e.pageX - carousel.offsetLeft;
  const walk = (x - startX) * 3; //scroll-fast
  carousel.scrollLeft = scrollLeft - walk;
});

carousel.addEventListener('touchstart', (e) => {
  startX = e.touches[0].pageX;
  scrollLeft = carousel.scrollLeft;
}, { passive: true });

carousel.addEventListener('touchmove', (e) => {
  const x = e.touches[0].pageX;
  const walk = (x - startX) * 2; // Adjust scroll speed
  carousel.scrollLeft = scrollLeft - walk;
}, { passive: true });

