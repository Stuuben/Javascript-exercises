window.addEventListener("DOMContentLoaded", () => {
  var form = document.getElementById("beerForm");
  form.addEventListener("submit", (event) => checkAmountOfBeers(event));
});
function checkAmountOfBeers(event) {
  event.preventDefault();
  1;
  var amountOfBeers = document.getElementById("amountOfBeers").value;
  var resultDiv = document.getElementById("printResult");
  let image = document.createElement("img");
  if (amountOfBeers < 3) {
    resultDiv.innerHTML = "får köra bil";
    image.src = "https://bit.ly/3oCLbFD";
    resultDiv.appendChild(image);
  } else if (amountOfBeers >= 3 && amountOfBeers <= 7) {
    resultDiv.innerHTML = "börja bli onyktah";
    image.src = "https://bit.ly/3uCaKKV";
    resultDiv.appendChild(image);
  } else if (amountOfBeers >= 8 && amountOfBeers < 12) {
    resultDiv.innerHTML = "ligg inte med någon kossa nu";
    image.src = "https://bit.ly/3oBkqBJ";
    resultDiv.appendChild(image);
  } else if (amountOfBeers >= 12 && amountOfBeers < 100) {
    resultDiv.innerHTML = "GÅ Å LÄGG DIG";
    image.src = "https://bit.ly/3BaO2ea";
    resultDiv.appendChild(image);
  } else {
    resultDiv.innerHTML = "DU ÄR DÖD";
    image.src = "https://bit.ly/3rDdMg4";
    resultDiv.appendChild(image);
  }
}
