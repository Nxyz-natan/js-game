let boardData = [
    [0,0,0],
    [0,0,0],
    [0,0,0]
]

let Player = 1;
let gameOver = false;


const cellElements = document.querySelectorAll(".cell");
const resultElement = document.getElementById("result");
cellElements.forEach((cell, index) => {
    cell.addEventListener("click", () => {
        placeMarker(index);
    });
});

function placeMarker(index) {
let col = index % 3 
let row = (index - col) / 3
if(boardData [row][col] == 0 && gameOver == false){
boardData [row][col] = Player;
Player *= -1;
drawMarkers();
checkResults();
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

function checkResults() {
    for(let i = 0; i < 3; i++ ) {
        let rowSum = boardData[i][0] + boardData[i][1] + boardData[i][2];
        let colSum = boardData[0][i] + boardData[1][i] + boardData[2][i];
        if(rowSum == 3 || colSum == 3) {
            endGame(1);
            if(rowSum == 3) drawLine(i, "row");
            if(colSum == 3) drawLine(i, "col");
            return;

        } else if(rowSum == -3 || colSum == -3) {
            endGame(2);
            if(rowSum == -3) drawLine(i, "row");
            if(colSum == -3) drawLine(i, "col");
            return

        }
        
    }
    let diagonalSum1 = boardData[0][0] + boardData[1][1] + boardData[2][2];
    let diagonalSum2 = boardData[0][2] + boardData[1][1] + boardData[2][0];
    if(diagonalSum1 == 3) { endGame(1); drawLine(0, "diag1"); return; }
    if(diagonalSum1 == -3) { endGame(2); drawLine(0, "diag1"); return; }
    if(diagonalSum2 == 3) { endGame(1); drawLine(0, "diag2"); return; }
    if(diagonalSum2 == -3) { endGame(2); drawLine(0, "diag2"); return; }
    if(boardData[0].indexOf(0) == -1 &&
    boardData[1].indexOf(0) == -1 &&
    boardData[2].indexOf(0) == -1) {
        endGame(0);
        return

    }

}

function endGame(winner) {
    gameOver = true;
    if(winner == 0) {
        resultElement.innerText = "It's a tie!"

    }else {
        resultElement.innerText = `Player ${winner} wins!`

    }
}

const restartButton = document.getElementById("restart");
restartButton.addEventListener("click",() => {
    boardData = [
    [0,0,0],
    [0,0,0],
    [0,0,0]
    ]
    Player = 1;
    gameOver = false;
    cellElements.forEach(cell => {
        cell.classList.remove("cross", "circle");
    });
    resultElement.innerText = ""
    const line = document.getElementById("line");
    line.style.width = "0";
    line.style.height = "6px";
    line.style.transform = "";
});


function drawLine(index, type) {
    const line = document.getElementById("line");
    const board = document.querySelector(".board");
    const size = 320;
    const cellSize = size / 3;
    line.style.width = size + "px" ;
    line.style.top = (cellSize * index + cellSize /2) + "px";
    line.style.left = "0px";
    if(type == "col") {
    line.style.width = "6px" ;
    line.style.top = "0px";
    line.style.left = (cellSize * index + cellSize /2) + "px"; 
    line.style.height = size + "px";
    }
    if(type == "diag2") {
    line.style.width = (size * 1.41) + "px" ;
    line.style.top = size + "px";
    line.style.left =  "0px"; 
    line.style.transform = "rotate(-45deg)";
    line.style.transformOrigin = "bottom left";
    }

    if(type == "diag1") {
    line.style.width = (size * 1.41) + "px" ;
    line.style.top = "0px";
    line.style.height = "6px";
    line.style.left = "0px"; 
    line.style.transform = "rotate(45deg)";
    line.style.transformOrigin = "top left";
    }
    

}