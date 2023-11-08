let score = 0;
let revealedAmount = 0;
let activeTile;
let isLocked = false;
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
      if (isLocked) {
        return;
      }
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
          isLocked = true;
          setTimeout(function () {
            activeTile.classList.remove("clicked");
            tile.classList.remove("clicked");
            activeTile = null;
            isLocked = false;
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
  location.reload();
}

function generateComment() {
  let comment = "Well, you did fine, I guess. It's not rocket science.";
  if (score < 40) {
    comment = "That was fantastic, but you can do even better!";
  }
  if (score < 30) {
    comment = "Impressive job! Your talent knows no bounds. You were on fire!";
  }
  document.getElementById("comment").innerHTML = comment;
}
