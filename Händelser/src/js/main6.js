const secretNumberInput = document.getElementById("myInput");
const setSecretNumberbutton = document.getElementById("myButton");
const message = document.getElementById("someText");
const secretMessage = document.getElementById("secretMessage");

const secretNumberContainer = document.getElementById("secretNumber");
const guessContainer = document.getElementById("guess");
const completedContainer = document.getElementById("completed");

// Guess
const guessInput = document.getElementById("myInput2");
const guessButton = document.getElementById("myButton2");
const resetButton = document.getElementById("myButton3");

let secretNumber;

function toggleContainers() {
  // Toggle container to show
  console.log("Toggle container");
  secretNumberContainer.classList.toggle("invisible");
  guessContainer.classList.toggle("invisible");
}

// State 1 - Set secret number
function setSecretNumber() {
  secretNumber = parseInt(secretNumberInput.value);

  if (isNaN(secretNumber) || secretNumber < 0 || secretNumber > 100) {
    secretMessage.innerText =
      "You have to give correct a number LUL STUPID D:D::D ";
  } else {
    console.log("Secret number is set to:", secretNumber);
    console.log("show guess container");
    secretNumberContainer.classList.add("invisible");
    guessContainer.classList.remove("invisible");
    completedContainer.classList.add("invisible");
  }
}

// State 2 - Guess
function guess() {
  console.log("You Guessed! Secret number is:", secretNumber);

  // Get guess from guess input
  let guess = parseInt(guessInput.value);
  console.log("Guess is:", guess);
  if (isNaN(guess)) {
    message.innerText = "You have to give a number LUL STUPID D:D::D ";
  } else {
    if (secretNumber === guess) {
      // Correct guess
      console.log("Winner!");

      secretNumberContainer.classList.add("invisible");
      guessContainer.classList.add("invisible");
      completedContainer.classList.remove("invisible");

      // show completed container
    } else {
      // Wrong guess
      if (guess < secretNumber) {
        message.innerText = "You guessed " + guess + ". Guess Higher!";
      } else {
        message.innerText = "You guessed " + guess + ". Guess Lower!";
      }
    }
  }
}

function reset() {
  // Clear inputs
  secretNumberInput.value = "";
  guessInput.value = "";

  // Clear secretNumber
  secretNumber = -1;

  secretNumberContainer.classList.remove("invisible");
  guessContainer.classList.add("invisible");
  completedContainer.classList.add("invisible");
}

setSecretNumberbutton.addEventListener("click", setSecretNumber);
resetButton.addEventListener("click", reset);
guessButton.addEventListener("click", guess);

// Set secret number
// Click save

// Guess
// -- Guess is wrong -> Show higher or lower
// -- Guess is correct -> Show correct winner winner chicken dinner

// Reset

// Set secret number -> Guess -> Completed -> (reset)
