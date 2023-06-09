function isDivisible(divisor) {
    var sum = 0;
    
    for (var i = 0; i <= 500; i++) {
      if (i % divisor === 0) {
        console.log(i);
        sum += i;
      }
    }
    
    console.log("Sum:", sum);
  }
  

  console.log("divisible by 23:");
  isDivisible(23);
  

  console.log("divisible by 3:");
  isDivisible(3);
  

  console.log("divisible by 45:");
  isDivisible(45);