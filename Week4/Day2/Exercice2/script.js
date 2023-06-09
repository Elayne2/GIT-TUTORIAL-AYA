function calculateTip() {
    var bill = tip(prompt("Enter the amount of the bill:"));
  
    var tipPercentage;
    if (bill < 50) {
      tipPercentage = 0.2;
    } else if (bill >= 50 && bill <= 200) {
      tipPercentage = 0.15;
    } else {
      tipPercentage = 0.1;
    }
  
    var tipAmount = bill * tipPercentage;
    var totalBill = bill + tipAmount;
  
    console.log("Tip amount: $" + tipAmount.toFixed(2));
    console.log("Total bill: $" + totalBill.toFixed(2));
  }
calculateTip();