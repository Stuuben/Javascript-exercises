import { add, sendMessage } from "../ts/main";

test("Should add correctly", () => {
  let x: number = 10;
  let y: number = 15;

  let sum: number = add(x + y);

  expect(sum).toBe(25);
});

test("Should be what goes in", () => {
  //Arrange
  let greeting: string = "Hello World!";

  // ACT
  let myMessage: string = sendMessage(greeting);

  // Assert
  expect(myMessage).toBe("Hello World!");
});
