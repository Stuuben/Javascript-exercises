// Skapa HTML

let container = document.getElementById("div");
container.className = "wrapper";
container.id = "main_container";
container.innerHTML = "<h2>rubik</h2><p>Lorem ipsum</p>";

//hitta objekt
document.getElementById("");
// lägg in someTag inuti (container)
someTag.appendChild(container);

document.body.appendChild(container);

// skapa
let pTag = document.createElement("p");
pTag.innerHTML = "lorem ipsum";
pTag.className = "wrapper__text";
container.appendChild(pTag);
let pTagMOd = document.createElement("p");
pTagMOd.className = "wrapper__text--small";
container.appendChild(pTagMOd);
//

// skapa en bild
let myProfilePicture = document.createElement("img");
// set attribut till bilden
myProfilePicture.setAttribute("src", "http://somelink.png");
myProfilePicture.setAttribute("alt", "Description of me");
