
function roll() {
    return diceNum = Math.floor(Math.random() * 6) + 1;
}

function imageSwitch() {
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
    console.log("yolo");
    document.getElementById("leftDiePic").setAttribute("src", imageSwitch());
    document.getElementById("rightDiePic").setAttribute("src", imageSwitch());
}

document.getElementById("rollButton").addEventListener("click", changeDieFace);
