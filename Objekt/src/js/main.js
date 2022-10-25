window.onload = function () {
  //mallen
  class Person {
    eyeColor;
    length;
    age;
  }

  let me = new Person();
  me.age = 34;
  me.eyeColor = "Blue";
  me.length = "182 cm";

  let friend = new Person();
  friend.age = 28;
  friend.eyeColor = "brown";
  friend.length = "170 cm";

  let pTag = document.getElementById("pTag");

  let people = [me, friend];
  for (i = 0; i < people.lenght; i++) {
    pTag.innerHTML += people[i].age;
  }

  console.log(me);
  console.log(friend);
};

//

//

// Man kan ej köra innerhtml på objekt
//Gör detta om du bara har 1 objekt och inte en lista.
let objectTag = document.createElement("p");
objectTag.innerHTML = me.firstname;

let ageTag = document.createElement("p");
objectTag.innerHTML = me.age;

container.appendChild();

document.body.appendChild(objectTag);

document.body.appendChild(ageTag);
