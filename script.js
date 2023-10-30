// Create an array and write the options
const options = ["rock", "scissors", "paper"];

// Create an object and write our messages in it like win, lose and draw
const messages = {
  win: "You win!",
  lose: "You lose.",
  draw: "It's a draw!",
};

// Math.random() selects a random number from 0 to 1, multiplies it by 3, and when we select floor, we get the numbers 0, 1, 2 and find the index of the option in the options array.
const randomChoose = () => {
  const randomIndex = Math.floor(Math.random() * 3);
  return options[randomIndex];
}

// We write the main condition function of the game
const winnerFunc = (myTurn, computerTurn) => {
  if (myTurn === computerTurn) {
    return messages.draw; // returns a draw message
  } else if (
    (myTurn === "rock" && computerTurn === "scissors") ||
    (myTurn === "scissors" && computerTurn === "paper") ||
    (myTurn === "paper" && computerTurn === "rock")
  ) {
    return messages.win; // returns a win message
  } else {
    return messages.lose; // returns a lose message
  }
}

// Write the game's Prompt with toLowerCase() method so we can capitalize the word
const myTurn = prompt("Choose: rock, scissors, or paper").toLowerCase();
if (!options.includes(myTurn)) { // We write our condition that shows that what we wrote in the prompt is not an option
  alert("Invalid choice.");
} else {
  const computerTurn = randomChoose(); // ComputerTurn takes random option with randomChoose() function
  const result = winnerFunc(myTurn, computerTurn); // Find a result
  alert(`Computer: ${computerTurn}.\n${result}`); // Show a result in alert
}