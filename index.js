let turn = "X";
let gameOver = false;
const newGame = document.getElementById("newGame");
const message = document.querySelector("h2");

const sqArr = [];
sqArr.push({
  elt: document.getElementById("topLft")
});
sqArr.push({
  elt: document.getElementById("topMid")
});
sqArr.push({
  elt: document.getElementById("topRgt")
});
sqArr.push({
  elt: document.getElementById("midLft")
});
sqArr.push({
  elt: document.getElementById("midMid")
});
sqArr.push({
  elt: document.getElementById("midRgt")
});
sqArr.push({
  elt: document.getElementById("btmLft")
});
sqArr.push({
  elt: document.getElementById("btmMid")
});
sqArr.push({
  elt: document.getElementById("btmRgt")
});

sqArr[0].combos = [
  [sqArr[0].elt, sqArr[1].elt, sqArr[2].elt],
  [sqArr[0].elt, sqArr[3].elt, sqArr[6].elt],
  [sqArr[0].elt, sqArr[4].elt, sqArr[8].elt]
];
sqArr[1].combos = [
  [sqArr[0].elt, sqArr[1].elt, sqArr[2].elt],
  [sqArr[1].elt, sqArr[4].elt, sqArr[7].elt]
];
sqArr[2].combos = [
  [sqArr[0].elt, sqArr[1].elt, sqArr[2].elt],
  [sqArr[2].elt, sqArr[5].elt, sqArr[8].elt],
  [sqArr[2].elt, sqArr[4].elt, sqArr[6].elt]
];
sqArr[3].combos = [
  [sqArr[3].elt, sqArr[4].elt, sqArr[5].elt],
  [sqArr[0].elt, sqArr[3].elt, sqArr[6].elt]
];
sqArr[4].combos = [
  [sqArr[3].elt, sqArr[4].elt, sqArr[5].elt],
  [sqArr[1].elt, sqArr[4].elt, sqArr[7].elt],
  [sqArr[0].elt, sqArr[4].elt, sqArr[8].elt],
  [sqArr[2].elt, sqArr[4].elt, sqArr[6].elt]
];
sqArr[5].combos = [
  [sqArr[3].elt, sqArr[4].elt, sqArr[5].elt],
  [sqArr[2].elt, sqArr[5].elt, sqArr[8].elt]
];
sqArr[6].combos = [
  [sqArr[6].elt, sqArr[7].elt, sqArr[8].elt],
  [sqArr[0].elt, sqArr[3].elt, sqArr[6].elt],
  [sqArr[2].elt, sqArr[4].elt, sqArr[6].elt]
];
sqArr[7].combos = [
  [sqArr[6].elt, sqArr[7].elt, sqArr[8].elt],
  [sqArr[1].elt, sqArr[4].elt, sqArr[7].elt]
];
sqArr[8].combos = [
  [sqArr[6].elt, sqArr[7].elt, sqArr[8].elt],
  [sqArr[2].elt, sqArr[5].elt, sqArr[8].elt],
  [sqArr[0].elt, sqArr[4].elt, sqArr[8].elt]
];

const winner = sqEltArr => {
  if (
    sqEltArr[0].innerHTML === sqEltArr[1].innerHTML &&
    sqEltArr[1].innerHTML === sqEltArr[2].innerHTML
  ) {
    sqEltArr[0].style = "color : gold";
    sqEltArr[1].style = "color : gold";
    sqEltArr[2].style = "color : gold";
    changeTurn();
    message.innerHTML = `Player ${turn} wins!!!`;
    changeTurn();
    gameOver = true;
  }
};

const changeTurn = () => {
  if (turn === "X") {
    turn = "O";
  } else if (turn === "O") {
    turn = "X";
  }
};

const playerMove = square => {
  square.elt.onclick = () => {
    if (
      square.elt.innerHTML !== "O" &&
      square.elt.innerHTML !== "X" &&
      !gameOver
    ) {
      square.elt.innerText = turn;
      changeTurn();
      message.innerHTML = `Player ${turn}'s turn.`;

      if (turn === "O") {
        message.style = "color: blue";
      } else {
        message.style = "color: red";
      }

      square.combos.forEach(elt => {
        winner(elt);
      });
    }
  };
};

newGame.onclick = () => {
  sqArr.forEach(obj => {
    obj.elt.innerHTML = null;
    obj.elt.style = "color : white";
  });
  message.innerHTML = `Player ${turn} goes first.`;
  gameOver = false;
};

sqArr.forEach(obj => {
  playerMove(obj);
});
