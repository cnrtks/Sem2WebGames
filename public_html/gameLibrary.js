
//hangman
var secretRepository = ["PULP FICTION", "THE WIZARD OF OZ", "THE GODFATHER",
    "CASABLANCA", "APOCALYPSE NOW", "THE DARK KNIGHT", "TAXI DRIVER",
    "PSYCHO", "STAR WARS", "THE SILENCE OF THE LAMBS", "DR STRANGELOVE"];

var secretWord = secretRepository[Math.floor(Math.random()*secretRepository.length)];
var letters = RegExp(/([A-Z])/g);
var spaces = RegExp(/ /g);
var guessWord = secretWord.replace(letters, "_").replace(spaces, "-");
var hangCounter = 0;

displayWord();
document.getElementById("letterButton").addEventListener("click", letterSelect);

function displayWord() {
    var dspWord = "";
    for (var i = 0; i < guessWord.length; i++) {
        dspWord += guessWord.charAt(i);
        dspWord += ' ';
    }
    document.getElementById("winWord").innerText = dspWord;
}

function letterSelect() {
    var let = document.getElementById("letter").value;
    var index = secretWord.indexOf(let);

    if (index == -1) {
        hangLimb(); //not implemented
    } else {
        while (index != -1) {
            guessWord = setCharAt(guessWord, index, let);
            index = secretWord.indexOf(let, index + 1);
        }
    }
    //document.getElementById("letter").removeChild(document.getElementById("letter").value = let);
    displayWord();
    hangmanWinCheck();
}


//setCharAt @author rahul
//16 sep 2009
//js function
//stackoverflow.com
function setCharAt(str, index, char) {
    if (index > str.length - 1) {
        return str;
    } else {
        return str.substr(0, index) + char + str.substr(index + 1);
    }
}

function hangmanWinCheck(){
 
    if (hangCounter > 5){
        alert ("You Lose");
    }
    else if (guessWord.indexOf('_') == -1){
        alert("You Win");
    }
}

function hangLimb() {
    document.getElementsByClassName("hangLetter")[hangCounter].setAttribute("style", "color: #fff");
    hangCounter ++;
}