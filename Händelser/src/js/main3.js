// Säger till om talet är för lågt/högt

const userInput = document.getElementById("myInput");
const myButton = document.getElementById("myButton");
let result = document.getElementById("someText");

function myFunction() {
  if (parseInt(userInput.value) < 100) {
    result.innerHTML = "Det var ett litet tal";
  } else {
    result.innerHTML = "Det var ett Stort tal";
    if (parseInt(userInput.value) === 100) {
      alert("Du hittade det hemliga talet! GRATTIS!");
    }
  }
}

myButton.addEventListener("click", myFunction);
