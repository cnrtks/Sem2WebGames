
var occupied = [9];
gameOver = false;

document.getElementById("resetButton").addEventListener("click", clearBoard);

for (var i = 0; i < document.getElementsByTagName("td").length; i++) {
    document.getElementsByTagName("td")[i].onclick = function () {
        userTurn(this);
    };
}

function userTurn(cell) {
    while (gameOver == false) {
        for (var i = 0; i < document.getElementsByTagName("td").length; i++) {
            if (document.getElementsByTagName("td")[i] === cell) {
                if (occupied[i] != 1 && occupied[i] != 2) {
                    occupied[i] = 1;
                    cell.innerText = "X";
                    checkWin(i);
                    setTimeout(npcTurn, 500);
                } else {
                    alert("Occupied Cell");
                }
            }
        }
    }
}

function npcTurn() {
    var tempCell;
    do {
        tempCell = Math.floor(Math.random() * 9);
    } while (occupied[tempCell] != null);
    document.getElementsByTagName("td")[tempCell].innerText = "O";
    occupied[tempCell] = 2;
    checkWin(tempCell);
}
//i know this is the most inefficient way to do this imaginable but i am strapped for time
function checkWin(lastCell) {
    var win = false;
    switch (lastCell) {
        case 0:
        case 1:
        case 2:
            if (occupied[lastCell] === occupied[lastCell + 3] &&
                    occupied[lastCell] === occupied[lastCell + 6]) {
                win = true;
            }
            break;
        case 3:
        case 4:
        case 5:
            if (occupied[lastCell] === occupied[lastCell + 3] &&
                    occupied[lastCell] === occupied[lastCell - 6]) {
                win = true;
            }
            break;
        case 6:
        case 7:
        case 8:
            if (occupied[lastCell] === occupied[lastCell - 3] &&
                    occupied[lastCell] === occupied[lastCell - 6]) {
                win = true;
            }
            break;
        default:
            console.log("Error checking lastCell");
    }

    switch (lastCell) {
        case 0:
        case 3:
        case 6:
            if (occupied[lastCell] === occupied[lastCell + 1] &&
                    occupied[lastCell] === occupied[lastCell + 2]) {
                win = true;
            }
            break;
        case 1:
        case 4:
        case 7:
            if (occupied[lastCell] === occupied[lastCell - 1] &&
                    occupied[lastCell] === occupied[lastCell + 1]) {
                win = true;
            }
            break;
        case 2:
        case 5:
        case 8:
            if (occupied[lastCell] === occupied[lastCell - 1] &&
                    occupied[lastCell] === occupied[lastCell - 2]) {
                win = true;
            }
            break;
    }

    switch (lastCell) {
        case 1:
        case 3:
        case 5:
        case 7:
            break;
        case 4:
            if (occupied[2] === occupied[4] && occupied[2] === occupied[6]) {
                win = true;
            }
        case 0:
        case 8:
            if (occupied[0] === occupied[4] && occupied[0] === occupied[8]) {
                win = true;
            }
            break;
        case 2:
        case 6:
            if (occupied[2] === occupied[4] && occupied[2] === occupied[6]) {
                win = true;
            }
            break;
    }
    if (win == true) {
        var message = occupied[lastCell] == 1 ? "You Win" : "You Lose";
        alert(message);
        gameOver = true;
    }
}

function clearBoard() {
    for (var i = 0; i < document.getElementsByTagName("td").length; i++) {
        document.getElementsByTagName("td")[i].innerText = "";
        occupied[i] = null;
    }
}
