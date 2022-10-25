const firstname = "Adam";
const lastname = "Stuborn";

console.log(firstname);
console.log(firstname + " " + lastname);

for (i = 0; i < lastname.length; i++) {
  console.log(lastname[i]);

  if (i < lastname.length) {
    console.log("");
  }
}

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let sum = 0;
for (i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
console.log(sum);

let animals = ["Katt", "Hund", "Fisk", "Zebra"];
let animalList = document.getElementById("myList");

for (i = 0; i < animals.length; i++) {
  animalList.innerHTML += "<li>" + animals[i] + "</li>";
}

/* /* let drinks = ["Cola", "Fanta", "Öl", "Vin"]; */
/* let drinkList = document.getElementById("secondList");

const list = document.createElement("li");

for (i=0; i < drinks.length; i++) {

}
 */



//  gör en array med drycker
let drinks = ["Cola", "Fanta", "Öl", "Vin"];
//skapa en section
const test = document.createElement("section");
// sätt id="test" på section
test.setAttribute("id", "test");
// skapa ul
let ul = document.createElement("ul");
// 
document.body.appendChild(test);

test.appendChild(ul);

for (i = 0; i < drinks.length; i++) {
  let li = document.createElement("li");
  ul.appendChild(li);
  li.innerHTML += drinks[i];
}
