//Uppgift 1

class Person {
  firstname;
  eyeColor;
  height;
}

//Uppgift 2

let marcus = new Person();

marcus.firstname = "Marcus";
marcus.eyeColor = "Blue";
marcus.height = 196;

let adam = new Person();

adam.firstname = "Adam";
adam.eyeColor = "Blue";
adam.height = 182;

let students = [marcus, adam];

let container = document.createElement("div");
container.className = "container";
document.body.appendChild(container);

for (let i = 0; i < students.length; i++) {
  let nameTag = document.createElement("h2");
  let eyeTag = document.createElement("p");
  let heightTag = document.createElement("span");

  nameTag.innerHTML = students[i].firstname;
  container.appendChild(nameTag);

  eyeTag.innerHTML = students[i].eyeColor;
  container.appendChild(eyeTag);

  heightTag.innerHTML = students[i].height + "cm";
  container.appendChild(heightTag);
}

//
