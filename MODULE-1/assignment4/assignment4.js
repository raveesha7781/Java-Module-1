// Ask for student's name
let name = prompt("Enter student's name:");

// Draw random number between 1 and 4
let houseNumber = Math.floor(Math.random() * 4) + 1;

let house;

// Determine the house
if (houseNumber === 1) {
    house = "Gryffindor";
} else if (houseNumber === 2) {
    house = "Slytherin";
} else if (houseNumber === 3) {
    house = "Hufflepuff";
} else {
    house = "Ravenclaw";
}

// Print result to HTML
document.getElementById("result").textContent =
    name + ", you are " + house + ".";