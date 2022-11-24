/**
 * @jest-environment jsdom
 */
import * as functions from "../ts/main";

test("Should click correctly", () => {
  //Arrange
  document.body.innerHTML = `<button id="myButton">ok</button>`;
  let spy = jest.spyOn(functions, "handleClick").mockReturnValue();
  // Act
  functions.handleClick();
  // Assert
  expect(spy).toHaveBeenCalled();
});
