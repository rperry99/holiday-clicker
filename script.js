// Variables for base costs
let cheer = 0; //Cheer (currency)
let cheerPerClick = 1; //How much cheer per click
let upgradeCostIncrease = 0.5;
let mittenCost = 10;
let mittenCount = 0;
let mittenEffect = 1;
let lightCost = 100;
let lightCount = 0;

// Game elements
const cheerSpan = document.getElementById("cheer"); //Element to display cheer

// Upgrade Mittens
const mittenButton = document.getElementById("mitten-btn");
const mittenSpan = document.getElementById("mitten-span");
const mittenCountSpan = document.getElementById("mitten-count");

// Upgrade Lights
const lightButton = document.getElementById("light-btn");
const lightSpan = document.getElementById("light-span");
const lightCountSpan = document.getElementById("light-count");

// Initalize costs, cheer, etc.
UpdateCheer(cheerSpan, cheer);
UpdateCheer(mittenCountSpan, mittenCount);
UpdateCheer(mittenSpan, mittenCost);
UpdateCheer(lightCountSpan, lightCount);
UpdateCheer(lightSpan, lightCost);
checkButtons();

// Array of buttons and array of costs
let buttonArray = [mittenButton, lightButton];
let costArray = [mittenCost, lightCost];

// Reset the game (for testing)
function GameReset() {}

// Add cheer by clicking the tree
function CheerClick() {
  //Update the cheer amount per click from mittens
  cheer += cheerPerClick;
  console.log(cheerPerClick);
  UpdateCheer(cheerSpan, cheer);
}

// Update cheer count on front end
function UpdateCheer(element, number) {
  element.innerHTML = Number(Math.trunc(number)).toLocaleString("en");
  checkButtons();
}

function idleUpgrades(count, multiplier) {
  setInterval(function() {
    cheer += count * multiplier;
    UpdateCheer(cheerSpan, cheer);
    console.log(cheer);
  }, 1000);
}

// Upgrade amount of mittens
function addMittens() {
  mittenCount += 1;
  UpdateCheer(mittenCountSpan, mittenCount);
  cheerPerClick = cheerPerClick += mittenEffect;
  cheer -= mittenCost;
  mittenCost *= 2;
  UpdateCheer(mittenSpan, mittenCost);
  UpdateCheer(cheerSpan, cheer);
}

// Upgrade the amount of lights
function addLights() {
  lightCount++;
  UpdateCheer(lightCountSpan, lightCount);
  cheer -= lightCost;
  idleUpgrades(lightCount, 1);
  lightCost *= 2;
  UpdateCheer(lightSpan, lightCost);
}

// Check to see if you can afford an upgrade function
function checkButtons() {
  if (cheer >= mittenCost) {
    mittenButton.disabled = false;
  } else {
    mittenButton.disabled = true;
  }

  if (cheer >= lightCost) {
    lightButton.disabled = false;
  } else {
    lightButton.disabled = true;
  }
}
