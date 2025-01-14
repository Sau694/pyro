// Mobile Menu Toggle for Responsive Navbar
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

// Image Hover Effect for Service Page Galleries
document.addEventListener('DOMContentLoaded', () => {
    const imageCards = document.querySelectorAll('.image-card');

    imageCards.forEach(card => {
        card.addEventListener('mouseover', () => {
            const img = card.querySelector('img');
            img.style.transform = 'scale(1.1)';
        });

        card.addEventListener('mouseout', () => {
            const img = card.querySelector('img');
            img.style.transform = 'scale(1)';
        });
    });
});

// Smooth Scroll for Navbar Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
//review section//
// Predefined Reviews
let reviews = [
  {
    name: "Saurav Bagul", 
    text: "DreamsPyro did an outstanding job with our corporate event. The team was professional and efficient, making the event seamless. Highly recommend their services!",
  },
  {
    name: "Gaurav",
    text: "The team at DreamsPyro made our wedding day unforgettable. They handled everything perfectly and the setup was stunning. Thank you for making our day so special!",
  },
  {
    name: "Tribhuvan",
    text: "I’ve worked with DreamsPyro multiple times and they never disappoint. Their attention to detail and customer service is top-notch. Always a pleasure working with them.",
  },
  {
    name: "Rakesh Shetty",
    text: "An exceptional team that knows how to bring a vision to life. DreamsPyro made our product launch event smooth and memorable. I will definitely work with them again!",
  },
];

let currentReviewIndex = 0; // Track the current review index
let reviewContainer = document.querySelector(".reviews-container");

// Function to show the next review and slide out the old one
function showNextReview() {
  const reviewsItems = document.querySelectorAll(".review-item");

  // Slide out the current active review
  const activeReview = reviewContainer.querySelector(".review-item.active");
  if (activeReview) {
    activeReview.classList.add("slide-out");
  }

  // Wait for the slide-out animation to finish, then update the review
  setTimeout(() => {
    if (activeReview) {
      activeReview.classList.remove("active", "slide-out"); // Remove the slide-out class and reset
    }

    // Create and display the next review
    const newReview = reviews[currentReviewIndex];
    const reviewItem = document.createElement("div");
    reviewItem.classList.add("review-item", "fade-in", "active");

    reviewItem.innerHTML = `
      <div class="reviewer-name">
        ${newReview.name}
      </div>
      <div class="review-text">
        <p class="review-description">${newReview.text}</p>
      </div>
    `;

    reviewContainer.appendChild(reviewItem);

    // Move to the next review in the loop
    currentReviewIndex = (currentReviewIndex + 1) % reviews.length;
  }, 1000); // Wait for 1 second before adding the next review
}

// Start the review loop
setInterval(showNextReview, 5000);

// Handle new review submission
function submitReview() {
  const reviewInput = document.querySelector(".user-review-input");
  const submitButton = document.querySelector(".submit-review");
  const reviewText = reviewInput.value.trim();

  if (reviewText.length < 5) {
    alert("Please provide a review with at least 5 characters.");
    return;
  }

  // Add the new review to the reviews array
  reviews.push({ name: "New User", text: reviewText });

  // Reset the input
  reviewInput.value = "";

  // Disable the button briefly to prevent spamming
  submitButton.disabled = true;

  // Show a "Thank you" message temporarily
  submitButton.textContent = "Thank you!";
  setTimeout(() => {
    submitButton.textContent = "Submit";
    submitButton.disabled = false;
  }, 2000);

  // Update the sliding reviews immediately
  showNextReview();
}

// Attach event listener to submit button
document.querySelector(".submit-review").addEventListener("click", submitReview);

// Initial call to show the first review
showNextReview();

//sliding review images //
const slider = document.getElementById('slider');
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
let currentIndex = 0;

// Clone the first and last slides for seamless looping
const firstSlide = slides[0].cloneNode(true);
const lastSlide = slides[totalSlides - 1].cloneNode(true);
slider.appendChild(firstSlide);
slider.insertBefore(lastSlide, slides[0]);

// Adjust slider position to show the first slide
slider.style.transform = `translateX(-100%)`;

function autoSlide() {
  currentIndex++;
  slider.style.transition = "transform 1s ease-in-out";
  slider.style.transform = `translateX(-${(currentIndex + 1) * 100}%)`;

  if (currentIndex === totalSlides) {
    setTimeout(() => {
      slider.style.transition = "none";
      slider.style.transform = `translateX(-100%)`;
      currentIndex = 0;
    }, 1000);
  }
}

setInterval(autoSlide, 3000); // Change slide every 3 seconds