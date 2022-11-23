import { Number } from "./models/number";

export function add(x: number, y: number): number {
  let sum = x + y;
  addToList(sum);
  return x + y;
}

export function sendMessage(theMessage: string) {
  return theMessage;
}

//
let listAdd = [];

function addToList(somethingCool: number) {
  let x: number = 10;
  let y: number = 20;
  let sum: number = add(x, y);
  let listAdd = [];
  listAdd.push(sum);

  console.log(listAdd);
}
addToList();

// Addera talen

//skapa en funktion vars syfte är att addera talen i en lista

// Denna lista skall vara parament inne i funktionen.
