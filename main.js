let g = console.log;
let squares = document.querySelectorAll(".square");
let turn = "x";
let title = document.querySelector(".title");
let X = document.querySelector("#X span");
let O = document.querySelector("#O span");
let Ocount = 0;
let Xcount = 0;
squares.forEach((square) => {
  square.addEventListener("click", function (e) {
    if (turn === "x" && e.target.innerHTML == "") {
      e.target.innerHTML = "x";
      turn = "o";
      title.innerHTML = `<span>${turn}</span> `;
    } else if (turn === "o" && e.target.innerHTML == "") {
      e.target.innerHTML = "o";
      turn = "x";
      title.innerHTML = turn;
    }
    winner();
  });
});

function animtion(num1, num2, num3) {
  num1.classList.add("the-winner");
  num2.classList.add("the-winner");
  num3.classList.add("the-winner");
  let countdown = setInterval(() => {
    title.innerHTML += ".";
  }, 300);
  setTimeout(() => {
    clearInterval(countdown);
  }, 999);
}
let blocks = [];
function winner() {
  for (i = 1; i < 10; i++) {
    blocks[i] = document.getElementById("item" + i).innerHTML;
  }
  if (blocks[1] == blocks[2] && blocks[3] == blocks[2] && blocks[1] != "") {
    animtion(squares[0], squares[1], squares[2]);
  } else if (
    blocks[4] == blocks[5] &&
    blocks[5] == blocks[6] &&
    blocks[5] != ""
  ) {
    animtion(squares[3], squares[4], squares[5]);
  } else if (
    blocks[7] == blocks[8] &&
    blocks[9] == blocks[8] &&
    blocks[8] != ""
  ) {
    animtion(squares[6], squares[7], squares[8]);
  } else if (
    blocks[1] == blocks[4] &&
    blocks[7] == blocks[4] &&
    blocks[4] != ""
  ) {
    animtion(squares[0], squares[3], squares[6]);
  } else if (
    blocks[2] == blocks[5] &&
    blocks[5] == blocks[8] &&
    blocks[2] != ""
  ) {
    animtion(squares[1], squares[4], squares[7]);
  } else if (
    blocks[9] == blocks[6] &&
    blocks[9] == blocks[3] &&
    blocks[6] != ""
  ) {
    animtion(squares[8], squares[5], squares[2]);
  } else if (
    blocks[1] == blocks[5] &&
    blocks[9] == blocks[5] &&
    blocks[5] != ""
  ) {
    animtion(squares[0], squares[4], squares[8]);
  } else if (
    blocks[3] == blocks[5] &&
    blocks[5] == blocks[9] &&
    blocks[5] != ""
  ) {
    animtion(squares[2], squares[4], squares[8]);
  } else if (
    blocks[4] == blocks[5] &&
    blocks[7] == blocks[5] &&
    blocks[5] != ""
  ) {
    animtion(squares[3], squares[4], squares[6]);
  }
  let collect = document.querySelector(".the-winner");
  if (collect) {
    let container = document.querySelector(".container");
    container.classList.add("no-clicking");
    title.innerHTML = `${collect.innerHTML} is the winner`;
    if (collect.innerHTML === "o") {
      Ocount++;
      O.innerHTML = Ocount;
    } else {
      Xcount++;
      X.innerHTML = Xcount;
    }

    setTimeout(function () {
      squares.forEach((square) => {
        square.classList.remove("the-winner");
        square.innerHTML = "";
      });
      title.innerHTML = "<span>X O</span> game";
      container.classList.remove("no-clicking");
    }, 1000);
  }
}
// winner()
