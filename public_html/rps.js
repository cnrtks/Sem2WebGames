//@author conor tompkins
//rps

document.getElementById("shoot").addEventListener("click",play);


//1=rock 2=paper 3=scissors
var npcHand = 3;
var userHand = 1;
var userScore = 0;
var npcScore = 0;

function play(){
    var userPic;
    userHand = parseInt(document.getElementById("handSelect").value);
    console.log(userHand);
    switch (userHand){
        case 1: userPic = "rockLeft.png"; break;
        case 2: userPic = "paperLeft.png"; break;
        case 3: userPic = "scissorsLeft.png"; break;
        default: console.log("Error changing player1Pic"); 
    }
    document.getElementById("player1Pic").setAttribute("src", userPic);
    npcShoot();
    npcPicChange();
    checkWinner();
    updateScoreBoard();
}

function npcShoot(){
    npcHand = Math.ceil(Math.random()*3);
}

function npcPicChange(){
    var picture = "scissorsRight.png";
    
    switch (npcHand){
        case 1: picture = "rockRight.png"; break;
        case 2: picture = "paperRight.png"; break;
        case 3: picture = "scissorsRight.png"; break;
        default: consolelog("Error changing player2Pic");
    }
    document.getElementById("player2Pic").setAttribute("src", picture);
}

function checkWinner(){
    if(userHand == npcHand){
        console.log("It's a tie")
    }
    else if((userHand == 1 && npcHand ==3) || (userHand == 2 && npcHand == 1) ||
            (userHand == 3 && npcHand == 2)){
        userScore++;
    }
    else{
        npcScore++;
    }
}

function updateScoreBoard(){
    document.getElementById("player1Score").innerText = userScore;
    document.getElementById("player2Score").innerText = npcScore;
}

