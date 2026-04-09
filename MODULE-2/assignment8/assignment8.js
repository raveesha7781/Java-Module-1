'use strict';

// Function concat
function concat(arr) {
  let result = "";

  for (let i = 0; i < arr.length; i++) {
    result += arr[i];
  }

  return result;
}

// Hardcoded array
const names = ["Johnny", "DeeDee", "Joey", "Marky"];

// Call function
const finalString = concat(names);

// Print result to HTML
document.getElementById("result").textContent = finalString;