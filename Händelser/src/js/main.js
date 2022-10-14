window.onload = function () {
  console.log("sidan är refreshad");
};

function start() {
  console.log("du klickade på knappen");
}

let goButton = document.getElementById("myButton");
addEventListener("click", start);

/* function blue() {
  console.log("du hitta den blåa knappen");
}

let blueButton = document.getElementById("blueButton");
addEventListener("click", blue); */
