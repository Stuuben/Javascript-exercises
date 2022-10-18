const myName = "Adam";

window.onload; {
    console.log("mitt namn och längd på namn")
    console.log( myName + myName.length);

}


for( i = 0; i < myName.length; i++) {
    console.log (myName[i]);
    if(i < 3){
        console.log ("")
    
    }
   
  
}


let sum = 0;
let numbers = [1,1,5,7,4,3,88,6,4,3];
for (let i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i];

}
  console.log(sum);


 let animals = ["Katt", "Hund", "Fisk", "Zebra"];
console.log(animals)
  let animalList = document.getElementById("bestList");

  for (let i = 0; i < animals.length; i++) {
    animalList.innerHTML += "<li>" + (animals[i]) + "</li>";
  }



  let drinks = [];
  drinks.push("Cola");
  drinks.push("Fanta");
  drinks.push("Öl");
  drinks.push("Vin");

  console.log(drinks)
  

  let drinkList = document.getElementById("secondList");

  for (let i = 0; i < drinks.length; i++) {
    drinkList.innerHTML += "<li>" + (drinks[i] + "</li>");
    console.log(drinks[i])
    
  }

  document.createElement