//Wei Work
let score = 0;
let revealedAmount = 0;
let activeTile;
let emojis = [
  "🎃",
  "🍁",
  "🍂",
  "🥧",
  "🦃",
  "🌽",
  "👻",
  "🦇",
  "🎃",
  "🍁",
  "🍂",
  "🥧",
  "🦃",
  "🌽",
  "👻",
  "🦇",
];

function createBoard() {
  let tempArray = emojis;
  for (let i = 0; i < 16; i++) {
    let num = Math.floor(Math.random() * tempArray.length);
    let tile = document.createElement("div");
    tile.className = "tile";
    tile.innerHTML = emojis[num];
    tile.onclick = function () {
      if (tile.classList != "matched") {
        if (activeTile == null) {
          console.log("clicked active tile");
          activeTile = tile;
          return;
        }
      }
      if (activeTile.innerHTML != tile.innerHTML) {
        console.log("clicked but not matched");
        activeTile = null;
      }
      if (activeTile.innerHTML == tile.innerHTML) {
        activeTile.classList.add("matched");
        activeTile.classList.add("matched");
        activeTile = null;
        console.log("clicked and matched");
        revealedAmount += 2;
        if (revealedAmount == 16) {
          return "Game Won!";
        }
        return;
      }
    };
    document.querySelector(".container").appendChild(tile);
    tempArray.splice(num, 1);
  }
}
function reset() {
  emojis = [
    "🎃",
    "🍁",
    "🍂",
    "🥧",
    "🦃",
    "🌽",
    "👻",
    "🦇",
    "🎃",
    "🍁",
    "🍂",
    "🥧",
    "🦃",
    "🌽",
    "👻",
    "🦇",
  ];

  /* Found here: https://www.tutorialspoint.com/How-can-I-remove-all-child-elements-of-a-DOM-node-in-JavaScript*/
  while (document.querySelector(".container").hasChildNodes()) {
    document
      .querySelector(".container")
      .removeChild(document.querySelector(".container").firstChild);
  }
  createBoard();
}
function generateComment() {}
