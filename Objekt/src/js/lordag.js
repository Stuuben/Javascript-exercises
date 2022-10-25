class Person {
  constructor(firstname, eyeColor, lenght, shoesize) {
    this.firstname = firstname;
    this.eyeColor = eyeColor;
    this.lenght = lenght;
    this.shoesize = shoesize;
  }
}

let adam = new Person("Adam", "blue", 182, 44);
let ewa = new Person("Ewa", "blue", 160, 39);

let family = [adam, ewa];

let header = document.createElement("h1");
document.body.appendChild(header);
header.innerHTML = "Welcome to humans";

let myDiv = document.createElement("div");
myDiv.className = "container";
document.body.appendChild(myDiv);

for (let i = 0; i < family.length; i++) {
  let info = document.createElement("ul");
  let firstname = document.createElement("li");
  let eyeColor = document.createElement("li");
  let lenght = document.createElement("li");
  let shoesize = document.createElement("li");

  firstname.innerHTML = family[i].firstname;
  eyeColor.innerHTML = family[i].eyeColor;
  lenght.innerHTML = family[i].lenght;
  shoesize.innerHTML = family[i].shoesize;

  myDiv.appendChild(info);
  info.appendChild(firstname);
  info.appendChild(eyeColor);
  info.appendChild(lenght);
  info.appendChild(shoesize);
}

//

let aliensHeader = document.createElement("h3");
document.body.appendChild(aliensHeader);
aliensHeader.innerHTML = "Welcome to aliens";

class Alien {
  constructor(aName, skincolor, age, planet) {
    this.aName = aName;
    this.skincolor = skincolor;
    this.age = age;
    this.planet = planet;
  }
}

let firstAlien = new Alien("Yoda", "green", 574, "Slime-planet");
let secondAlien = new Alien("ET", "blue", 234, "The Moon");

let alienPack = [firstAlien, secondAlien];

let alienDiv = document.createElement("div");
alienDiv.classList = "alien";
document.body.appendChild(alienDiv);

for (let i = 0; i < alienPack.length; i++) {
  let aInfo = document.createElement("ul");
  let aName = document.createElement("li");
  let skincolor = document.createElement("li");
  let age = document.createElement("li");
  let planet = document.createElement("li");

  aName.innerHTML = alienPack[i].aName;
  skincolor.innerHTML = alienPack[i].skincolor;
  age.innerHTML = alienPack[i].age;
  planet.innerHTML = alienPack[i].planet;

  alienDiv.appendChild(aInfo);
  aInfo.appendChild(aName);
  aInfo.appendChild(skincolor);
  aInfo.appendChild(age);
  aInfo.appendChild(planet);
}
