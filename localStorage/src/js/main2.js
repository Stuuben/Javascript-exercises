/* localStorage.setItem("ettiket", "Stuuben");
let mYname = localStorage.getItem("ettiket");
console.log(mYname);


let sP = document.createElement("span");
document.body.appendChild(sP);
sP.innerHTML = mYname;


class Aliens{
    constructor(aName, aAge, aLength){
        this.aName = aName;
        this.aAge = aAge;
        this.aLength = aLength;   
    }
}

let firstAlien = new Aliens("Yoda", 102, 80);
let secondAlien = new Aliens("ET", 88, 79)

let alienFamily = [firstAlien, secondAlien];

console.log(alienFamily)

let alienFamilyString = JSON.stringify(alienFamily)

localStorage.setItem("Space", alienFamilyString);

let alienFamilyObj = JSON.parse(alienFamilyString);

console.log(alienFamilyObj)

 */


class Human {
    constructor(firstname, age, eyeColor){
        this.firstname = firstname;
        this.age = age;
        this.eyeColor = eyeColor;
    }
    
}

let me = new Human("Adam", 34, "Blue");
let you = new Human("Clara", 44, "Green");
let otherYou = new Human("Johan", 34, "Blue")

let people = [me, you, otherYou]

console.log(people)

let peopleString = JSON.stringify(people)
localStorage.setItem("Besr Humans", peopleString)

console.log(peopleString)

let peopleAgain = JSON.parse(peopleString)

localStorage.getItem(peopleAgain)
console.log(peopleAgain)

localStorage