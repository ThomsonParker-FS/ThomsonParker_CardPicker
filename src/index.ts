import "./styles/style.scss";

//let section = document.querySelector("#cards");

//how do you add an image to a section.

// let cardImg1 = document.createElement("img");
// let cardImg2 = document.createElement("img");
// let cardImg3 = document.createElement("img");

//cardFlipped and cardBackground

let divs = document.querySelectorAll("#cards > div");
divs.forEach((div) => {
  div.setAttribute("class", "cardFlipped");
});

//section ? section.appendChild(cardImg1) : null;
