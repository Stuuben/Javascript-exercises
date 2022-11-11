
let myButton:HTMLButtonElement = document.getElementById("myButton") as HTMLButtonElement;
let userInput:HTMLInputElement = document.getElementById("userInput") as HTMLInputElement;
let userInput2:HTMLInputElement = document.getElementById("userInput2") as HTMLInputElement;
myButton.addEventListener("click", myClicker);

function myClicker(){
    console.log("click")
let pTag:HTMLParagraphElement = document.createElement("p");

pTag.innerHTML = (parseInt(userInput.value)  + parseInt(userInput2.value)).toString()


document.body.appendChild(pTag)
}

console.log("hej")
alert("hej")
