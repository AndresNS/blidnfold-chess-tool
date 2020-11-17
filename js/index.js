const columns = ["a", "b", "c", "d", "e", "f", "g", "h"];
const rows = [1, 2, 3, 4, 5, 6, 7, 8];

const square = document.querySelector(".chess-tool__square");
const answer = document.querySelector(".chess-tool__answer");
const blackButton = document.querySelector(
  ".chess-tool__controls__button.black"
);
const whiteButton = document.querySelector(
  ".chess-tool__controls__button.white"
);
let currentSquare = {};

window.onload = function () {
  currentSquare = getRandomSquare();
  square.textContent = currentSquare.name;
};

document.addEventListener("keydown", (e) => {
  if (e.code == "ArrowLeft") {
    if (guessColor("black")) {
      answer.textContent = "Correct";
    } else {
      answer.textContent = "Wrong";
    }
    currentSquare = getRandomSquare();
    square.textContent = currentSquare.name;
  } else if (e.code == "ArrowRight") {
    if (guessColor("white")) {
      answer.textContent = "Correct";
    } else {
      answer.textContent = "Wrong";
    }
    currentSquare = getRandomSquare();
    square.textContent = currentSquare.name;
  }
});

blackButton.addEventListener("click", () => {
  if (guessColor("black")) {
    answer.textContent = "Correct";
  } else {
    answer.textContent = "Wrong";
  }
  currentSquare = getRandomSquare();
  square.textContent = currentSquare.name;
});

whiteButton.addEventListener("click", () => {
  if (guessColor("white")) {
    answer.textContent = "Correct";
  } else {
    answer.textContent = "Wrong";
  }
  currentSquare = getRandomSquare();
  square.textContent = currentSquare.name;
});

function guessColor(color) {
  if (currentSquare.color === color) {
    return true;
  }
  return false;
}

function getRandomSquare() {
  const colIndex = getRandomInt(8);
  const rowIndex = getRandomInt(8);
  const col = columns[colIndex];
  const row = rows[rowIndex];
  let squareColor = "";

  if ((colIndex + rowIndex) % 2 == 0) {
    squareColor = "black";
  } else {
    squareColor = "white";
  }
  return {
    name: `${col}${row}`,
    color: squareColor,
  };
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

const searchBar = document.querySelector(".search-bar__form__input");
const searchButton = document.querySelector(".search-bar__form__button");
