"use strict";

const containerMenu = document.querySelector(".nav-container");
const menu = document.querySelector(".nav-menu");

const btnHamburgerMenu = document.querySelector(".menu-btn");
const btnCloseMenu = document.querySelector(".close-btn");
const btnDownArrow = Array.from(document.querySelectorAll(".arrow-icon"));

btnHamburgerMenu.addEventListener("click", () => containerMenu.classList.remove("hidden"));
btnCloseMenu.addEventListener("click", () => containerMenu.classList.add("hidden"));

btnDownArrow.forEach(btn =>
  btn.addEventListener("click", () => {
    console.log("ARROW ICON");
    btn.nextElementSibling.classList.toggle("hidden");
  })
);
