// Variables
let cheer = 0; //Cheer (currency)
let cheerPerClick = 1; //How much cheer per click

const cheerSpan = document.getElementById("cheer"); //Element to display cheer

// Reset the game (for testing)
function GameReset() {}

// Add cheer by clicking the tree
function CheerClick() {
  cheer += cheerPerClick;
  console.log(cheer);
  UpdateCheer();
}

// Update cheer count on front end
function UpdateCheer() {
  cheerSpan.innerHTML = Number(cheer).toLocaleString("en");
}
