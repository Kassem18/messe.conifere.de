// Slider
// Slider

let touchStartX = 0;
let touchEndX = 0;
let currentSlide = 0;

function startSwipe(event) {
  touchStartX = event.touches[0].clientX;
}

function swipe(event) {
  touchEndX = event.touches[0].clientX;
}

function endSwipe() {
  const swipeThreshold = 50;

  if (touchStartX - touchEndX > swipeThreshold) {
    showSlide(currentSlide + 1);
  } else if (touchEndX - touchStartX > swipeThreshold) {
    showSlide(currentSlide - 1);
  }

  touchStartX = 0;
  touchEndX = 0;
}

function showSlide(index) {
  const slider = document.querySelector('.slider');
  const slides = document.querySelectorAll('.slide');
  const totalSlides = slides.length;

  currentSlide = index;
  if (currentSlide >= totalSlides) {
    currentSlide = 0;
  } else if (currentSlide < 0) {
    currentSlide = totalSlides - 1;
  }

  const translateValue = -currentSlide * 100 + '%';
  slider.style.transition = 'transform 0.5s ease-in-out';
  slider.style.transform = 'translateX(' + translateValue + ')';
}


//Navi
//Navi

    const menuToggle = document.querySelector('#menuToggle');
    const navMenu = document.querySelector('#navMenu');
    const closeBtn = document.querySelector('#closeBtn');

    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    closeBtn.addEventListener('click', () => {
        navMenu.classList.remove('active');
        menuToggle.checked = false; // Uncheck the checkbox to visually indicate the menu is closed
    });

