//craps


function roll() {
    return diceNum = Math.ceil(Math.random() * 6);
}

function diceImageSwitch() {
    var picture;
    switch (roll()) {
        case 1:
            picture = "d61.png";
            break;
        case 2:
            picture = "d62.png";
            break;
        case 3:
            picture = "d63.png";
            break;
        case 4:
            picture = "d64.png";
            break;
        case 5:
            picture = "d65.png";
            break;
        case 6:
            picture = "d66.png";
            break;
        default:
            console.log("Dice Roll Error");
            break;
    }
    return picture;
}

function changeDieFace() {
    document.getElementById("leftDiePic").setAttribute("src", diceImageSwitch());
    document.getElementById("rightDiePic").setAttribute("src", diceImageSwitch());
}

document.getElementById("rollButton").addEventListener("click", changeDieFace);


