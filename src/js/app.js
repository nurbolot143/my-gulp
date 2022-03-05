import * as flsFunctions from "./modules/functions.js";
flsFunctions.isWebp();

const burger = document.querySelector(".header__burger");
const menu = document.querySelector(".header__menu");
const body = document.querySelector("body");
const items = document.querySelectorAll(".header__item");

burger.addEventListener("click", () => {
  [burger, menu].map((e) => e.classList.toggle("active"));
  body.classList.toggle("lock");
});

for (const el of items) {
  el.addEventListener("click", () => {
    [burger, menu].map((element) => element.classList.remove("active"));
  });
}
