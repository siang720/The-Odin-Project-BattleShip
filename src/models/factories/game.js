import GameBoard from "./gameBoard";
import Player from "./models/player";

// Initialization
const newGame = () => {
  const user = Player("User");
  const userGameBoard = GameBoard(10,10);
  const computer = Player("Computer");
  const computerGameBoard = GameBoard(10,10);

};

// Game Loop
export default newGame;