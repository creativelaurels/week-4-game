// Setting variables
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessesSoFar = [];

// Sets the computer choices
var computerChoices = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

// Capture Computer Guess
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
console.log(computerGuess);


// Accepting input from keyboard
document.onkeyup = function(event) {

	// Capture User Input
	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
	console.log(userGuess);


	// Establishing Conditions
	if (userGuess == computerGuess) { 
		wins++;
		alert("You won! Play again!");
		reset();

	} else if (guessesLeft == 1) {
		losses++;
		alert("You lost! Try again!");
		reset();
	} else {
		guessesSoFar.push(userGuess);
		guessesLeft--;
	}

		// Taking the tallies and displaying to HTML
		var html = "<h1>Let's play a game, human.</h1>" + "<p>Try to guess what letter I am thinking of..." + "<p>Go ahead, guess a letter to start playing.</p>" +
			"<p>Wins: " +
			wins +
			"</p>" +
			"<p>Losses: " +
			losses +
			"</p>" +
			"<p>Guesses Remaining: " +
			guessesLeft + "</p>" + "<p> Letters Guessed: " + guessesSoFar + " " + "</p>";

		// Placing the html into the game ID
		document.querySelector('#game').innerHTML = html;

// function created to reset after a round
function reset() {
	guessesSoFar.length = 0;
	guessesLeft = 9;
	computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
	console.log(computerGuess);
}

}
