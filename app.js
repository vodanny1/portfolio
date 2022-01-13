const linkedin = document.querySelector("#linkedin")
const github = document.querySelector("#github")

// Create a blank div, get the height of the absolute div
// set the new height to be the blank div so that it separates
// let mainDivHeight = document.getElementsByClassName('section1')[0].offsetHeight
// let blankDiv = document.getElementsByClassName('blankDiv')[0]
// blankDiv.style.height = mainDivHeight + 5 + "px"

let dark = false
function toggleDark() {
    dark = !dark
    const doc = document.body
    doc.classList.toggle("dark-mode")
    if (dark) {
        linkedin.style.color = "white"
        github.style.color = "white"
    } else {
        linkedin.style.color = "black"
        github.style.color = "black"
    }

}

const btnDark = document.querySelector("#btnDark")

btnDark.addEventListener("click", function (e) {
    toggleDark()
})

linkedin.addEventListener("mouseout", function (e) {
    if (dark) {
        linkedin.style.color = "white"
    } else {
        linkedin.style.color = "black"
    }
})

github.addEventListener("mouseout", function (e) {
    console.log("git out")
    if (dark) {
        github.style.color = "white"
    } else {
        github.style.color = "black"
    }
})

linkedin.addEventListener("mouseover", function (e) {
    linkedin.style.color = "#0077b5"
})

github.addEventListener("mouseover", function (e) {
    github.style.color = "#6e5494"
})


