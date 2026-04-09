// Ask user for start and end year
let startYear = Number(prompt("Enter start year:"));
let endYear = Number(prompt("Enter end year:"));

let list = document.getElementById("leapYears");

// Loop through the years
for (let year = startYear; year <= endYear; year++) {

    // Check leap year rule
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {

        let li = document.createElement("li");
        li.textContent = year;
        list.appendChild(li);
    }
}