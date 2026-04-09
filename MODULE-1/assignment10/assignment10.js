// Ask user input
let diceCount = Number(prompt("Enter number of dice:"));
let targetSum = Number(prompt("Enter desired sum of dice:"));

let simulations = 10000;
let success = 0;

// Run simulation
for (let i = 0; i < simulations; i++) {

    let sum = 0;

    // Roll dice
    for (let j = 0; j < diceCount; j++) {
        let roll = Math.floor(Math.random() * 6) + 1;
        sum += roll;
    }

    // Check if sum matches target
    if (sum === targetSum) {
        success++;
    }
}

// Calculate probability
let probability = (success / simulations) * 100;

// Print result
document.getElementById("result").textContent =
    "Probability to get sum " + targetSum +
    " with " + diceCount +
    " dice is " + probability.toFixed(2) + "%";