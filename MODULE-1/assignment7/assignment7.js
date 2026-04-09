// Ask how many dice rolls
let rolls = Number(prompt("How many dice rolls?"));

let sum = 0;

// Roll dice the given number of times
for (let i = 0; i < rolls; i++) {
    let dice = Math.floor(Math.random() * 6) + 1;
    sum += dice;
}

// Print result
document.getElementById("result").textContent =
    "Sum of dice rolls: " + sum;