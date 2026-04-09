// Prompt user for three integers
let num1 = Number(prompt("Enter first integer:"));
let num2 = Number(prompt("Enter second integer:"));
let num3 = Number(prompt("Enter third integer:"));

// Calculate results
let sum = num1 + num2 + num3;
let product = num1 * num2 * num3;
let average = sum / 3;

// Print results to HTML
document.getElementById("result").innerHTML =
    "Sum: " + sum + "<br>" +
    "Product: " + product + "<br>" +
    "Average: " + average;