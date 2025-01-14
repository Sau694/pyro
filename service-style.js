//for image opening on clickde
// Select all image cards
const imageCards = document.querySelectorAll('.image-card img');
const fullScreenView = document.createElement('div');
fullScreenView.classList.add('full-screen-view');

// Create back button
const backButton = document.createElement('div');
backButton.classList.add('back-icon');
backButton.innerHTML = '&#8592;'; // Left arrow symbol
fullScreenView.appendChild(backButton);

// Append the full-screen view container to the body
const fullScreenImage = document.createElement('img');
fullScreenView.appendChild(fullScreenImage);
document.body.appendChild(fullScreenView);

// Function to close full-screen view
const closeFullScreen = () => {
    fullScreenView.classList.remove('active');
    fullScreenImage.src = '';
};

// Add click event listeners to each image card
imageCards.forEach((img) => {
    img.addEventListener('click', () => {
        fullScreenImage.src = img.src;
        fullScreenView.classList.add('active');
    });
});

// Back button event listener
backButton.addEventListener('click', closeFullScreen);

// Close full-screen view when clicking outside the image
fullScreenView.addEventListener('click', (e) => {
    if (e.target === fullScreenView) {
        closeFullScreen();
    }
});
// for video section  in specail entry//
const carousel = document.querySelector('.carousel');
const slides = document.querySelectorAll('.video-slide');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let currentIndex = 0;

function showSlide(index) {
    carousel.style.transform = `translateX(-${index * 100}%)`;
    updateNavButtons();
}

function updateNavButtons() {
    prevButton.style.display = currentIndex === 0 ? 'none' : 'block';
    nextButton.style.display = currentIndex === slides.length - 1 ? 'none' : 'block';
}

prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        showSlide(currentIndex);
    }
});

nextButton.addEventListener('click', () => {
    if (currentIndex < slides.length - 1) {
        currentIndex++;
        showSlide(currentIndex);
    }
});

// Initialize the carousel
showSlide(currentIndex);
