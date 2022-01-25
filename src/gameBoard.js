const GameBoard = (rows, columns) => {
  // properties
  let cells = [];
  for (let i=0; i < rows*columns; i++) {
    cells.push({ shipObject: undefined, shipPart: undefined })
  };
  let missedAttacksArray = [];
  let ships = [];
  let occupiedCells = [];

  // method
  const placeShip = (ship, place) => {
    ships.push(ship);
    occupiedCells = [...occupiedCells, ...place];
    for (let i=0; i < place.length; i++) {
      cells[place[i]].shipObject = ship;
      cells[place[i]].shipPart = i;
    }
  };
  const receiveAttack = (num) => {
    if (cells[num].shipObject === undefined) {
      cells[num]["miss"] = true;
      missedAttacksArray.push(num);
      return "miss";
    };
    cells[num].shipObject.hit(cells[num].shipPart);
    return "hit";
  };

  // access
  const getCell = (num) => cells[num];
  const getMissedAttacksArray = () => missedAttacksArray;
  const getAllSunk = () => {
    for (let i = 0; i < ships.length; i++) {
      if (!ships[i].isSunk()) return false
    }
    return true
  };
  const getOccupiedCells = () => occupiedCells;

  return { getCell, placeShip, receiveAttack, getMissedAttacksArray, getAllSunk, getOccupiedCells };
};

export default GameBoard;