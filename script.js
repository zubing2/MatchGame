//Wei Work

let score = 0;
let boardArray;
function initialize() {
  boardArray = [a1, a2, a3, a4, a5, a6, a7, a8, a1, a2, a3, a4, a5, a6, a7, a8];
}
function randomizeBoard() {
  let tempArray = boardArray;
  let len = tempArray.length;
  for (let i = 0; i < boardArray.length; i++) {
    let num = (Math.random() * len).toFixed();
    boardArray[i] = tempArray[num];
    tempArray.splice(num - 1, num);
  }
}
function play() {}
function display() {}
function generateComment() {}
function reset() {
  randomizeBoard();
}
