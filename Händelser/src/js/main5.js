const input = document.getElementById("myInput");
const button = document.getElementById("myButton");
const message = document.getElementById("someText");

// Guess
const guessButton = document.getElementById("myButton2");

let secretNumber = 2;

// State 1 - Set secret number
function setSecretNumber() {
  secretNumber = parseInt(input.value);
  input.value = "";

  console.log("Secret number is set to:", secretNumber);
}

// State 2 - Guess
function guess() {
  console.log("Guess! Secret number is:", secretNumber);

  // Get guess from guess input
  let guess = parseInt(input.value);
  console.log("Guess is:", guess);

  // Check guess against secretNumber
  if (secretNumber === guess) {
    // Correct guess
    message.innerText = "Winner Winner Chicken Dinner!";
  } else {
    // Wrong guess
    if (guess < secretNumber) {
      message.innerText = "You guessed " + guess + ". Guess Higher!";
    } else {
      message.innerText = "You guessed " + guess + ". Guess Lower!";
    }
  }
}
button.addEventListener("click", setSecretNumber);

// function start() {
//   console.log("LUL hej");
// }

// myButton.addEventListener("click", start);

// Set secret number
// Click save

// Guess
// -- Guess is wrong -> Show higher or lower
// -- Guess is correct -> Show correct winner winner chicken dinner

// Reset

// States
// 1. Set target
// 2. Guess
// 3. Incorrect guess
// 4. Correct guess

// 1 -> 2
// 2 -> 3
// 2 -> 4
// 4 -> 1
