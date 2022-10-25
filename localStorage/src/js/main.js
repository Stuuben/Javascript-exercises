localStorage.setItem("name", "Adam")
let myName = localStorage.getItem("name");


let pTag = document.createElement("p");

pTag.innerHTML = myName;

document.body.appendChild(pTag);


class Person {
    constructor(firstname, age, length){
        this.firstname = firstname;
        this.age = age;
        this.length = length;

    }
}

let me = new Person ("Adam", 34, 182);
let clara = new Person("Clara", 63, 150);

let group = [me, clara];


//gör om till string
let meString = JSON.stringify(group);
//skicka till storage
localStorage.setItem("hej", meString)


//hämta
let myListasString = localStorage.getItem("hej");
// gör string till objekt igen
let myObj = JSON.parse(myListasString)

console.log(myObj)









