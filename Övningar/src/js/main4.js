function magicIsToBeDone() {
  let magic = document.getElementById("p1").innerHTML;
  document.getElementById("p2").innerHTML = magic;

  //skriver över det som stog innan.
  document.getElementById("p3").innerHTML = "Nu är den något annat";
  document.getElementById("p4").innerHTML = "här var det inget innan";
}

