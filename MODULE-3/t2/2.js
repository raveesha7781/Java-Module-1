const target = document.getElementById("target");

// Create first item
const li1 = document.createElement("li");
li1.textContent = "First item";

// Create second item
const li2 = document.createElement("li");
li2.textContent = "Second item";
li2.classList.add("my-item"); // add class to second item

// Create third item
const li3 = document.createElement("li");
li3.textContent = "Third item";

// Append items to target
target.appendChild(li1);
target.appendChild(li2);
target.appendChild(li3);