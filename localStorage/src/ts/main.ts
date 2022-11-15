
class Humans {
  firstname:string;
  age:number;
  length:number;
  constructor(firstname:string, age:number, length:number) {
    this.firstname = firstname;
    this.age = age;
    this.length = length;
  }
}

let adam = new Humans ("Adam", 34, 182)
let josefin = new Humans ("Josefin", 32 ,160)
let ewa = new Humans ("Ewa", 62, 160)
let kjell = new Humans ("Kjell", 64, 170)

let family:Humans[] = [adam, josefin, ewa, kjell]


//part 1
let familyToString:string = JSON.stringify(family)

localStorage.setItem("family", familyToString)
// part 2





//MASSOR HAR HÄNT







//
let familyFromLS:string | null = localStorage.getItem("family")
if( familyFromLS !== null){

  let sameOldFamily:Humans[] = JSON.parse(familyFromLS)




for (let i = 0; i < sameOldFamily.length; i++) {
  console.log(sameOldFamily[i])
 
  let myp:HTMLParagraphElement = document.createElement("p");
 

  myp.innerHTML = sameOldFamily[i].firstname

  document.body.appendChild(myp)
  console.log(sameOldFamily)
}
}













const thisIsNull = null;
const thisIsNotNull = "something not null";
const c = thisIsNull ?? "default value"; // c -> "default value"
const d = thisIsNotNull ?? "default value";//   d = thisIsNotNull = "something not null"
console.log(c)
console.log(d)

