// Menu Bar

const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const navItems = document.querySelectorAll(".nav-item");

menuBtn.addEventListener("click", toggleMenu);
navItems.forEach(item => item.addEventListener("click", toggleMenu));

function toggleMenu() {
  menuBtn.classList.toggle("close");
  menu.classList.toggle("show");
  menuNav.classList.toggle("show");
  navItems.forEach(item => item.classList.toggle("show"));
}

// Product Bar

const dropdownBtn = document.querySelector(".dropdown");
const product = document.querySelector(".product");
const productBar = document.querySelector(".product-bar");
const categoryBtn = document.querySelectorAll(".category-li");

dropdownBtn.addEventListener("click", toggleProduct);
categoryBtn.forEach(item => item.addEventListener("click", toggleProduct));

function toggleProduct() {
  product.classList.toggle("show");
  productBar.classList.toggle("show");
  categoryBtn.forEach(item => item.classList.toggle("show"));
}

var vegItem = document.getElementsByClassName("veg-item");
var starterItem = document.getElementsByClassName("starter-item");
var mainItem = document.getElementsByClassName("main-item");
var sideItem = document.getElementsByClassName("side-item");
var setItem = document.getElementsByClassName("set-item");
var dessertItem = document.getElementsByClassName("dessert-item");
var beverageItem = document.getElementsByClassName("beverage-item");

document.getElementById("vegs").onclick = function () {
  for (i = 0; i < vegItem.length; i++) {
    vegItem[i].style.display = "block";
  }
  for (i = 0; i < starterItem.length; i++) {
    starterItem[i].style.display = "none";
  }
  for (i = 0; i < mainItem.length; i++) {
    mainItem[i].style.display = "none";
  }
  for (i = 0; i < sideItem.length; i++) {
    sideItem[i].style.display = "none";
  }
  for (i = 0; i < setItem.length; i++) {
    setItem[i].style.display = "none";
  }
  for (i = 0; i < dessertItem.length; i++) {
    dessertItem[i].style.display = "none";
  }
  for (i = 0; i < beverageItem.length; i++) {
    beverageItem[i].style.display = "none";
  }
};

document.getElementById("starters").onclick = function () {
  for (i = 0; i < vegItem.length; i++) {
    vegItem[i].style.display = "none";
  }
  for (i = 0; i < starterItem.length; i++) {
    starterItem[i].style.display = "block";
  }
  for (i = 0; i < mainItem.length; i++) {
    mainItem[i].style.display = "none";
  }
  for (i = 0; i < sideItem.length; i++) {
    sideItem[i].style.display = "none";
  }
  for (i = 0; i < setItem.length; i++) {
    setItem[i].style.display = "none";
  }
  for (i = 0; i < dessertItem.length; i++) {
    dessertItem[i].style.display = "none";
  }
  for (i = 0; i < beverageItem.length; i++) {
    beverageItem[i].style.display = "none";
  }
};

document.getElementById("mains").onclick = function () {
  for (i = 0; i < vegItem.length; i++) {
    vegItem[i].style.display = "none";
  }
  for (i = 0; i < starterItem.length; i++) {
    starterItem[i].style.display = "none";
  }
  for (i = 0; i < mainItem.length; i++) {
    mainItem[i].style.display = "block";
  }
  for (i = 0; i < sideItem.length; i++) {
    sideItem[i].style.display = "none";
  }
  for (i = 0; i < setItem.length; i++) {
    setItem[i].style.display = "none";
  }
  for (i = 0; i < dessertItem.length; i++) {
    dessertItem[i].style.display = "none";
  }
  for (i = 0; i < beverageItem.length; i++) {
    beverageItem[i].style.display = "none";
  }
};

document.getElementById("sides").onclick = function () {
  for (i = 0; i < vegItem.length; i++) {
    vegItem[i].style.display = "none";
  }
  for (i = 0; i < starterItem.length; i++) {
    starterItem[i].style.display = "none";
  }
  for (i = 0; i < mainItem.length; i++) {
    mainItem[i].style.display = "none";
  }
  for (i = 0; i < sideItem.length; i++) {
    sideItem[i].style.display = "block";
  }
  for (i = 0; i < setItem.length; i++) {
    setItem[i].style.display = "none";
  }
  for (i = 0; i < dessertItem.length; i++) {
    dessertItem[i].style.display = "none";
  }
  for (i = 0; i < beverageItem.length; i++) {
    beverageItem[i].style.display = "none";
  }
};

document.getElementById("sets").onclick = function () {
  for (i = 0; i < vegItem.length; i++) {
    vegItem[i].style.display = "none";
  }
  for (i = 0; i < starterItem.length; i++) {
    starterItem[i].style.display = "none";
  }
  for (i = 0; i < mainItem.length; i++) {
    mainItem[i].style.display = "none";
  }
  for (i = 0; i < sideItem.length; i++) {
    sideItem[i].style.display = "none";
  }
  for (i = 0; i < setItem.length; i++) {
    setItem[i].style.display = "block";
  }
  for (i = 0; i < dessertItem.length; i++) {
    dessertItem[i].style.display = "none";
  }
  for (i = 0; i < beverageItem.length; i++) {
    beverageItem[i].style.display = "none";
  }
};

document.getElementById("desserts").onclick = function () {
  for (i = 0; i < vegItem.length; i++) {
    vegItem[i].style.display = "none";
  }
  for (i = 0; i < starterItem.length; i++) {
    starterItem[i].style.display = "none";
  }
  for (i = 0; i < mainItem.length; i++) {
    mainItem[i].style.display = "none";
  }
  for (i = 0; i < sideItem.length; i++) {
    sideItem[i].style.display = "none";
  }
  for (i = 0; i < setItem.length; i++) {
    setItem[i].style.display = "none";
  }
  for (i = 0; i < dessertItem.length; i++) {
    dessertItem[i].style.display = "block";
  }
  for (i = 0; i < beverageItem.length; i++) {
    beverageItem[i].style.display = "none";
  }
};

document.getElementById("beverages").onclick = function () {
  for (i = 0; i < vegItem.length; i++) {
    vegItem[i].style.display = "none";
  }
  for (i = 0; i < starterItem.length; i++) {
    starterItem[i].style.display = "none";
  }
  for (i = 0; i < mainItem.length; i++) {
    mainItem[i].style.display = "none";
  }
  for (i = 0; i < sideItem.length; i++) {
    sideItem[i].style.display = "none";
  }
  for (i = 0; i < setItem.length; i++) {
    setItem[i].style.display = "none";
  }
  for (i = 0; i < dessertItem.length; i++) {
    dessertItem[i].style.display = "none";
  }
  for (i = 0; i < beverageItem.length; i++) {
    beverageItem[i].style.display = "block";
  }
};