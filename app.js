const linkedin = document.querySelector("#linkedin");
const github = document.querySelector("#github");
const btnDark = document.querySelector("#btnDark");
const logo = document.querySelector(".header-logo");
const header = document.querySelector(".mainHeader");

const navItem1 = document.querySelector("#nav-item1");
const navItem2 = document.querySelector("#nav-item2");
const navItem3 = document.querySelector("#nav-item3");
const navItem4 = document.querySelector("#nav-item4");

const menuSpan = document.querySelector(".menuSpan");
const mainNav = document.querySelector(".mainNav");

const theme = localStorage.getItem("data-theme");

if (theme === "dark") {
  document.documentElement.setAttribute("data-theme", "dark");
  dark = true;
  linkedin.style.color = "white";
  github.style.color = "white";
  logo.style.color = "white";
  navItem1.style.color = "white";
  navItem2.style.color = "white";
  navItem3.style.color = "white";
  navItem4.style.color = "white";
  header.style.background = "black";
  mainNav.style.background = "black";
} else {
  dark = false;
  document.documentElement.setAttribute("data-theme", "light");
  linkedin.style.color = "black";
  github.style.color = "black";
  logo.style.color = "black";
  navItem1.style.color = "black";
  navItem2.style.color = "black";
  navItem3.style.color = "black";
  navItem4.style.color = "black";
  header.style.background = "white";
  mainNav.style.background = "white";
}

function toggleDark() {
  if (!dark) {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("data-theme", "dark");
    linkedin.style.color = "white";
    github.style.color = "white";
    btnDark.style.color = "white";
    logo.style.color = "white";
    navItem1.style.color = "white";
    navItem2.style.color = "white";
    navItem3.style.color = "white";
    navItem4.style.color = "white";
    header.style.background = "black";
    mainNav.style.background = "black";
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("data-theme", "light");
    linkedin.style.color = "black";
    github.style.color = "black";
    btnDark.style.color = "black";
    logo.style.color = "black";
    navItem1.style.color = "black";
    navItem2.style.color = "black";
    navItem3.style.color = "black";
    navItem4.style.color = "black";
    header.style.background = "white";
    mainNav.style.background = "white";
  }
  dark = !dark;
}

btnDark.addEventListener("click", function (e) {
  toggleDark();
});

linkedin.addEventListener("mouseout", function (e) {
  if (dark) {
    linkedin.style.color = "white";
  } else {
    linkedin.style.color = "black";
  }
});

github.addEventListener("mouseout", function (e) {
  if (dark) {
    github.style.color = "white";
  } else {
    github.style.color = "black";
  }
});

linkedin.addEventListener("mouseover", function (e) {
  linkedin.style.color = "#0077b5";
});

github.addEventListener("mouseover", function (e) {
  github.style.color = "#6e5494";
});
