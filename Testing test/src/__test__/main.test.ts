import { string } from "yargs";
import { add, addPerson, handleClick, sendMessage } from "../ts/main";
import { Person } from "../ts/models/person";

test("should send message correctly", () => {
  // Arrange
  let x: string = "hej";
  let y: string = "då";
  //ACT
  let sum: string = sendMessage(x + y);
  // Assert
  expect(sum).toBe("hejdå");
  console.log(sum);
});

test("Should be what goes in", () => {
  //Arrange
  let greeting: string = "Hello World!";

  // ACT
  let myMessage: string = sendMessage(greeting);

  // Assert
  expect(myMessage).toBe("Hello World!");
});

test("Should add correctly", () => {
  let x: number = 10;
  let y: number = 15;

  let sum: number = add(x + y);

  expect(sum).toBe(25);
});

test("Should the clikcers click correctly", () => {
  let first: number = 5;
  let second: number = 10;

  let sum: number = handleClick(first, second);

  expect(sum).toBe(15);
});

test("Should not add persons who needs space", () => {
  // Arrange
  let theList: Person[] = [new Person("åke")];
  let length = theList.length;
  let name = "Adam Stuborn";

  // Act
  addPerson(name, theList);

  // Assert
  expect(theList.length).toBe(length);
});
