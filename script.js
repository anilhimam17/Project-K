function toggleMenu() {
    // Target the objects responsible for the Hamburger Menu in the DOM
    const hamburgerLinks = document.querySelector(".hamburger-links")
    const hamburgerIcon = document.querySelector(".hamburger-icon")

    // Add a class when clicked for the addition of a CSS Class
    hamburgerLinks.classList.toggle("open")
    hamburgerIcon.classList.toggle("open")
}