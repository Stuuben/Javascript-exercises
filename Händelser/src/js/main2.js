// mini räknare som bara räknar +

let userText = document.getElementById("myInput");
let userText2 = document.getElementById("myInput2");
const useButton = document.getElementById("myButton");
const pTag = document.getElementById("someText");

function fun1() {
  pTag.innerHTML = parseInt(userText.value) + parseInt(userText2.value);
}

useButton.addEventListener("click", fun1);

//använd parseint för att göra om "strings" till "numbers"
