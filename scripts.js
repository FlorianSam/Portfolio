// scripts.js

// Dark Mode Toggle
document.querySelector('.dark-mode-toggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Toggle Navigation Menu
document.querySelector('.nav-toggle').addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('active');
});


//Home

document.addEventListener('DOMContentLoaded', () => {
    const professions = [
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



//Works 
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

//Footer

function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  