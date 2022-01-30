function reveal() {
var reveals = document.querySelectorAll(".reveal");

for (var i = 0; i < reveals.length; i++) {
  var windowHeight = window.innerHeight;
  var elementTop = reveals[i].getBoundingClientRect().top;
  var elementVisible = 150;

  if (elementTop < windowHeight - elementVisible) {
    reveals[i].classList.add("active");
  } else {
    reveals[i].classList.remove("active");
  }
}
}

window.addEventListener("scroll", reveal);
const filterButtons = document.querySelector("#filter-btns").children;
const items = document.querySelector(".portfolio-gallery").children;

for (let i = 0; i < filterButtons.length; i++) {
    filterButtons[i].addEventListener("click", function () {
        for (let j = 0; j < filterButtons.length; j++) {
            filterButtons[j].classList.remove("active")
        }
        this.classList.add("active");
        const target = this.getAttribute("data-target")

        for (let k = 0; k < items.length; k++) {
            items[k].style.display = "none";
            if (target == items[k].getAttribute("data-id")) {
                items[k].style.display = "block";
            }
            if (target == "all") {
                items[k].style.display = "block";
            }
        }

    })
}
function myFunctionSkills() {
var elmnt = document.getElementById("skills");
elmnt.scrollIntoView();
}

function myFunctionBackground() {
var elmnt = document.getElementById("background");
elmnt.scrollIntoView();
}

function myFunctionPortfolio() {
var elmnt = document.getElementById("Portfolio");
elmnt.scrollIntoView();
}

function myFunctionHire() {
var elmnt = document.getElementById("hire");
elmnt.scrollIntoView();
}
