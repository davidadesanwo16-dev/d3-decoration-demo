
const menuOverlay = document.getElementById("menu-overlay");
const menuIcon = document.getElementById("menu-icon");
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

// Close the mobile menu
function closeMenu(returnFocus = false) {
    navLinks.classList.remove("active");
    menuOverlay.classList.remove("active");

    menuIcon.classList.remove("fa-xmark");
    menuIcon.classList.add("fa-bars");

    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation menu");

    if (returnFocus) {
        menuToggle.focus();
    }
}

// Open and close the menu
menuToggle.addEventListener("click", function() {
    const isOpen = navLinks.classList.toggle("active");

    menuToggle.setAttribute("aria-expanded", isOpen);
    menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Close navigation menu" : "Open navigation menu"
    );

    menuIcon.classList.toggle("fa-bars", !isOpen);
    menuIcon.classList.toggle("fa-xmark", isOpen);

    menuOverlay.classList.toggle("active", isOpen);
});

// Close menu after clicking a navigation link
const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach(function(link) {
    link.addEventListener("click", function() {
        closeMenu();
    });
});

// Close menu when overlay is clicked
menuOverlay.addEventListener("click", function() {
    closeMenu(true);
});

// Close menu using Escape key
document.addEventListener("keydown", function(event) {
    if (event.key === "Escape" && navLinks.classList.contains("active")) {
        closeMenu(true);
    }
});
