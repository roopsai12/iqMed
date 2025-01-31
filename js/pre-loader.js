
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