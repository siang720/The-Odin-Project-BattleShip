import './style.css';
import initializeWebsite from './views/initialize';
import Game from '../src/models/factories/game';

initializeWebsite();

let game = Game();
game.renderName();
game.placeShips();
game.startGame();