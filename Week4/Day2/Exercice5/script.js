function changeEnough(itemPrice, amountOfChange) {
    var quarters = amountOfChange[0] * 0.25;
    var dimes = amountOfChange[1] * 0.10;
    var nickels = amountOfChange[2] * 0.05;
    var pennies = amountOfChange[3] * 0.01;
  
    var totalChange = quarters + dimes + nickels + pennies;
  
    return totalChange >= itemPrice;
  }