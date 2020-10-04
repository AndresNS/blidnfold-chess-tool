const columns = ["a", "b", "c", "d", "e", "f", "g", "h"];
const rows = [1, 2, 3, 4, 5, 6, 7, 8];

const square = document.querySelector(".square");
const answer = document.querySelector(".answer");
const blackButton = document.querySelector(".black");
const whiteButton = document.querySelector(".white");
let currentSquare = {};

window.onload = function () {
    currentSquare = getRandomSquare();
    square.textContent = currentSquare.name;
}

blackButton.addEventListener("click", () => {
    if (currentSquare.color === "black") {
        answer.textContent = "Correct!";
    } else {
        answer.textContent = "Wrong!";
    }
    currentSquare = getRandomSquare();
    square.textContent = currentSquare.name;
});

whiteButton.addEventListener("click", () => {
    if (currentSquare.color === "white") {
        answer.textContent = "Correct!";
    } else {
        answer.textContent = "Wrong!";
    }
    currentSquare = getRandomSquare();
    square.textContent = currentSquare.name;
});

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
        color: squareColor
    };
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}