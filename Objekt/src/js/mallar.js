class Person {
  constructor(lastname, hairLength, shoesize) {
  this.lastname = lastname;
  this.hairLength = hairLength;
  this.shoesize = shoesize;
}
  
}

let marcus = new Person("Reineck", "kort", 45);
let adam  = new Person("Stuborn", "halvkort", 44);
let clara = new Person("Svensson","långt",5);
console.log(marcus);
console.log(adam);


let students = [marcus, adam, clara];


let container = document.createElement("div");
container.className = "container";
let profile = document.createElement("div");
profile.className = "profile";
document.body.appendChild(container);
container.appendChild(profile);

for (let i = 0; i < students.length; i++) {
  let lName = document.createElement("h2");
  lName.innerHTML = students[i].lastname;
  profile.appendChild(lName);

  let info = document.createElement("ul");
  let hlength = document.createElement("li");
  let sSize = document.createElement("li");

  hlength.innerHTML = students[i].hairLength;
  sSize.innerHTML = students[i].shoesize;
  
  profile.appendChild(info);
  info.appendChild(hlength);
  info.appendChild(sSize);
