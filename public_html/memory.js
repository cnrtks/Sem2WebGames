
var deck = [0,0,1,1,2,2,3,3,4,4,5,5];
fisherYates(deck);

for (var i = 0; i < document.getElementsByTagName("td").length; i++){
    document.getElementsByTagName("td")[i].
}

//@author fisher, Yate
//sedition.com
function fisherYates ( myArray ) {
  var i = myArray.length;
  if ( i == 0 ) return false;
  while ( --i ) {
     var j = Math.floor( Math.random() * ( i + 1 ) );
     var tempi = myArray[i];
     var tempj = myArray[j];
     myArray[i] = tempj;
     myArray[j] = tempi;
   }
}

function pictureSwitch(num){
    var picName;
    switch(num){
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
            picName = "cardStarRed.png";
            break;
        case 4:
            picName = "cardSkellGrey.png";
            break;
        case 5:
            picName = "cardLinesPurple.png";
            break;
        default:
            console.log("Error assigning card picture");
    }
    return picName;
}