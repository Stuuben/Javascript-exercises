import { Person } from "./models/person";

export function sendMessage(theMessage: string) {
  return theMessage;
}

export function add(theAwnser: number) {
  return theAwnser;
}

export function handleClick(first: number, second: number) {
  let sum = first + second;
  return sum;
}

export function addPerson(name: string, list: Person[]) {
  if (name !== "") {
    let noSpaces: boolean = name.split(" ").length > 1;
    // console.log(name.split(" "));
    if (!noSpaces) {
      let p: Person = new Person(name);
      list.push(p);
    }
  }
}
