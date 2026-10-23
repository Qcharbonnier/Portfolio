"use strict";
document.documentElement.classList.add("js");
const menuButton = document.querySelector(".menu-button");
const navigation = document.querySelector("#navigation");
menuButton.hidden = false;
menuButton.addEventListener("click", function () {
  const isOpen = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!isOpen));
  navigation.classList.toggle("open", !isOpen);
});
navigation.querySelectorAll("a").forEach(function (link) {
  link.addEventListener("click", function () {
    menuButton.setAttribute("aria-expanded", "false");
    navigation.classList.remove("open");
  });
});
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape" && navigation.classList.contains("open")) {
    menuButton.setAttribute("aria-expanded", "false");
    navigation.classList.remove("open");
    menuButton.focus();
  }
});
document.querySelector("#year").textContent = new Date().getFullYear();
