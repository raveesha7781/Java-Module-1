'use strict';

// Function that returns even numbers
function even(numbers) {
  const evenNumbers = [];

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      evenNumbers.push(numbers[i]);
    }
  }

  return evenNumbers;
}

// Hardcoded array
const originalArray = [2, 7, 4, 9, 12, 5];

// Call function
const newArray = even(originalArray);

// Print results to console
console.log("Original array:", originalArray);
console.log("Even numbers array:", newArray);