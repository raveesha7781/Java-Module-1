'use strict';

const candidates = [];

// Ask number of candidates
const candidateCount = Number(prompt("Enter number of candidates:"));

// Ask candidate names
for (let i = 0; i < candidateCount; i++) {
  const name = prompt(`Name for candidate ${i + 1}:`);

  candidates.push({
    name: name,
    votes: 0
  });
}

// Ask number of voters
const voterCount = Number(prompt("Enter number of voters:"));

// Voting
for (let i = 0; i < voterCount; i++) {
  const vote = prompt("Enter candidate name:");

  if (vote === "") {
    continue; // empty vote
  }

  // Find candidate and add vote
  for (let j = 0; j < candidates.length; j++) {
    if (candidates[j].name === vote) {
      candidates[j].votes++;
      break;
    }
  }
}

// Sort candidates by votes (largest first)
candidates.sort((a, b) => b.votes - a.votes);

// Winner
console.log(`The winner is ${candidates[0].name} with ${candidates[0].votes} votes.`);

console.log("results:");

for (let i = 0; i < candidates.length; i++) {
  console.log(`${candidates[i].name}: ${candidates[i].votes} votes`);
}