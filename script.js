const menu = document.querySelector(".menu");
const menuBtn = document.querySelector(".menu-btn");

menuBtn.addEventListener("click", function () {
  menu.classList.add("show");
});

// Close the Menu
const closeMenu = function () {
  menu.classList.remove("show");
};

menu.addEventListener("click", closeMenu);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    closeMenu();
  }
});
