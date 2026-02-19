window.addEventListener("scroll", function() {
    const navScroll = document.querySelector(".nav");
    if (window.scrollY > 50) {
        navScroll.classList.add("scrolled");
    } else {
        navScroll.classList.remove("scrolled");
    }
});