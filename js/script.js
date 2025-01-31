// JavaScript to handle the sliding effect and arrow click
let currentIndex = 0;
const images = document.querySelectorAll('.image-slide');
const totalImages = images.length;

function updateBackground() {
    const slider = document.querySelector('.background-images');
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function nextImage() {
    currentIndex = (currentIndex + 1) % totalImages; // Loop back to 0 after the last image
    updateBackground();
}

function prevImage() {
    currentIndex = (currentIndex - 1 + totalImages) % totalImages; // Loop back to the last image from the first
    updateBackground();
}

// Auto slide the images every 2 seconds
setInterval(() => {
    nextImage();
}, 4000); // Change background every 2 seconds

        // Wait for the entire page to load
        window.addEventListener("load", function () {
            const preloader = document.getElementById("preloader");
            const mainContent = document.getElementById("main-content");

            // Fade out the preloader
            preloader.style.opacity = "0";

            // Remove preloader and show content
            setTimeout(() => {
                preloader.style.display = "none"; // Remove preloader from view
                mainContent.style.opacity = "1"; // Fade-in the main content
            }, 500); // Duration matches the fade-out transition
        });

        // Include external HTML files (header, home, footer)
        document.querySelectorAll('[data-include]').forEach((el) => {
            const file = el.getAttribute('data-include');
            fetch(file)
                .then(response => response.text())
                .then(html => {
                    el.outerHTML = html; // Replace the element with the fetched content
                });
        });
        window.onload = function () {
            const preloader = document.getElementById("preloader");
            const mainContent = document.getElementById("main-content");
        
            preloader.style.display = "none"; // Hide preloader
            mainContent.style.opacity = "1"; // Show content
        };
        