//find the secret number

const myAwnser = document.getElementById("myInput");
const goButton = document.getElementById("myButton");
const result = document.getElementById("someText");

function bestFunction() {
  if (parseInt(myAwnser.value) < 43) {
    result.innerHTML = "Thats to Low!";
  } else {
    result.innerHTML = "Thats to High!";
    if (parseInt(myAwnser.value) === 43) {
      result.innerHTML = "Winner";
      alert("Congratulations! You have found the secret Number 43!");
    }
  }
}

goButton.addEventListener("click", bestFunction);
