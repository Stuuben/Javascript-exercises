const firstname = "Adam";
const lastname = "Stuborn";
let para = document.getElementById("para");
for (i = 0; i < firstname.length; i++) {
  para.innerHTML += firstname[i];

  if (i < firstname.length) {
    para.innerHTML += " ";
  }
}

//

let tal = [2, 5, 7, 9, 0, 5, 6, 8, 3, 2];
sum = 0;
for (i = 0; i < tal.length; i++) {
  sum += tal[i];
}
para.innerHTML = sum;

//

/* let fruits = ["Apelsin", "Banan", "Äpple", "Kiwi", "Melon"];
const fruitList = document.getElementById("myList");

for (i = 0; i < fruits.length; i++) {
  fruitList.innerHTML += "<li>" + fruits[i] + "</li>";
}
 */

const fruits = ["Apelsin", "Banan", "Äpple", "Kiwi", "Melon"];
const fruitList = document.createElement("ul");
fruitList.setAttribute("id", "test");
const li = document.createElement("li");
document.body.appendChild(fruitList);

for (i = 0; i < fruits.length; i++) {
  fruitList.innerHTML += fruits[i];
  fruitList.appendChild(li);
}

const cars = ["Volvo", "vW", "Audi", "Fiat"];
const carList = document.createElement("ul");
carList.setAttribute("id", "carList");
const secondLi = document.createElement("li");
document.body.appendChild(carList);

for (i = 0; i < cars.length; i++) {
  carList.innerHTML += cars[i];
  carList.appendChild(secondLi);
}
