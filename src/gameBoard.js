const GameBoard = (rows, columns) => {
  // properties
  let cells = [];
  for (let i=0; i < rows*columns; i++) {
    cells.push({ shipObject: undefined, shipPart: undefined })
  };
  let missedAttacksArray = [];
  let ships = [];

  // method
  const placeShip = (ship, place) => {
    ships.push(ship);
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
  const getCell = (num) => {
    return cells[num];
  };
  const getMissedAttacksArray = () => { return missedAttacksArray };
  const getAllSunk = () => {
    for (let i = 0; i < ships.length; i++) {
      if (!ships[i].isSunk()) return false
    }
    return true
  };

  return { getCell, placeShip, receiveAttack, getMissedAttacksArray, getAllSunk };
};

export default GameBoard;