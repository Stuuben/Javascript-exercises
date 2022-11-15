let myUl:HTMLUListElement = document.createElement("ul");


let animals:string [] = ["Katt", "Hund", "Fisk", "Zebra"]


  for (let i:number = 0; i < animals.length; i++) {

   let myLi:HTMLLIElement = document.createElement("li")

  myLi.innerHTML += animals[i]

   myUl.appendChild(myLi)
   document.body.appendChild(myUl)
  }

