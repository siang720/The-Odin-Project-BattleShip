import GameBoard from "./gameBoard";
import Player from "./player";
import Ship from "./ship";
import gameBoardView from "../../views/gameBoardView";
import DOMnodes from "../../views/DOMNodes";
import Drag from "./drag";

// Initialization
const Game = () => {
  // DOM nodes
  let userName = DOMnodes.getUserNameNode();
  let computerName = DOMnodes.getComputerNameNode();
  let userGameBoardSection = DOMnodes.getUserGameBoard();
  let computerGameBoardSection = DOMnodes.getComputerGameBoard();

  // set up a new game by creating Players and Gameboards
  let user = Player("User");
  let userGameBoard = GameBoard(10,10);
  let computer = Player("Computer");
  let computerGameBoard = GameBoard(10,10);
  
  // initial state
  let currentUser = "user";
  let endGame = false;

  // Drag factory
  let drag = Drag(userGameBoard);

  // available ship
  const availableShips = [
    {name: "Carrier", length: 5},
    {name: "Battleship", length: 4},
    {name: "Cruiser", length: 3},
    {name: "Submarine", length: 3},
    {name: "Destroyer", length: 2}
  ]

  // render players' names
  const renderName = () => {
    gameBoardView.renderName(userName, user);
    gameBoardView.renderName(computerName, computer);
  }

  // render grid
  const renderGrid = () => {
    gameBoardView.renderGrid(userGameBoardSection, "user", 10);
    gameBoardView.renderGrid(computerGameBoardSection, "computer", 10);
  }

  // render user's available ships
  const renderAvailableShips = () => {
    availableShips.forEach(ship => {
      gameBoardView.addShip(userGameBoardSection, ship.name, ship.length);
    });
  }

  // render notice text
  const renderNotice = () => {
    gameBoardView.renderNotice("Put user's ships to the place you want!", DOMnodes.getNotice());
  }

  // place ships
  const placeShips = () => {
    // add Drag N Drop event listener
    drag.addDragAndDropEvenListeners();

    // computer ships
    const computerShips = [
      {ship: Ship(5), place: [0,1,2,3,4]}, 
      {ship: Ship(4), place: [20,21,22,23]}, 
      {ship: Ship(3), place: [40,41,42]}, 
      {ship: Ship(3), place: [60,61,62]}, 
      {ship: Ship(2), place: [80,81]}
    ];
    computerShips.forEach(ship => {
      computerGameBoard.placeShip(ship.ship, ship.place);
    })
  };

  // computer attack
  const computerAttack = () => {
    const {result, targetNum} = computer.randomAttack(userGameBoard);
    // hit
    if (result === "hit") {
      gameBoardView.receiveAttack(DOMnodes.getUserGrid(), targetNum, result);
      if (userGameBoard.getAllSunk()) {
        endGame = true
        gameBoardView.renderNotice("Computer win! Game Over", DOMnodes.getNotice());
      } else {
        currentUser = "user";
        setTimeout(() => {
          gameBoardView.renderNotice("Your term now!", DOMnodes.getNotice());
        }, 200);
      }
    };
    if (result === "miss") {
      gameBoardView.receiveAttack(DOMnodes.getUserGrid(), targetNum, result);
      currentUser = "user";
      setTimeout(() => {
        gameBoardView.renderNotice("Your term now!", DOMnodes.getNotice());
      }, 200);
    };
  }

  // event listener
  const addEventListener = () => {
    DOMnodes.getComputerGrid().addEventListener("click", (e) => {
      if (userGameBoard.getShips().length < 5) {
        gameBoardView.renderNotice("Put all your ships on the board!", DOMnodes.getNotice());
        return
      }
      const targerCell = e.target;
      if (endGame) {
        // alert("Game Over");
        gameBoardView.renderNotice("Game Over!", DOMnodes.getNotice());
        // ask user if restart game
      } else if (currentUser === "computer") {
        gameBoardView.renderNotice("It's computer term now!", DOMnodes.getNotice());
      } else if (targerCell.dataset.owner === "computer" && currentUser === "user") {
        const result = user.attack(computerGameBoard, targerCell.dataset.index);
        // hit
        if (result === "hit") {
          gameBoardView.receiveAttack(DOMnodes.getComputerGrid(), targerCell.dataset.index, result);
          if (computerGameBoard.getAllSunk()) {
            endGame = true
            gameBoardView.renderNotice("You win! Game Over!", DOMnodes.getNotice());
          } else {
            currentUser = "computer";
            gameBoardView.renderNotice("Computer's term now!", DOMnodes.getNotice());
            setTimeout(() => computerAttack(), 1000);
          }
        };
        // miss
        if (result === "miss") {
          gameBoardView.receiveAttack(DOMnodes.getComputerGrid(), targerCell.dataset.index, result);
          currentUser = "computer";
          setTimeout(() => computerAttack(), 400);
        };
      }
    })
  };

  // initialize game
  const init = () => {
    // remove grid
    gameBoardView.removeGrid(DOMnodes.getUserGrid());
    gameBoardView.removeGrid(DOMnodes.getComputerGrid());

    // clear all available ships
    gameBoardView.clearAvailableShips(userGameBoardSection);

    // redefine players, gameboards, drag, state
    user = Player("User");
    userGameBoard = GameBoard(10,10);
    computer = Player("Computer");
    computerGameBoard = GameBoard(10,10);
    drag = Drag(userGameBoard);
    currentUser = "user";
    endGame = false;
  }

  return { renderName, renderNotice, placeShips, init, renderAvailableShips, renderGrid, addEventListener}
};

// Game Loop
export default Game;