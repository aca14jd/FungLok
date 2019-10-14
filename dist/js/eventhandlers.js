// Select DOM Items

const menuBtn = document.querySelector(".menu-btn");
const linkBtn = document.querySelectorAll(".nav-link");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const navItems = document.querySelectorAll(".nav-item");

// Set Initial State of Menu

let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);
linkBtn.forEach(item => item.addEventListener("click", toggleMenu));

function toggleMenu() {
  menuBtn.classList.toggle("close");
  linkBtn.forEach(item => item.classList.toggle("close"));
  menu.classList.toggle("show");
  menuNav.classList.toggle("show");
  navItems.forEach(item => item.classList.toggle("show"));
  showMenu = !showMenu;
}
