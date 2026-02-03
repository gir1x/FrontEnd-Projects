const navbarIcon = document.getElementById("navbarlist");
const icon = navbarIcon.querySelector("i");
const navbar = document.getElementById("navbar");

navbarIcon.addEventListener("click", () => {
    navbar.classList.toggle("shownav");
    icon.classList.toggle("clicked");
});

navbarIcon.addEventListener("click", () => {
    navbarIcon.classList.toggle("hideicon");
});
 