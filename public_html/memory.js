//@author conor tompkins
//implements code by fisher, yates; fisherYates()
//
//game of memory
var deck = [0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5];
fisherYates(deck);
showCards();
setTimeout(hideCards, 3000);
var clickCount = 0;
var card1Value;
var card1Pos;
var matches = 0;

for (var i = 0; i < deck.length; i++) {
    document.getElementsByTagName("td")[i].addEventListener("click", function () {
        cardClick(this);
    });
}

function cardClick(cell) {
    for (var i = 0; i < deck.length; i++) {
        if (cell === document.getElementsByTagName("td")[i]) {
            showCard(i);
            clickCount++;
            if (clickCount % 2 != 0) {
                card1Value = deck[i];
                card1Pos = i;
            } else {
                if (deck[i] === card1Value) {
                    matches++;
                } else {
                    var hider = i;
                    setTimeout(function () {
                        hideCard(card1Pos);
                        hideCard(hider);
                    }, 1000);
                }
            }
        }
    }
    if(matches >= 6){
        alert("You Win");
    }
    else if(clickCount > 15){
        alert("You Lose");
    }
}

function showCard(int) {
    document.getElementsByTagName("img")[int].setAttribute("src", pictureSwitch(deck[int]));
}

function showCards() {
    for (var i = 0; i < deck.length; i++) {
        showCard(i);
    }
}

function hideCard(num) {
    document.getElementsByTagName("img")[num].setAttribute("src", "cardBack.png");
}

function hideCards() {
    for (var i = 0; i < deck.length; i++) {
        hideCard(i);
    }
}

//@author fisher, Yate
//sedition.com
function fisherYates(myArray) {
    var i = myArray.length;
    if (i == 0)
        return false;
    while (--i) {
        var j = Math.floor(Math.random() * (i + 1));
        var tempi = myArray[i];
        var tempj = myArray[j];
        myArray[i] = tempj;
        myArray[j] = tempi;
    }
}

function pictureSwitch(num) {
    var picName;
    switch (num) {
        case 0:
            picName = "cardCircleBlue.png";
            break;
        case 1:
            picName = "cardTriangleGreen.png";
            break;
        case 2:
            picName = "cardDimondRed.png";
            break;
        case 3:
            picName = "cardStarYellow.png";
            break;
        case 4:
            picName = "cardSkullGrey.png";
            break;
        case 5:
            picName = "cardLinesPurple.png";
            break;
        default:
            console.log("Error assigning card picture");
    }
    return picName;
}