import Ship from "../ship";

describe("ship", () => {
  test("A ship should return exact the same length with which it was created.", () => {
    let length = 3;
    let ship = Ship(length);
    expect(ship.getLength()).toBe(length);
  });
  test("A ship should return an status which represents its location and hit-status", () => {
    let length = 3;
    let ship = Ship(length);
    let status = [{"hit": false}, {"hit": false}, {"hit": false}]
    expect(ship.getStatus()).toEqual(status);
  });
  test("A ship should have a hit() function that takes a number and then marks that position hit status as true.", () => {
    let length = 3;
    let ship = Ship(length);
    ship.hit(1);
    let status = [{"hit": false}, {"hit": true}, {"hit": false}]
    expect(ship.getStatus()).toEqual(status);
  });
  test("A ship should have isSunk() function calculates whether it is sunk or not. (example 1)", () => {
    let length = 3;
    let ship = Ship(length);
    expect(ship.isSunk()).not.toBeTruthy();
  });
  test("A ship should have isSunk() function calculates whether it is sunk or not. (example 2)", () => {
    let length = 3;
    let ship = Ship(length);
    ship.hit(0);
    ship.hit(1);
    ship.hit(2);
    expect(ship.isSunk()).toBeTruthy();
  });
  test("A ship should have isSunk() function calculates whether it is sunk or not. (example 3)", () => {
    let length = 3;
    let ship = Ship(length);
    ship.hit(1);
    ship.hit(2);
    expect(ship.isSunk()).not.toBeTruthy();
  });
});