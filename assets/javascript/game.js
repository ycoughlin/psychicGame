// Variables
var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var wins = 0;
var losses = 0;
var allGuesses = [];
var guessesLeft = 4;
var i = 0;
// randomizer
var randomLetter = letters[Math.floor(Math.random()*letters.length)];
console.log("initial letter " + randomLetter);

// Functions
document.onkeyup= function(event){
	var key = event.key;
	allGuesses[i]=key;
	i++;

	var guesses = document.getElementById("guesses");
	guesses.innerHTML = "Your guesses: " + allGuesses;

	if(key=="a"||key=="b"||key=="c"||key=="d"||key=="e"||key=="f"||key=="g"||key=="h"||key=="i"||key=="j"||key=="k"||key=="l"||key=="m"||key=="n"||key=="o"||key=="p"||key=="q"||key=="r"||key=="s"||key=="t"||key=="u"||key=="v"||key=="w"||key=="x"||key=="y"||key=="z"){

		if(key!=randomLetter){
			guessesLeft--;

			var counter = document.getElementById("guessesLeft");

			counter.innerHTML = "Guesses Left: " + guessesLeft;
		}
		 else{ 
		 	wins++;

		 	var winner = document.getElementById("wins");
		 	winner.innerHTML= "Wins: " + wins;
		 	gameReset();
		 }

		 if(guessesLeft==0){
		 	losses++;

		 	var lose = document.getElementById("losses");
		 	lose.innerHTML = "Losses: " + losses;
		 	gameReset();
		 }

		 function gameReset(){
		 	 guessesLeft=4;
		 	 var counter = document.getElementById("guessesLeft");
		 	 counter.innerHTML = letters[Math.floor(Math.random()*letters.length)];
		 	 allGuesses=[];
		 	 i=0;
		 }
	}

}

// wins/loss counter
