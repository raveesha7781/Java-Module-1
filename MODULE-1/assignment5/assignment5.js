// Ask user to enter a year
let year = Number(prompt("Enter a year:"));

let result;

// Check leap year rules
if (year % 4 === 0 && year % 100 !== 0) {
    result = year + " is a leap year.";
}
else if (year % 400 === 0) {
    result = year + " is a leap year.";
}
else {
    result = year + " is not a leap year.";
}

// Print result to HTML
document.getElementById("result").textContent = result;