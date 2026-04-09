// Ask confirmation
let answer = confirm("Should I calculate the square root?");

let resultText;

if (answer === true) {

    let number = Number(prompt("Enter a number:"));

    if (number < 0) {
        resultText = "The square root of a negative number is not defined";
    } else {
        let squareRoot = Math.sqrt(number);
        resultText = "The square root of " + number + " is " + squareRoot;
    }

} else {
    resultText = "The square root is not calculated.";
}

// Print result to HTML
document.getElementById("result").textContent = resultText;