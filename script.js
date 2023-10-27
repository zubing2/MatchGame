//Wei Work
let score = 0;
let revealedAmount = 0;
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
