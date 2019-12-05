// Variables for base costs
let cheer = 0; //Cheer (currency)
let cheerPerClick = 1; //How much cheer per click

// Game elements
const cheerSpan = document.getElementById("cheer"); //Element to display cheer
const treeImage = document.getElementById("tree"); //The tree image

// Upgrade Mittens
let mittenCost = 10;
let mittenCount = 0;
let mittenEffect = 1;
let mittenActive = false;
const mittenButton = document.getElementById("mitten-btn");
const mittenSpan = document.getElementById("mitten-span");
const mittenCountSpan = document.getElementById("mitten-count");

// Lights
let lightCost = 100;
let lightCount = 0;
let lightActive = false;
const lightButton = document.getElementById("light-btn");
const lightSpan = document.getElementById("light-span");
const lightCountSpan = document.getElementById("light-count");
const lightTree = document.getElementById("light-tree");

// Small Ornaments
let smOrnamentCost = 1000;
let smOrnamentCount = 0;
let smOrnamentEffect;
let smOrnamentActive = false;
const smOrnamentButton = document.getElementById("small-ornament-btn");
const smOrnamentSpan = document.getElementById("small-ornament-span");
const smOrnamentCountSpan = document.getElementById("small-ornament-count");
const smallTree = document.getElementById("small-tree");

// Large Ornaments
let lgOrnamentCost = 10000;
let lgOrnamentCount = 0;
let lgOrnamentEffect;
let lgOrnamentActive = false;
const lgOrnamentButton = document.getElementById("large-ornament-btn");
const lgOrnamentSpan = document.getElementById("large-ornament-span");
const lgOrnamentCountSpan = document.getElementById("large-ornament-count");
const largeTree = document.getElementById("large-tree");

// Elves
let elfCost = 50000;
let elfCount = 0;
let elfEffect;
let elfActive = false;
const elfButton = document.getElementById("elf-btn");
const elfSpan = document.getElementById("elf-span");
const elfCountSpan = document.getElementById("elf-count");
const elfTree = document.getElementById("elf-tree");

// Initialize the setInterval
let idleUpgrade = 0;
let idleTime = 1000;
setInterval(function() {
  cheer += idleUpgrade;
  UpdateCheer(cheerSpan, cheer);
}, idleTime);

// Initalize costs, cheer, etc.
UpdateCheer(cheerSpan, cheer);
UpdateCheer(mittenCountSpan, mittenCount);
UpdateCheer(mittenSpan, mittenCost);
UpdateCheer(lightCountSpan, lightCount);
UpdateCheer(lightSpan, lightCost);
UpdateCheer(smOrnamentCountSpan, smOrnamentCount);
UpdateCheer(smOrnamentSpan, smOrnamentCost);
UpdateCheer(lgOrnamentCountSpan, lgOrnamentCount);
UpdateCheer(lgOrnamentSpan, lgOrnamentCost);
UpdateCheer(elfCountSpan, elfCount);
UpdateCheer(elfSpan, elfCost);
checkButtons();

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
  if (lightCount === 1) {
    lightTree.style.display = "block";
  }
  UpdateCheer(lightCountSpan, lightCount);
  cheer -= lightCost;
  idleUpgrade += 1;
  lightCost *= 2;
  UpdateCheer(lightSpan, lightCost);
}

function addSmallOrnaments() {
  smOrnamentCount++;
  if (smOrnamentCount === 1) {
    smallTree.style.display = "block";
  }
  UpdateCheer(smOrnamentCountSpan, smOrnamentCount);
  idleUpgrade += 10;
  cheer -= smOrnamentCost;
  smOrnamentCost *= 2;
  UpdateCheer(smOrnamentSpan, smOrnamentCost);
}

function addLargeOrnaments() {
  lgOrnamentCount++;
  if (lgOrnamentCount === 1) {
    largeTree.style.display = "block";
  }
  UpdateCheer(lgOrnamentCountSpan, lgOrnamentCount);
  idleUpgrade += 100;
  cheer -= lgOrnamentCost;
  lgOrnamentCost *= 2;
  UpdateCheer(lgOrnamentSpan, lgOrnamentCost);
}

function addElf() {
  elfCount++;
  if (elfCount === 1) {
    elfTree.style.display = "block";
  }
  UpdateCheer(elfCountSpan, elfCount);
  if (idleTime >= 100) {
    idleTime -= 10;
  }
  cheer -= elfCost;
  elfCost *= 2;
  UpdateCheer(elfSpan, elfCost);
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

  if (cheer >= lgOrnamentCost) {
    lgOrnamentButton.disabled = false;
  } else {
    lgOrnamentButton.disabled = true;
  }

  if (cheer >= elfCost) {
    if (idleTime >= 100) {
      elfButton.disabled = false;
    } else {
      elfButton.disabled = true;
    }
  } else {
    elfButton.disabled = true;
  }
  if (idleTime <= 100) {
    elfButton.innerHTML = "Maxed";
  }
}
