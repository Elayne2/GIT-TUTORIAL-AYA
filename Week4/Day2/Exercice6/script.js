function hotelCost() {
    var numNights = prompt("Enter the number of nights you would like to stay in the hotel:");
  
    while (isNaN(numNights) || numNights === "") {
      numNights = prompt("Invalid input. Please enter the number of nights you would like to stay in the hotel:");
    }
  
    var totalCost = numNights * 140;
    return totalCost;
  }
  
function planeRideCost() {
    var destination = prompt("Enter your destination:");
  
    while (typeof destination !== "string" || destination === "") {
      destination = prompt("Invalid input. Please enter your destination:");
    }
  
    var price;
  
    if (destination.toLowerCase() === "London") {
      price = 183;
    } else if (destination.toLowerCase() === "Paris") {
      price = 220;
    } else {
      price = 300;
    }
  
    return price;
  }
  
function rentalCarCost() {
    var numDays = prompt("Enter the number of days you would like to rent the car:");
  
    while (isNaN(numDays) || numDays === "") {
      numDays = prompt("Invalid input. Please enter the number of days you would like to rent the car:");
    }
  
    var costPerDay = 40;
    var totalCost = numDays * costPerDay;
  
    if (numDays > 10) {
      totalCost *= 0.95;
    }
  
    return totalCost;
  }
  
function totalVacationCost() {
    var hotelcost = hotelCost();
    var planeridecost = planeRideCost();
    var rentalcarcost = rentalCarCost();
  
    var totalCost = hotelcost + planeridecost + rentalcarcost;
  
    console.log("The car cost: $" + rentalCarCost);
    console.log("The hotel cost: $" + hotelCost);
    console.log("The plane tickets cost: $" + planeRideCost);
    console.log("Total vacation cost: $" + totalCost);
  }
  
totalVacationCost();