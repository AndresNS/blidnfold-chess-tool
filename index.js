const columns = ["a", "b", "c", "d", "e", "f", "g", "h"];
const rows = [1, 2, 3, 4, 5, 6, 7, 8];

const generateButton = document.querySelector(".generate-button");
const answer = document.querySelector(".answer");

generateButton.addEventListener("click", ()=>{

    const col = columns[getRandomInt(8)];
    const row = rows[getRandomInt(8)];
    answer.textContent = `${col}${row}`;
});

function getRandomInt(max){
    return Math.floor(Math.random() * Math.floor(max));
}