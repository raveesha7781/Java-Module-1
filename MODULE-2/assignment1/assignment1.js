'use strict';

const numbers = [];

// Ask user for five numbers
for (let i = 0; i < 5; i++) {
  const num = Number(prompt("Enter a number:"));
  numbers.push(num);
}

// Print numbers in reverse order
for (let i = numbers.length - 1; i >= 0; i--) {
  console.log(numbers[i]);
}