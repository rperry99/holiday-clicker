// Variables for base costs
let cheer = 1000; //Cheer (currency)
let cheerPerClick = 1; //How much cheer per click

// Game elements
const cheerSpan = document.getElementById("cheer"); //Element to display cheer

// Upgrade Mittens
let mittenCost = 10;
let mittenCount = 0;
let mittenEffect = 1;
const mittenButton = document.getElementById("mitten-btn");
const mittenSpan = document.getElementById("mitten-span");
const mittenCountSpan = document.getElementById("mitten-count");

// Lights
let lightCost = 100;
let lightCount = 0;
const lightButton = document.getElementById("light-btn");
const lightSpan = document.getElementById("light-span");
const lightCountSpan = document.getElementById("light-count");

// Small Ornaments
let smOrnamentCost = 1000;
let smOrnamentCount = 0;
let smOrnamentEffect;
const smOrnamentButton = document.getElementById("small-ornament-btn");
const smOrnamentSpan = document.getElementById("small-ornament-span");
const smOrnamentCountSpan = document.getElementById("small-ornament-count");

// Initalize costs, cheer, etc.
UpdateCheer(cheerSpan, cheer);
UpdateCheer(mittenCountSpan, mittenCount);
UpdateCheer(mittenSpan, mittenCost);
UpdateCheer(lightCountSpan, lightCount);
UpdateCheer(lightSpan, lightCost);
UpdateCheer(smOrnamentCountSpan, smOrnamentCount);
UpdateCheer(smOrnamentSpan, smOrnamentCost);
checkButtons();

// Initialize the set timeout
var idleLights, idleSmallOrnament;
idleLights = idleSmallOrnament = setInterval(function() {
  cheer += 0;
}, 1000);

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
  clearInterval(idleLights);
  UpdateCheer(lightCountSpan, lightCount);
  cheer -= lightCost;
  idleLights = setInterval(function() {
    cheer += lightCount;
    UpdateCheer(cheerSpan, cheer);
  }, 1000);
  lightCost *= 2;
  UpdateCheer(lightSpan, lightCost);
}

function addSmallOrnaments() {
  smOrnamentCount++;
  clearInterval(idleSmallOrnament);
  UpdateCheer(smOrnamentCountSpan, smOrnamentCount);
  cheer -= smOrnamentCost;
  idleSmallOrnament = setInterval(function() {
    cheer += smOrnamentCount * 10;
    UpdateCheer(cheerSpan, cheer);
  }, 1000);
  smOrnamentCost *= 2;
  UpdateCheer(smOrnamentSpan, smOrnamentCost);
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

  if (cheer >= smOrnamentCost) {
    smOrnamentButton.disabled = false;
  } else {
    smOrnamentButton.disabled = true;
  }
}
