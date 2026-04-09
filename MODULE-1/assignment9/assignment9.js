// Ask user for a number
let number = Number(prompt("Enter an integer:"));

let isPrime = true;

// Numbers less than 2 are not prime
if (number < 2) {
    isPrime = false;
} else {

    // Check divisibility
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            isPrime = false;
            break;
        }
    }
}

// Print result
if (isPrime) {
    document.getElementById("result").textContent = number + " is a prime number.";
} else {
    document.getElementById("result").textContent = number + " is not a prime number.";
}