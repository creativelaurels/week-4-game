$(document).ready(function() {

	// establish win/losses variable
	var win = 0;
	var losses = 0;

	// setting the counter to zero
	var counter = 0;

	// sets the static value of each crystal - need to randomize that
	var numbers = [10, 5, 3, 7];

	//function shuffle {}
	//shuffle(numbers);

	// creating an array for the gem images
	var images = ["assets/images/1.png", "assets/images/2.png", "assets/images/3.png", "assets/images/4.png"]

	// creating the randomly generated goalNumber between 25 and 100
	var goalNumber = Math.floor((math.random() * 100) + 25);
	// display the goal number to the div .number
	$('#goal-number').text(goalNumber);


	//for loop to build all the images and set their values
	for (var i=0; i<numbers.length; i++) {
		//sets the variable crystalImage equal to the html element <img>
		var crystalImage = $('<img>');
		// adding the attribute data-num and setting it equal to the numbers array
		crystalImage.attr('data-num', numbers[i]); 
		//adding the attribute src and setting it equal to the images array
		crystalImage.attr('src', images[i]);
	}



	// function for crystal - value set for when clicked on
	$('#crystalImage').on('click', function() {
		// setting the counter equal to the value assigned to the images and makes sure it is an integer
		counter = counter + parseInt($(this).data('num'));
		// display the counter into
		$('#yourNumber').text(counter); // this is pushing the information in counter into the div yourNumber.
		// if else if statement to determine & record a win/loss and then resetting the round
		if (counter == goal-number) {
			alert("You won!");
			win++;
			reset();
		} else if {
			alert("You lost!");
			losses++
			reset();
		}
	});
});