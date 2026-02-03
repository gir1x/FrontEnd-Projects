var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
function opentab(tabname){
    for(let tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(let tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    
    event.currentTarget.classList.add("active-link");

    document.getElementById(tabname).classList.add("active-tab");
}

var sidemenu = document.querySelector(".nav-links");

function openMenu(){
    sidemenu.style.right = "0";
}

function closeMenu(){
    sidemenu.style.right = "-200px";
}

// copied from tea station

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
 