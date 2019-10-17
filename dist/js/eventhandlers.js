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

var vegItem = document.getElementsByClassName("veg-item");
var starterItem = document.getElementsByClassName("starter-item");
var mainItem = document.getElementsByClassName("main-item");
var sideItem = document.getElementsByClassName("side-item");
var setItem = document.getElementsByClassName("set-item");

document.getElementById("veg").onclick = function () {
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
};

document.getElementById("set").onclick = function () {
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
};