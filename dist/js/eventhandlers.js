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

var menuItems, menuItemPrices;
var vegStarterDishes =
  "<div><h4>Vegetarian Starters</h4><li>1. Vegetarian Spring Rolls</li><li>2. Crispy Seaweed</li><li>3. Vegetable Hot & Sour Soup</li><li>4. Mixed Vegetable Soup</li><li>5. Sweetcorn Soup</li></div>";
var vegStarterPrices =
  "<div class='price-right'><li>-----</li><li>£3.50</li><li>£3.50</li><li>£2.50</li><li>£2.50</li><li>£2.50</li></div>";
var vegMainDishes =
  "<div><h4>Vegetarian Main Courses</h4><li>6. Braised Chinese Vegetables and Chinese Mushrooms in Oyster Sauce</li><li>7. Deep Fried Bean Curd with Vegetables and Chinese Mushrooms</li><li>8. Stir Fried Mixed Vegetables with Garlic or Oyster Sauce</li><li>9. Fried Vegetables with Cashewnuts (N)</li><li>10. Fried Vegetables in Garlic & Chilli Sauce</li><li>11. Braised Bean Curd in Chilli & Garlic or Sweet & Sour Sauce</li><li>12. Deep Fried Bean Curd in Chilli & Garlic or Sweet & Sour Sauce</li><li>13. Stir Fried Bamboo Shoots & Water Chestnuts in Hot Bean Sauce (N)</li><li>14. Stir Fried Beancurd in Kindo Sauce (N)</li><li>15. Deep Fried Salt & Peppered Bean Curd</li><li>16. Vegetarian Singapore Vermicelli (Spicy)</li><li>17. Vegetable Chow Mein or Ho Fan</li></div>";
var vegMainPrices =
  "<div class='price-right'><li>-----</li><li>£6.00</li><li>£6.00</li><li>£6.00</li><li>£6.50</li><li>£6.00</li><li>£6.00</li><li>£6.00</li><li>£6.00</li><li>£6.00</li><li>£6.00</li><li>£6.50</li><li>£6.50</li></div>";

document.getElementById("veg").onclick = function() {
  menuItems = [];
  insertMenuText(vegStarterDishes);
  insertMenuText(vegStarterPrices);
  insertMenuText(vegMainDishes);
  insertMenuText(vegMainPrices);
};

function insertMenuText(value) {
  menuItems += value;
  document.getElementById("product-list").innerHTML = menuItems;
}

//Media Queries

// function addGrid(screenThreshold) {
//   if (screenThreshold.matches) {
//   } else {
//   }
// }

// var screenThreshold = window.matchMedia("(min-width: 769px)");
// screenThreshold.addListener(addGrid);
