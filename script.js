function handleMove(sourceSquare, targetSquare) {
    const sourceElement = document.getElementById(sourceSquare);
    const targetElement = document.getElementById(targetSquare);

    const pieceClass = sourceElement.querySelector(".piece").classList[1];
    sourceElement.querySelector(".piece").classList.remove(pieceClass);
    targetElement.innerHTML = "";

    const newPiece = document.createElement("div");
    newPiece.classList.add("piece", pieceClass);
    targetElement.appendChild(newPiece);
}

// Example: Simulate a move when the page is loaded
document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        handleMove("e2", "e4");
    }, 1000); // Simulate a move after 1 second
});
