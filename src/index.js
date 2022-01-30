import './style.css';
import initializeWebsite from './views/initialize';
import Game from '../src/models/factories/game';
import DOMnodes from "./views/DOMNodes";

// website initialization
initializeWebsite();

// game init
let game = Game();
startGame();

// add event listener
const restartBtn = DOMnodes.getRestartBtn();
restartBtn.addEventListener("click", (e) => {
  game.init();
  startGame();
})

// new game
function startGame() {
  game.renderName();
  game.renderGrid();
  game.renderAvailableShips();
  game.placeShips();
  game.addEventListener();
}