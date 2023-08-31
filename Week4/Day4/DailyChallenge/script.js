function bottlesOfBeer() {
    var numBottles = parseInt(prompt("How many beers?"));
  
    while (isNaN(numBottles) || numBottles < 0) {
      numBottles = parseInt(prompt("Invalid input. Please enter a non-negative number of bottles:"));
    }
  
    for (var i = numBottles; i >= 0; i--) {
      var currentBottles = i;
      var nextBottles = i - 1;
      var bottleText = currentBottles === 1 ? "bottle" : "bottles";
      var nextBottleText = nextBottles === 1 ? "bottle" : "bottles";
      var nextBottleCount = currentBottles === 0 ? 'no more' : nextBottles;
      
      console.log(currentBottles + " " + bottleText + " of beer on the wall");
      console.log(currentBottles + " " + bottleText + " of beer");
      console.log(`Take 1 down, pass ${i === 0 ? 'it' : 'them'} around`);console.log(`${nextBottleCount === 0 ? 'No more' : nextBottleCount} ${nextBottleText} of beer on the wall\n`);
  
      if (nextBottles === 0) {
        console.log("No more bottles of beer on the wall");
      } else {
        console.log(nextBottles + " " + nextBottleText + " of beer on the wall");
      }
  
      console.log(""); 
    }
  }
  
bottlesOfBeer();