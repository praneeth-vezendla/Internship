const navbar = document.getElementById("navbar");

const menuToggle = document.getElementById("menuToggle");

const navMenu = document.getElementById("navMenu");

window.addEventListener("scroll", function () {

    if (window.scrollY > 50) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});



menuToggle.addEventListener("click", function () {

    navMenu.classList.toggle("active");

});


const links = document.querySelectorAll("#navMenu a");

links.forEach(function (link) {

    link.addEventListener("click", function () {

        navMenu.classList.remove("active");

    });

});