'use strict';

const numbers = [];

while (true) {
  const num = Number(prompt("Enter a number:"));

  // Check if number already exists
  if (numbers.includes(num)) {
    alert("This number has already been given. Program will stop.");
    break;
  }

  numbers.push(num);
}

// Sort numbers in ascending order
numbers.sort(function(a, b) {
  return a - b;
});

// Print numbers to console
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}