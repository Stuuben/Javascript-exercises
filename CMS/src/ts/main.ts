console.log("hej värld")


let fNameInput: HTMLInputElement = document.getElementById("userInput") as HTMLInputElement;
let lNameInput: HTMLInputElement = document.getElementById("userInput2") as HTMLInputElement;
let saveButton: HTMLButtonElement = document.getElementById("saveButton") as HTMLButtonElement;

saveButton.addEventListener("click", saveFullName);


let uniqueUserID:number = Date.now();

let firstPerson:{} = {
  firstname: fNameInput.value,
  lastname: lNameInput.value,
  userID: uniqueUserID
 
}

let usersFullNameInput = [firstPerson];



function saveFullName() {

const addToObject= { firstname: fNameInput.value, lastname: lNameInput.value, userID: uniqueUserID++};

usersFullNameInput.push(addToObject)

console.log(usersFullNameInput)

let nameDiv:HTMLDivElement = document.createElement("div");
let nameP:HTMLParagraphElement = document.createElement("p");

nameP.innerHTML = "Fullname: " + fNameInput.value + " " + lNameInput.value;

nameDiv.appendChild(nameP)
document.body.appendChild(nameDiv)
  
}



for (let i:number = 0; i < usersFullNameInput.length; i++) {
  

}


// skapa nya objekt och lagra dessa i localStorage

// Id - number
// förnamn - string
// efternamn - string



// Varje blog kan sedan ha en eller flera inlägg. Ett inlägg består av följande information:
//•Titel
//•Innehåll
//•BlogId


