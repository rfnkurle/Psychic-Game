//computer chooses a letter
var compChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", ]
    
var wins = 0; 
var losses = 0;
var guesses = 9;
var lettersYouGuessed = [];

//user guesses a letter
document.onkeyup = function () {
    console.log("button pushed!")
   
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();//takes keycode of key pressed and turns it into string, can use (event.key)
    console.log(userGuess)//<---make sure buttons work

    var compGuess = compChoices[Math.floor(Math.random() * compChoices.length)];
    lettersYouGuessed.push(userGuess)//puts user guess into letters you guessed array

    //if user's guess matches computer guess:
//1 is added to "Wins"
    if (userGuess === compGuess) {
        alert('YOU ARE CORRECT, I WAS THINKING OF "'+ compGuess + '" ! YOU WIN. WOOHOO!');
        wins++;
        guesses = 9;
        lettersYouGuessed.length = 0;


    } else if (guesses === 0) {
        losses++;
        alert("SORRY, YOU DIDN'T GUESS CORRECTLY. TOO BAD. SO SAD. MAYBE YOU'RE NOT PSYCHIC MATERIAL")
        guesses = 9;
        lettersYouGuessed.length = 0;
    } 
    else if (userGuess !== compGuess) {
        guesses--;

    } 

    var html = 

"<p>Guess what letter I'm thinking of...if you can...</p>"+
"<p>Guesses Left: " + guesses + "</p>" +
"<p>Letters You've Guessed: " + lettersYouGuessed + "</p>"+
"<p>Wins: " + wins + "</p>" +
"<p>Losses: " + losses +"</p>";

document.querySelector("#psychic-game").innerHTML = html;


}



