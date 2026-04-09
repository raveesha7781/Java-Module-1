'use strict';

const participants = [];

// Ask number of participants
const number = Number(prompt("Enter number of participants:"));

// Ask names
for (let i = 0; i < number; i++) {
  const name = prompt("Enter participant name:");
  participants.push(name);
}

// Sort alphabetically
participants.sort();

// Get ordered list element
const list = document.getElementById("participantList");

// Print names to webpage
for (let i = 0; i < participants.length; i++) {
  const li = document.createElement("li");
  li.textContent = participants[i];
  list.appendChild(li);
}