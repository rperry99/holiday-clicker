// Variables for base costs
let cheer = 0; //Cheer (currency)
let cheerPerClick = 1; //How much cheer per click
let mittenCost = 10;
let mittenCount = 0;
let mittenEffect = 0.5;

// Game elements
const cheerSpan = document.getElementById("cheer"); //Element to display cheer

// Upgrade Mittens
const mittenButton = document.getElementById("mitten-btn");
const mittenSpan = document.getElementById("mitten-span");
const mittenCountSpan = document.getElementById("mitten-count");

// Check if you can click buttons

// Reset the game (for testing)
function GameReset() {}

// Add cheer by clicking the tree
function CheerClick() {
  //Update the cheer amount per click from mittens

  cheer += cheerPerClick;
  console.log(cheerPerClick);
  checkButtons();
  UpdateCheer();
}

// Update cheer count on front end
function UpdateCheer() {
  cheerSpan.innerHTML = Number(cheer).toLocaleString("en");
}

// Upgrade amount of mittens
function addMittens() {
  mittenCount += 1;
  mittenCountSpan.innerHTML = mittenCount;
  cheerPerClick = cheerPerClick * mittenEffect + cheerPerClick;
  cheer -= mittenCost;
  UpdateCheer();
  checkButtons();
}

// Check to see if you can afford an upgrade function
function checkButtons() {
  if (cheer >= mittenCost) {
    mittenButton.disabled = false;
  } else {
    mittenButton.disabled = true;
  }
}
