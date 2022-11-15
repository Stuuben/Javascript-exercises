
let para:HTMLParagraphElement = document.getElementById("para") as HTMLParagraphElement;

let myNumbers: number[] = [1,1,2,5,9,7,6,4,5,6]
let sum:number = 0;
let me:string = "Adam";
myFuction();




function myFuction(){

for (let i:number = 0; i < myNumbers.length; i++) {

let myP:HTMLParagraphElement = document.createElement("p");

para.innerHTML = "Result " + (myNumbers[i] + sum).toString();

para.appendChild(myP)
document.body.appendChild(para)
 console.log(sum+=myNumbers[i])
  
}

}
