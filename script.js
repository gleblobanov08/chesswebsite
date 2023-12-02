/*
function initializeBoard() {
    const boardElement = document.getElementById("board");

    for (let i = 7; i >= 0; i--) {
        const row = document.createElement("div");
        row.classList.add("row");

        for (let j = 0; j < 8; j++) {
            const square = document.createElement("div");
            square.classList.add("square");
            square.id = `${String.fromCharCode(97 + j)}${8 - i}`;

            if (boardState[i][j] !== "") {
                const piece = document.createElement("div");
                piece.classList.add("piece", boardState[i][j]);
                piece.setAttribute("draggable", "true");
                piece.addEventListener("dragstart", handleDragStart);
                square.appendChild(piece);
            }

            square.addEventListener("dragover", handleDragOver);
            square.addEventListener("drop", handleDrop);

            row.appendChild(square);
        }

        boardElement.appendChild(row);
    }
}
*/

function handleMove(sourceSquare, targetSquare) {
    const sourceElement = document.getElementById(sourceSquare);
    const targetElement = document.getElementById(targetSquare);

    const pieceClass = sourceElement.querySelector(".piece").classList[1];
    targetElement.innerHTML = "";

    const newPiece = document.createElement("div");
    newPiece.classList.add("piece", pieceClass);
    targetElement.appendChild(newPiece);

    sourceElement.querySelector(".piece").classList.remove(pieceClass);
}

document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        handleMove("e2", "e4");
    }, 1000);
});

function handleDragStart(event) {
    event.dataTransfer.setData("text/plain", event.target.parentElement.id);
}

function handleDragOver(event) {
    event.preventDefault();
}

function handleDrop(event) {
    event.preventDefault();
    const sourceSquareId = event.dataTransfer.getData("text/plain");
    const targetSquareId = event.target.id;

    handleMove(sourceSquareId, targetSquareId);
}

const squaresWithPieces = document.querySelectorAll('.square .piece');
squaresWithPieces.forEach(square => {
    square.setAttribute('draggable', true);
    square.addEventListener('dragstart', handleDragStart);
});

const allSquares = document.querySelectorAll('.square');
allSquares.forEach(square => {
    square.addEventListener('dragover', handleDragOver);
    square.addEventListener('drop', handleDrop);
});
