'use strict';

const dogs = [];

// Ask names of six dogs
for (let i = 0; i < 6; i++) {
  const name = prompt("Enter dog name:");
  dogs.push(name);
}

// Sort in reverse alphabetical order
dogs.sort().reverse();

// Get UL element
const list = document.getElementById("dogList");

// Print names to webpage
for (let i = 0; i < dogs.length; i++) {
  const li = document.createElement("li");
  li.textContent = dogs[i];
  list.appendChild(li);
}