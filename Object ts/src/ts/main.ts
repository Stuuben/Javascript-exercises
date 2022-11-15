import { Person } from "./models/Person";

let me:Person = new Person("Adam", "Blue", 34)
let josefin:Person = new Person("Josefin", "Blue", 32)
let kjell:Person = new Person("Kjell", "Blue", 64)
let ewa:Person = new Person("Ewa", "Blue", 62)

let family:Person [] = [me, josefin, kjell, ewa]


let myDiv:HTMLDivElement = document.createElement("div")

for (let i:number = 0; i < family.length; i++) {

let myFirstname:HTMLHeadingElement = document.createElement("h3")
let myEyeColor:HTMLParagraphElement = document.createElement("p")
let myAge:HTMLParagraphElement = document.createElement("p")

myFirstname.innerHTML = family[i].firstname
myEyeColor.innerHTML = "Eyecolor: " + family[i].eyecolor
myAge.innerHTML = "Age: " +  family[i].age


console.log(family[i])
myDiv.append(myFirstname, myEyeColor, myAge)
document.body.appendChild(myDiv)
}






