var randomNumber1 = Math.floor(Math.random() * 6)+ 1;

var randomDiceImage = "dice" + randomNumber1 + ".png";

var randomImageSource = "images/" + randomDiceImage;

var image1 = document.querySelectorAll("img")[0] ; 
image1.setAttribute("src", randomImageSource);



var randomNumber2 = Math.floor(Math.random() * 6)+ 1 ;

var randomDiceImage2 = "dice" + randomNumber2 + ".png" ;

var randomImageSelector2 = "images/" + randomDiceImage2 ;

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImageSelector2);

if (randomNumber1 > randomNumber2) {
    var winner = document.querySelectorAll("h1")[0];
    winner.textContent = "Player 1 wins"

} else{
    var winner = document.querySelectorAll("h1")[0];
    winner.textContent = "Player 2 wins"
}
