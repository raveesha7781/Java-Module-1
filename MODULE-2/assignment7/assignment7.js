'use strict';

// Function with parameter for number of sides
function rollDice(sides) {
  return Math.floor(Math.random() * sides) + 1;
}

// Ask user number of sides
const sides = Number(prompt("Enter number of sides on the dice:"));

const list = document.getElementById("diceResults");

let result;

do {
  result = rollDice(sides);

  const li = document.createElement("li");
  li.textContent = result;
  list.appendChild(li);

} while (result !== sides);