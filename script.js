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
if(boardData [row][col] == 0){
boardData [row][col] = Player;
Player *= -1;
drawMarkers();
}
}


function drawMarkers() {
    for(let row = 0; row < 3; row++) {
        for(let col = 0; col < 3; col++) {
            if(boardData[row][col] == 1) {
                cellElements[(row * 3) + col].classList.add("cross");
            } else if(boardData[row][col] == -1) {
                cellElements[(row * 3) + col].classList.add("circle");
            }
        }
    }
}