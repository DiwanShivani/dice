//player1 dice
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var diceNumber = "dice" + randomNumber1 + ".png";
var randomImageSource = "images/" + diceNumber;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImageSource);

//player2 dice
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var diceNumber2 = "dice" + randomNumber2 + ".png";
var randomImageSource2 = "images/" + diceNumber2;
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImageSource2);

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Palyer1 Wins!";
}
else if(randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = "Player2 Wins!"
}
else{
    document.querySelector("h1").innerHTML = "Draw!";
}