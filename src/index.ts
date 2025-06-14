import "./styles/style.scss";

//let section = document.querySelector("#cards");

//how do you add an image to a section.

// let cardImg1 = document.createElement("img");
// let cardImg2 = document.createElement("img");
// let cardImg3 = document.createElement("img");

//cardFlipped and cardBackground

let attempts: number = 0;

//Function for assigning the children elements to the divs

//it picks three of those options and duplicates them onto the cards randomly.

function assignCards(divs: NodeListOf<Element>) {
  //pick three numbers
  //go from there

  let options: Array<number> = [];

  //gets us 3 random numbers between 1 and 10
  //if the same number is generated twice then an iteration is added to the loop to find a unique number
  for (let i = 0; i < 3; i++) {
    let selection = Math.floor(Math.random() * 10) + 1;

    if (!options.includes(selection)) {
      options.push(selection);
      options.push(selection);
    } else {
      i--;
    }
    //push it twice so we have a matching pair
  }

  //assign the cards from the options
  divs.forEach((div) => {
    let element = document.createElement("h2");
    let index = Math.floor(Math.random() * options.length - 1) + 1;
    element.innerHTML = `${options[index]}`;
    options.splice(index, 1);
    element.setAttribute("class", "cardText");
    element.style.visibility = "hidden";
    div.appendChild(element);
  });

  if (options.length == 0) {
    console.log("Cards Assigned correctly");
  } else {
    console.error("Card Assigning failed, array not empty");
  }
}

const divs = document.querySelectorAll("#cards > div");
divs.forEach((div) => {
  div.setAttribute("class", "cardBackground");
  div.addEventListener("click", onCardClick);
});

function onCardClick(e: Event) {
  let target = e.target as HTMLElement;
  if (target.classList.contains("cardBackground")) {
    target.removeAttribute("class");
    target.setAttribute("class", "cardFlipped");
    if (target.childNodes) {
      let childNode = target.childNodes[0] as HTMLElement;
      childNode.style.visibility = "visible";
    }
  }

  //remove the attempts if the number of cards flipped is a multiple of 2.
}


//when the first card is clicked, the card is revealed
//when the second card is clicked, the next card is revealed

//if the cards dont match, all cards are reset to face down and
//the attempt is decremented.

function attempt(card: HTMLElement){
  let target = card.childNodes[0] as HTMLElement;
  let pairToMatch: number = parseInt(target.innerHTML);
}


(() => {
  assignCards(divs);
})();

//section ? section.appendChild(cardImg1) : null;
