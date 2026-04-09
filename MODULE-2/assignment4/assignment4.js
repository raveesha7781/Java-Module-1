'use strict';

const numbers = [];

while (true) {
  const num = Number(prompt("Enter a number (0 to stop):"));

  if (num === 0) {
    break;
  }

  numbers.push(num);
}

// Sort from largest to smallest
numbers.sort(function(a, b) {
  return b - a;
});

// Print to console
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}