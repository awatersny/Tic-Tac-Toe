let turn = "X";
let gameOver = false;
let emptySqs = 9;
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
    sqEltArr.forEach(elt => {
      elt.style = "color : gold";
    });
    changeTurn();
    message.innerHTML = `Player ${turn} wins!!!`;
    gameOver = true;
  }
};

const drawCheck = () => {
  if (emptySqs === 0) {
    message.innerHTML = `This match is a draw.`;
    message.style = "color: black";
    gameOver = true;
  }
};

const changeTurn = () => {
  if (turn === "X") {
    turn = "O";
    message.style = "color: blue";
  } else if (turn === "O") {
    turn = "X";
    message.style = "color: red";
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
      emptySqs--;
      changeTurn();
      message.innerHTML = `Player ${turn}'s turn.`;
      if (emptySqs === 0) {
        drawCheck();
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
  changeTurn();
  message.innerHTML = `Player ${turn} goes first.`;
  gameOver = false;
  emptySqs = 9;
};

sqArr.forEach(obj => {
  playerMove(obj);
});
