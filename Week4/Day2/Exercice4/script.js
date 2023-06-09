const stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry": 1
  };  
  
const prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry": 10
  }; 
const shoppingList = ["banana", "orange", "apple"];

function myBill() {
    var totalPrice = 0;
  
    for (var i = 0; i < shoppingList.length; i++) {
      var item = shoppingList[i];
  
      if (item in stock && stock[item] > 0) {
        totalPrice += prices[item];
        stock[item] -= 1; // Decrease stock by 1
      }
    }
  
    return totalPrice;
  }
  
console.log("Total price:", myBill());
console.log("Updated stock:", stock);