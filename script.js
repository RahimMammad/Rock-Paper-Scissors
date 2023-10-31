const gameResult = document.querySelector("#answer");
const rockOption = document.querySelector("#rock");
const paperOption = document.querySelector("#paper");
const scissorsOption = document.querySelector("#scissors");
const resultText = document.querySelector("#answer")

const options = ["rock", "scissors", "paper"];

const messages = {
  win: "You win!",
  lose: "You lose.",
  draw: "It's a draw!",
};

const randomChoose = () => {
  const randomIndex = Math.floor(Math.random() * 3);
  return options[randomIndex];
}

const winnerFunc = (myTurn, computerTurn) => {
  if (myTurn === computerTurn) {
    return messages.draw; 
  } else if (
    (myTurn === "rock" && computerTurn === "scissors") ||
    (myTurn === "scissors" && computerTurn === "paper") ||
    (myTurn === "paper" && computerTurn === "rock")
  ) {
    return messages.win;
  } else {
    return messages.lose; 
  }
}

rockOption.addEventListener("click", () => {
  myTurn === "rock"
});

paperOption.addEventListener("click", () => {
  myTurn === "paper"
});

scissorsOption.addEventListener("click", () => {
  myTurn === "scissors"
});

const resultFunc = () => {
  const computerTurn = randomChoose();
  const result = winnerFunc(myTurn, computerTurn);
  resultText.textContent = result
}

// const myTurn = prompt("Choose: rock, scissors, or paper").toLowerCase();
// if (!options.includes(myTurn)) { 
//   alert("Invalid choice.");
// } else {
//   const computerTurn = randomChoose(); 
//   const result = winnerFunc(myTurn, computerTurn); 
//   alert(`Computer: ${computerTurn}.\n${result}`); 
// }