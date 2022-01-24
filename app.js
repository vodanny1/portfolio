const linkedin = document.querySelector("#linkedin");
const github = document.querySelector("#github");
const btnDark = document.querySelector("#btnDark");

const theme = localStorage.getItem("data-theme");

if (theme === "dark") {
  document.documentElement.setAttribute("data-theme", "dark");
  dark = true;
  linkedin.style.color = "white";
  github.style.color = "white";
} else {
  dark = false;
  document.documentElement.setAttribute("data-theme", "light");
  linkedin.style.color = "black";
  github.style.color = "black";
}

function toggleDark() {
  if (!dark) {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("data-theme", "dark");
    linkedin.style.color = "white";
    github.style.color = "white";
    btnDark.style.color = "white";
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("data-theme", "light");
    linkedin.style.color = "black";
    github.style.color = "black";
    btnDark.style.color = "black";
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
