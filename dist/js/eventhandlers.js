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

const vegBtn = document.querySelector("#veg");

vegBtn.addEventListener("click", createMenuItems(vegStarter));
vegBtn.addEventListener("click", createMenuItemPrices(vegStarterPrices));

var menuItems, menuItemPrices;
var vegStarter = [
  "1. Vegetarian Spring Rolls",
  "2. Crispy Seaweed",
  "3. Vegetable Hot & Sour Soup",
  "4. Mixed Vegetable Soup",
  "5. Sweetcorn Soup"
];
var vegStarterPrices = ["", "£3.50", "$3.50", "£2.50", "£2.50", "£2.50"];

function createMenuItems(value) {
  menuItems.length = 0;
  menuItems = value;
  menuItems[0] = "<h3>" + menuItems[0] + "</h3>";
  for (i = 1; i < menuItems.length; i++) {
    menuItems += "<li>" + menuItems[i] + "</li>";
  }
  //something.forEach(createMenuList);
  menuItems = "<ul>" + menuItems + "</ul>";
}

function createMenuItemPrices(value) {
  menuItemPrices.length = 0;
  menuItemPrices = value;
  for (i = 0; i < menuItemPrices.length; i++) {
    menuItems += "<li>" + menuItems[i] + "</li>";
  }
  //something.forEach(createMenuList);
  menuItems = "<ul>" + menuItems + "</ul>";
}

function insertVegText(value) {
  document.getElementById("product-list").innerHTML = menuItems;
}
