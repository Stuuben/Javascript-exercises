let myButton : HTMLButtonElement = document.getElementById("myButton") as HTMLButtonElement;
let myP : HTMLParagraphElement = document.getElementById("pTag") as HTMLParagraphElement;
let myUl : HTMLParagraphElement = document.getElementById("ulTag") as HTMLParagraphElement;


myButton.addEventListener("click", clicker);

function clicker() {
    console.log("click");
}



let myName:string = "Adam";
console.log(myName)

let x:number = 5;
let y:number = 10;
let sum:number = x+y;
console.log(x + y)
console.log(sum)

let humans:string [] = ["Adam", "Sten", "Stig"];

for ( let i:number = 0; i < humans.length; i++) {
console.log(humans[i])

let myListItem: HTMLLIElement = document.createElement("li");

myListItem.innerHTML += humans[i]

myUl.appendChild(myListItem)
document.body.appendChild(myUl)
}