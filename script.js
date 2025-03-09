// Scroll Button Toggle
const scrollBtn = document.querySelector(".scroll-btn");
window.addEventListener("scroll", function () {
    if (scrollBtn) {
        scrollBtn.classList.toggle("active", window.scrollY > 500);
    }
});

// Menu Toggle
const menuBtn = document.querySelector(".menu-btn");
const navigation = document.querySelector(".navigation");
const navigationItems = document.querySelectorAll(".navigation a");

menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active");
    navigation.classList.toggle("active");
    document.body.classList.toggle("no-scroll"); // Prevent scrolling on mobile when menu is open
});

// Navigation Effects
window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    if (header) {
        header.classList.toggle("sticky", window.scrollY > 0);
    }
});

// Close menu when clicking a navigation link
navigationItems.forEach((navigationItem) => {
    navigationItem.addEventListener("click", () => {
        menuBtn.classList.remove("active");
        navigation.classList.remove("active");
        document.body.classList.remove("no-scroll"); // Enable scrolling when menu is closed
    });
});

// Close menu when clicking outside (for better UX)
document.addEventListener("click", (event) => {
    if (!menuBtn.contains(event.target) && !navigation.contains(event.target)) {
        menuBtn.classList.remove("active");
        navigation.classList.remove("active");
        document.body.classList.remove("no-scroll");
    }
});
