$(document).ready(function() {

// VARIABLES


	// establish win/losses variable
	var win = 0;
	var losses = 0;

	// creating an array for the gem images
	var images = ["assets/images/1.png", "assets/images/2.png", "assets/images/3.png", "assets/images/4.png"]

	// setting the counter to zero
	var counter = 0;

	// setting the random values
	var numbers = [];
	// value options
	var numberList = [1,2,3,4,5,6,7,8,9,10]
	var numbersMax = 4;



	// creating the randomly generated goalNumber between 25 and 100
	var goalNumber = Math.floor((Math.random() * 100) + 25);
	// display the goal number to the div .number
	$('#goal-number').text(goalNumber);
	//for loop to randomly generate four numbers for the variable numbers between 1-10
	for (var i=0; i<numbersMax; i++) {
		numbers.push(numberList[Math.floor(Math.random() * numberList.length)]);
	};
	console.log(numbers);




//for loop to build all the images and set their values
	for (var i=0; i<numbersMax; i++) {
		//sets the variable imageCrystal equal to the html element <img>
		var crystalImage = $('<img>');
		// adding the attribute data-num and setting it equal to the numbers array
		crystalImage.attr('data-num', numbers[i]);
		//adding the attribute src and setting it equal to the images array
		crystalImage.attr('src', images[i]);
		//adding the attribute alt and setting
		crystalImage.attr('alt', 'crystals');
		//adding a css class to the pictures
		crystalImage.addClass('crystalImage');
		$('#crystals').append(crystalImage);
	}

// function for the crystals  when clicked on
	$('.crystalImage').on('click', function() {
		// setting the counter equal to the value assigned to the images and makes sure it is an integer
			counter = counter + parseInt($(this).data('num'));
		// display the counter into
			$('#counter').text(counter); // this is pushing the information in counter into the div counter.
			// if else if statement to determine & record a win/loss and then resetting the round4
			console.log(counter);
			if (counter == goalNumber) {
				win++;
				reset();
				$('#win').html(win);
				console.log(win);
			}else if (counter > goalNumber) {
				losses++;
				reset();
				$('#loss').html(losses);
				console.log(losses);
		}
	});

function reset() {
	// new random number to guess
	// creating the randomly generated goalNumber between 25 and 100
	var goalNumber = Math.floor((Math.random() * 100) + 25);
	// display the goal number to the div .number
	$('#goal-number').text(goalNumber);
	// reset the counter to zero and display in HTML
	counter = 0;
	$('#counter').text(counter);
	// new four values for crystals
}

});
