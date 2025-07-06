document.addEventListener("DOMContentLoaded", function () {
  const menuButton = document.querySelector(".menu");
  const navMenu = document.querySelector(".topnav");
  const navLinks = document.querySelectorAll(".topnav a");

  // Toggle menu on hamburger click
  menuButton.addEventListener("click", function (e) {
    e.preventDefault();
    navMenu.classList.toggle("active");
  });

  // Hide menu on link click
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("active");
    });
  });
});