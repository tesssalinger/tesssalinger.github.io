// script3d.js

// Select all images with the class 'gallery-image'
const images = document.querySelectorAll('.gallery-image');

// Track the current index of the displayed image
let currentIndex = 0;

// Function to show the image at the current index
function showImage(index) {
    // Remove 'active' class from all images
    images.forEach((img) => img.classList.remove('active'));
    
    // Add 'active' class to the image at the current index
    images[index].classList.add('active');
}

// Function to show the next image
function showNextImage() {
    // Increment the index and wrap around if necessary
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
}

// Function to show the previous image
function showPrevImage() {
    // Decrement the index and wrap around if necessary
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
}

// Initialize the gallery by showing the first image
showImage(currentIndex);

