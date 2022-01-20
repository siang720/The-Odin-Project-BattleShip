import Ship from "../ship";

describe("ship", () => {
  test("A ship should return exact the same length with which it was created.", () => {
    let arr = [1, 2, 3]
    let ship = Ship(arr);
    expect(ship.getLength()).toBe(arr.length);
  });
  test("A ship should return an status which represents its location and hit-status", () => {
    let arr = [1, 2, 3]
    let ship = Ship(arr);
    let status = {
      1: {"hit": false}, 
      2: {"hit": false}, 
      3: {"hit": false}
    };
    expect(ship.getStatus()).toEqual(status);
  });
  test("A ship should have a hit() function that takes a number and then marks that position hit status as true.", () => {
    let arr = [1, 2, 3]
    let ship = Ship(arr);
    ship.hit(1);
    let status = {
      1: {"hit": true}, 
      2: {"hit": false}, 
      3: {"hit": false}
    };
    expect(ship.getStatus()).toEqual(status);
  });
  test("A ship should have isSunk() function calculates whether it is sunk or not. (example 1)", () => {
    let arr = [1, 2, 3]
    let ship = Ship(arr);
    expect(ship.isSunk()).not.toBeTruthy();
  });
  test("A ship should have isSunk() function calculates whether it is sunk or not. (example 2)", () => {
    let arr = [1, 2, 3]
    let ship = Ship(arr);
    ship.hit(1);
    ship.hit(2);
    ship.hit(3);
    expect(ship.isSunk()).toBeTruthy();
  });
  test("A ship should have isSunk() function calculates whether it is sunk or not. (example 3)", () => {
    let arr = [1, 2, 3]
    let ship = Ship(arr);
    ship.hit(1);
    ship.hit(2);
    expect(ship.isSunk()).not.toBeTruthy();
  });
});