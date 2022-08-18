// selectors
const hamburger = document.querySelector(".hamburger");
const back = document.querySelector(".menu-back");
const header = document.querySelector("nav");
const goTop = document.querySelector(".goTop");

// initalise aos animation library
AOS.init();

// scroll effects
goTop.addEventListener("click", () => {
  window.scrollTo(0, 0);
});

addEventListener("scroll", () => {
  if (window.scrollY > 200) goTop.classList.add("hide");
  else goTop.classList.remove("hide");
});

// hamburger menu
hamburger.addEventListener("click", () => {
  document.querySelector(".menu").classList.toggle("active");
});
back.addEventListener("click", () => {
  document.querySelector(".menu").classList.toggle("active");
});

// css variables
let planet = document.querySelector("#mode ion-icon");

var isDark = false;
var r = document.querySelector(":root");
const mode = document.querySelector("#mode");
mode.addEventListener("click", () => {
  if (isDark) {
    set_light();
    isDark = false;
    planet.name = "moon";
    planet.style.color = "#46244c";
  } else {
    isDark = true;
    set_dark();
    planet.name = "sunny";
    planet.style.color = "rgb(184, 184, 76)";
  }
});
function set_light() {
  r.style.setProperty("--header", "#46244c");
  r.style.setProperty("--text", "#712b75");
  r.style.setProperty("--button", "#c74b50");
  r.style.setProperty("--hover", "#d49b54");
  r.style.setProperty("--shad", "rgb(209, 208, 208)");
  r.style.setProperty("--navColor", "rgba(250, 250, 250, 0.9)");
  r.style.setProperty("--dark-yellow", "#c27a23");
  r.style.setProperty("--body", "white");
}
function set_dark() {
  r.style.setProperty("--header", "rgba(250, 250, 250, 0.9)");
  r.style.setProperty("--text", "#ed7df3");
  r.style.setProperty("--button", "#712b75");
  r.style.setProperty("--hover", "#d49b54");
  r.style.setProperty("--navColor", "rgba(0, 0, 0, 0.9)");
  r.style.setProperty("--shad", "black");
  r.style.setProperty("--dark-yellow", "#c27a23");
  r.style.setProperty("--body", "black");
}
