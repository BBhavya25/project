// If you want to allow users to click through slides manually

let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide img');
const totalSlides = slides.length;
const dots = document.querySelectorAll('.dot');

// Update the carousel by moving to the selected slide
function updateCarousel() {
    // Show the current slide and hide the others
    slides.forEach((slide, index) => {
        if (index === currentSlide) {
            slide.style.display = 'block';
        } else {
            slide.style.display = 'none';
        }
    });
    updateActiveDot();
}

// Update the active dot
function updateActiveDot() {
    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentSlide].classList.add('active');
}

// Go to a specific slide when clicking a dot
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentSlide = index;
        updateCarousel();
      });
});

// Left and Right Button Event Listeners
document.querySelector('.left-btn').addEventListener('click', () => {
    if (currentSlide === 0) {
        currentSlide = totalSlides - 1; // Loop back to last slide
    } else {
        currentSlide--;
    }
    updateCarousel();
});

document.querySelector('.right-btn').addEventListener('click', () => {
    if (currentSlide === totalSlides - 1) {
        currentSlide = 0; // Loop back to the first slide
    } else {
        currentSlide++;
    }
    updateCarousel();
});

// Initialize the carousel
updateCarousel();

console.log("Carousel and interactive cards loaded successfully!");
// footer-loader.js
document.addEventListener("DOMContentLoaded", function () {
    fetch("footer.html")
      .then(response => {
        if (!response.ok) {
          throw new Error("Failed to load footer");
        }
        return response.text();
      })
      .then(data => {
        document.getElementById("footer-placeholder").innerHTML = data;
      })
      .catch(error => {
        console.error("Error loading footer:", error);
      });
  });
  


// Get the hamburger menu and nav links
const hamburgerMenu = document.querySelector('.hamburger-menu');
const navLinks = document.querySelector('.nav-links');

// Add click event listener to toggle 'active' class
hamburgerMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburgerMenu.classList.toggle('active'); // Toggle the hamburger animation
});
