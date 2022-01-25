import GameBoard from "../gameBoard";
import Ship from "../ship";

describe("gameBoard", () => {
  test("A gameboard array element should have obeject representaing its status", () => {
    const gameBoard = GameBoard(10,10);
    const cellInfo = { shipObject: undefined, shipPart: undefined };
    // expectations
    expect(gameBoard.getCell(0)).toEqual(cellInfo);
    expect(gameBoard.getCell(49)).toEqual(cellInfo);
    expect(gameBoard.getCell(99)).toEqual(cellInfo);
  });
  
  test("Gameboards should be able to place ships at specific place", () => {
    const gameBoard = GameBoard(10,10);
    const ship = Ship(3);
    const place = [5, 6, 7]
    // places a ship
    gameBoard.placeShip(ship, place);
    // expectations
    expect(gameBoard.getCell(5)).toEqual({shipObject: ship, shipPart: 0});
    expect(gameBoard.getCell(6)).toEqual({shipObject: ship, shipPart: 1});
    expect(gameBoard.getCell(7)).toEqual({shipObject: ship, shipPart: 2});
  });
  
  test("Gameboards should have a receiveAttack function determines whether or not the attack hit a ship and then sends the ‘hit’ function to the correct ship, or records the coordinates of the missed shot.", () => {
    const gameBoard = GameBoard(10,10);
    const ship = Ship(3);
    const place = [5, 6, 7]
    // places a ship
    gameBoard.placeShip(ship, place);
    // expectations
    expect(gameBoard.receiveAttack(5)).toBe("hit");
    expect(ship.getStatus()[0].hit).toBeTruthy();
    expect(gameBoard.receiveAttack(8)).toBe("miss");
    expect(gameBoard.getCell(8)).toEqual({shipObject: undefined, shipPart: undefined, miss: true});
  });
  
  test("Gameboards should keep track of missed attacks so they can display them properly.", () => {
    const gameBoard = GameBoard(10,10);
    gameBoard.receiveAttack(6);
    expect(gameBoard.getMissedAttacksArray()[0]).toEqual(6);
  });
  
  test("Gameboards should be able to report whether or not all of their ships have been sunk.", () => {
    const gameBoard = GameBoard(10,10);
    // places two ships
    const shipOne = Ship(2);
    const placeOne = [0, 1];
    const shipTwo = Ship(3);
    const placeTwo = [2, 3, 4];
    gameBoard.placeShip(shipOne, placeOne);
    gameBoard.placeShip(shipTwo, placeTwo);
    // make shipOne sunk
    gameBoard.receiveAttack(0);
    gameBoard.receiveAttack(1);
    expect(gameBoard.getAllSunk()).toBe(false);
    // make shipTwo sunk
    gameBoard.receiveAttack(2);
    gameBoard.receiveAttack(3);
    gameBoard.receiveAttack(4);
    expect(gameBoard.getAllSunk()).toBe(true);

  });
  test("Gameboards should be able to show all the cells occupied with ships.", () => {
    const gameBoard = GameBoard(10,10);
    // places two ships
    const shipOne = Ship(2);
    const placeOne = [0, 1];
    const shipTwo = Ship(3);
    const placeTwo = [2, 3, 4];
    gameBoard.placeShip(shipOne, placeOne);
    gameBoard.placeShip(shipTwo, placeTwo);
    expect(gameBoard.getOccupiedCells()).toEqual([0,1,2,3,4]);
  })
});