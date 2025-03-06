

        window.addEventListener("scroll", function(){
    scrollBtn.classList.toggle("active", window.scrollY > 500);
});

        const menuBtn = document.querySelector(".menu-btn");
        const navigation = document.querySelector(".navigation");
        const navigationItems = document.querySelector(".navigation a");

        menuBtn.addEventListener("click", () => {
            menuBtn.classList.toggle("active");
            navigation.classList.toggle("active");
        })

        // Navigation Effects
        window.addEventListener("scroll", function(){
            const header = document.querySelector("header");
            header.classList.toggle("sticky", window.scrollY > 0);
        })

        navigationItems.forEach((navigationItem) => {
            navigationItem.addEventListener("click", () => {
                menuBtn.classList.remove("active");
                navigation.classList.remove("active")
            })
        })
