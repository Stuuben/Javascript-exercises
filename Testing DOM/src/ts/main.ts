export function init() {
  function handleClick() {
    let myButton = document.getElementById("myButton") as HTMLButtonElement;
    let myInput = document.getElementById("myInput") as HTMLInputElement;
    let container = document.getElementById("container") as HTMLDivElement;

    myButton.addEventListener("click", () => {
      container.innerHTML = myInput.value;

      console.log("click");
    });
  }
}
exports.handleClick();
