// Function to dynamically include the header
document.addEventListener('DOMContentLoaded', async function () {
    const elements = document.querySelectorAll('[data-include]');
    for (const element of elements) {
        const file = element.getAttribute('data-include');
        try {
            const response = await fetch(file);
            if (response.ok) {
                element.innerHTML = await response.text();
            } else {
                console.error(`Error loading ${file}: ${response.status}`);
                element.innerHTML = `<p>Error loading content: ${file}</p>`;
            }
        } catch (error) {
            console.error(`Fetch error for ${file}:`, error);
            element.innerHTML = `<p>Error loading content: ${file}</p>`;
        }
    }
});

window.addEventListener("scroll", function () {
    const body = document.body;
    if (window.scrollY > 100) {
        body.classList.add("scrolled");
    } else {
        body.classList.remove("scrolled");
    }
});

// Ensure carousel exists before accessing it
document.addEventListener("DOMContentLoaded", () => {
    const carouselTrack = document.querySelector(".carousel-track");
    if (carouselTrack) {
        const images = Array.from(carouselTrack.children);
        images.forEach((img) => {
            const clone = img.cloneNode(true);
            carouselTrack.appendChild(clone);
        });
    }
});

// Ensure elements are available before adding event listeners
document.querySelectorAll('.toggle-title').forEach(title => {
    title.addEventListener('click', () => {
        const parent = title.parentElement;
        const icon = title.querySelector('.toggle-icon');
        parent.classList.toggle('active');

        if (parent.classList.contains('active')) {
            icon.textContent = '-';
        } else {
            icon.textContent = '+';
        }
    });
});

// Function to open Google Maps
function openGoogleMaps() {
    const destination = "Pragathinagar, Hyderabad";
    const url = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(destination)}`;
    window.open(url, "_blank");
}

// Function to show a specific section
function showSection(sectionId) {
  document.querySelectorAll('.dynamic-section').forEach(section => {
    section.style.display = 'none';
  });

  const section = document.getElementById(sectionId);
  if (section) {
      section.style.display = 'block';
  } else {
      console.error(`Section with ID ${sectionId} not found.`);
  }
}

// Function to open modal
function openModal(element) {
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    if (modalImage) {
        modalImage.src = element.querySelector('img').src;
    }
    if (modal) {
        modal.style.display = 'flex';
        document.body.classList.add('modal-open');
    }
}

// Function to close modal
function closeModal() {
    const modal = document.getElementById('imageModal');
    if (modal) {
        modal.style.display = 'none';
        document.body.classList.remove('modal-open');
    }
}

// Close modal when clicking outside the image
window.addEventListener('click', (event) => {
    const modal = document.getElementById('imageModal');
    if (modal && event.target === modal) {
        closeModal();
    }
});

// Sending mail
document.getElementById('contact-form')?.addEventListener('submit', function (event) {
    event.preventDefault();

    const fullName = document.getElementById('fullName')?.value;
    const mobileNumber = document.getElementById('mobileNumber')?.value;
    const email = document.getElementById('email')?.value;
    const message = document.getElementById('message')?.value;

    const mailtoLink = `mailto:roopsaipoonumalli1218@gmail.com?subject=Contact Form Submission&body=Full Name: ${encodeURIComponent(fullName)}%0D%0AMobile Number: ${encodeURIComponent(mobileNumber)}%0D%0AEmail: ${encodeURIComponent(email)}%0D%0AMessage: ${encodeURIComponent(message)}`;

    window.location.href = mailtoLink;
});

// Path to the strings.json file
document.addEventListener("DOMContentLoaded", () => {
    fetch('../js/strings.xml') // Ensure this path is correct
        .then(response => {
            if (!response.ok) {
                throw new Error(`Failed to load strings.xml: ${response.statusText}`);
            }
            return response.text(); // Get the response as text
        })
        .then(xmlText => {
            // Parse the XML response
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(xmlText, 'application/xml');

            // Dynamically populate the content based on IDs
            // Assume the XML structure is like: <strings><string id="nav_home">Home</string></strings>
            const strings = xmlDoc.getElementsByTagName('string');
            
            for (let string of strings) {
                const id = string.getAttribute('id'); // Get the 'id' attribute
                const text = string.textContent; // Get the text content of the element

                const element = document.getElementById(id);
                if (element) {
                    element.textContent = text; // Update text content
                } else {
                    console.warn(`No element found for ID: ${id}`);
                }
            }
        })
        .catch(error => {
            console.error('Error loading strings:', error);
        });
});


window.addEventListener("load", function() {
    setTimeout(() => {
        document.getElementById("preloader").style.display = "none";
        document.body.style.opacity = "1";
        document.body.style.visibility = "visible";
    }, 100);
});

// Show button when user scrolls down
window.onscroll = function() {
    let topButton = document.getElementById("topButton");
    if (document.documentElement.scrollTop > 300) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }
};

// Smooth scroll to top function
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}

