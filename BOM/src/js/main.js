document.getElementById("goButton").addEventListener("click", goButton);
document.getElementById("closeButton").addEventListener("click", closeButton);
document.getElementById("backButton").addEventListener("click", backButton);
document
  .getElementById("forwardButton")
  .addEventListener("click", forwardButton);
document.getElementById("timerButton").addEventListener("click", timerButton);
document.getElementById("stopButton").addEventListener("click", stopButton);

function goButton() {
  window.open(
    "https://elevera.itslearning.com/ContentArea/ContentArea.aspx?LocationType=1&LocationID=2618&ElementID=61438&ElementType=131072&FromNotification=True"
  );
}

function closeButton() {
  window.close();
}

function backButton() {
  window.history.back();
}

function forwardButton() {
  window.history.forward();
}

let intervalstart;

function timerButton() {
  intervalstart = setInterval(() => {
    console.log("Funktionen körd");
  }, 1000);
}

function stopButton() {
  clearTimeout(intervalstart);
}
console.log(navigator.geoLocation);
let watch = 0;
if (navigator.geolocation) {
  watch = navigator.geolocation.watchPosition(success, error);
} else {
  alert("Din webbläsare är för gammal för denna moderna sida");
}

function success(position) {
  console.log("Lat:", position.coords.latitude);
  console.log("Lng:", position.coords.longitude);
}

function error(message) {
  console.log(message.message);
}

function stopGettingPositions() {
  navigator.geolocation.clearWatch(watch);
}
