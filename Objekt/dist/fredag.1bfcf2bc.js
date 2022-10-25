class Person {
    constructor(firstname, eyeColor, heigth, children){
        this.firstname = firstname;
        this.eyeColor = eyeColor;
        this.heigth = heigth;
        this.children = children;
    }
}
let adam = new Person("Adam", "bl\xe5", 182, 0);
let josefin = new Person("Josefin", "bl\xe5", 158, 0.5);
let ewa = new Person("Ewa", "bl\xe5", 163, 2);
let kjell = new Person("Kjell", "bl\xe5", 170, 4);
let family = [
    adam,
    josefin,
    ewa,
    kjell
];
let container = document.createElement("div");
container.className = "container";
document.body.appendChild(container);
for(let i = 0; i < family.length; i++){
    let info = document.createElement("ul");
    let firstname = document.createElement("h2");
    let eyeColor = document.createElement("li");
    let heigth = document.createElement("li");
    let children = document.createElement("li");
    firstname.innerHTML = family[i].firstname;
    eyeColor.innerHTML = family[i].eyeColor;
    heigth.innerHTML = family[i].heigth + "cm";
    children.innerHTML = family[i].children + " barn";
    container.appendChild(info);
    info.appendChild(firstname);
    info.appendChild(eyeColor);
    info.appendChild(heigth);
    info.appendChild(children);
}

//# sourceMappingURL=fredag.1bfcf2bc.js.map
