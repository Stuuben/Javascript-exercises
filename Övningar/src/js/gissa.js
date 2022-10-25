const theNumber = 7;
let higer = "Gissa högre! Försök igen";
let lower = "Gissa Lägre! Försök igen";

function startGame() {
  let guess = document.getElementById("myGuess");

  /*   if (theNumber === guess) {
  } else {
    if (guess < 7) {
      console.log(higer);
    }
  }
} */

  if (theNumber == guess.value) {
    document.getElementById("result").innerHTML = "You Win!";
    if (theNumber < guess.value) {
      document.getElementById("result").innerHTML = lower;
    }
  } else {
    document.getElementById("result").innerHTML = higer;
  }
}
