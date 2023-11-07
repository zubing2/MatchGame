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
      tile.classList.add("clicked");
      score++;
      document.getElementById("score").innerHTML = `Score: ${score}`;
      if (!tile.classList.contains("matched")) {
        if (activeTile == null) {
          console.log("clicked active tile");
          activeTile = tile;
          return;
        }
        if (activeTile === tile) {
          return;
        }
        if (activeTile.innerHTML != tile.innerHTML) {
          console.log("clicked but not matched");
          setTimeout(function () {
            activeTile.classList.remove("clicked");
            tile.classList.remove("clicked");
            activeTile = null;
          }, 500);
        }
        if (activeTile.innerHTML == tile.innerHTML) {
          activeTile.classList.add("matched");
          tile.classList.add("matched");
          activeTile = null;
          console.log("clicked and matched");
          revealedAmount += 2;
          if (revealedAmount == 16) {
            console.log("Game Won!");
            generateComment();
          }
          return;
        }
      }
    };
    document.querySelector(".container").appendChild(tile);
    tempArray.splice(num, 1);
  }
}
function reset() {
  score = 0;
  document.getElementById("score").innerHTML = `Score: 0`;
  document.getElementById("comment").innerHTML = "";
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
function generateComment() {
  let comment;
  if (score < 40) {
    comment = "Well, you're doing fine, I guess. It's not rocket science.";
  }
  if (score < 30) {
    comment = "You're making progress, keep going! You've got this!";
  }
  if (score < 20) {
    comment = "Impressive! Your talent knows no bounds. You're on fire!";
  }
  document.getElementById("comment").innerHTML = comment;
}
