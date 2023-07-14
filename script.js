" use strict ";

const btnOpen = document.querySelector(".menu");
const overlay = document.querySelector(".overlay");

btnOpen.addEventListener("click", (e) => {
  document.querySelector(".menu__close").classList.toggle("hidden");
  document.querySelector(".menu__open").classList.toggle("hidden");

  document.querySelector(".overlay").classList.toggle("hidden");
});
