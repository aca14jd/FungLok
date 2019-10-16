// Menu Bar

const menuBtn = document.querySelector(".menu-btn");
const linkBtn = document.querySelectorAll(".nav-link");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const navItems = document.querySelectorAll(".nav-item");

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

// Product Bar

document.getElementById("veg").onclick = function() {
  insertMenuText(vegStarterDishes);
  insertPricesText(vegStarterPrices);
};

var menuItems, menuItemPrices;
var vegStarterDishes =
  "<div><h4>Vegetarian Starters</h4><li>1. Vegetarian Spring Rolls</li><li>2. Crispy Seaweed</li><li>3. Vegetable Hot & Sour Soup</li><li>4. Mixed Vegetable Soup</li><li>5. Sweetcorn Soup</li></div>";
var vegStarterPrices =
  "<div><li>-----</li><li>£3.50</li><li>£3.50</li><li>£2.50</li><li>£2.50</li><li>£2.50</li></div>";

function insertMenuText(value) {
  menuItems = value;
  document.getElementById("product-list").innerHTML = menuItems;
}

function insertPricesText(value) {
  menuItemPrices = value;
  document.getElementById("product-list").innerHTML += menuItemPrices;
}

//Media Queries

// function addGrid(screenThreshold) {
//   if (screenThreshold.matches) {
//   } else {
//   }
// }

// var screenThreshold = window.matchMedia("(min-width: 769px)");
// screenThreshold.addListener(addGrid);
