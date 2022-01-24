import GameBoard from "./gameBoard";
import Ship from "./ship";
import Player from "./player";

// Initialization
const newGame = () => {
  const user = {
    player: Player("User"),
    gameBoard: GameBoard(10,10),
    ships: [
      {ship: Ship(5), place: [0,1,2,3,4]}, 
      {ship: Ship(4), place: [10,11,12,13]}, 
      {ship: Ship(3), place: [20,21,22]}, 
      {ship: Ship(3), place: [30,31,32]}, 
      {ship: Ship(2), place: [40,41]}
    ]
  };
  
  const computer = {
    player: Player("Computer"),
    gameBoard: GameBoard(10,10),
    ships: [
      {ship: Ship(5), place: [0,1,2,3,4]}, 
      {ship: Ship(4), place: [10,11,12,13]}, 
      {ship: Ship(3), place: [20,21,22]}, 
      {ship: Ship(3), place: [30,31,32]}, 
      {ship: Ship(2), place: [40,41]}
    ]
  };
  
  user.ships.forEach(shipInfo => {
    user.gameBoard.placeShip(shipInfo.ship, shipInfo.place);
  });
  
  computer.ships.forEach(shipInfo => {
    computer.gameBoard.placeShip(shipInfo.ship, shipInfo.place);
  })

  return { user, computer };
};

// Game Loop
export default newGame;