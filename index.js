let turn = "X";
let gameOver = false;
const newGame = document.getElementById("newGame");
const sqArr = [];
sqArr.push(document.getElementById("topLft"));
sqArr.push(document.getElementById("topMid"));
sqArr.push(document.getElementById("topRgt"));
sqArr.push(document.getElementById("midLft"));
sqArr.push(document.getElementById("midMid"));
sqArr.push(document.getElementById("midRgt"));
sqArr.push(document.getElementById("btmLft"));
sqArr.push(document.getElementById("btmMid"));
sqArr.push(document.getElementById("btmRgt"));
const changeTurn = () => {
  if (turn === "X") {
    turn = "O";
  } else if (turn === "O") {
    turn = "X";
  }
};
const playerMove = square => {
  square.onclick = () => {
    if (square.innerHTML !== "O" && square.innerHTML !== "X") {
      square.innerText = turn;
      changeTurn();
    }
  };
};
sqArr.forEach(elt => {
  playerMove(elt);
});
newGame.onclick = () => {
  sqArr.forEach(elt => {
    elt.innerHTML = null;
  });
  gameOver = false;
};
