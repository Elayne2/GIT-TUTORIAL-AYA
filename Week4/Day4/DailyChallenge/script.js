function bottlesOfBeer() {
    var numBottles = parseInt(prompt("Enter the number of bottles to begin counting down:"));
  
    while (isNaN(numBottles) || numBottles < 0) {
      numBottles = parseInt(prompt("Invalid input. Please enter a non-negative number of bottles:"));
    }
  
    for (var i = numBottles; i > 0; i--) {
      var currentBottles = i;
      var nextBottles = i - 1;
      var bottleText = currentBottles === 1 ? "bottle" : "bottles";
      var nextBottleText = nextBottles === 1 ? "bottle" : "bottles";
  
      console.log(currentBottles + " " + bottleText + " of beer on the wall");
      console.log(currentBottles + " " + bottleText + " of beer");
      console.log("Take " + currentBottles + " down, pass " + (currentBottles === 1 ? "it" : "them") + " around");
  
      if (nextBottles === 0) {
        console.log("No more bottles of beer on the wall");
      } else {
        console.log(nextBottles + " " + nextBottleText + " of beer on the wall");
      }
  
      console.log(""); // Empty line for separation
    }
  }
  
bottlesOfBeer();