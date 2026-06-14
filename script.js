let boardData = [
    [0,0,0],
    [0,0,0],
    [0,0,0]
]

let Player = 1;


const cellElements = document.querySelectorAll(".cell")
cellElements.forEach((cell, index) => {
    cell.addEventListener("click", () => {
        placeMarker(index);
    });
});

function placeMarker(index) {
let col = index % 3 
let row = (index - col) / 3

boardData [row][col] = Player;
Player *= -1;

}