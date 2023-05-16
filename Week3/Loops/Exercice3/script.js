let number;

do {
  number = Number(prompt("Please enter a number:"));
} while (typeof number === "number" && number < 10);
