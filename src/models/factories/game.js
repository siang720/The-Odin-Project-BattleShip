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

  // Drag factory
  let drag = Drag(userGameBoard);

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
      DOMnodes.getUserGrid().childNodes[targetNum].innerText = "O"
      if (userGameBoard.getAllSunk()) {
        endGame = true
        alert("Computer win! Game Over");
      } else {
        currentUser = "user";
        setTimeout(() => alert("Your term now!"), 200);
      }
    };
    if (result === "miss") {
      DOMnodes.getUserGrid().childNodes[targetNum].innerText = "X";
      currentUser = "user";
      setTimeout(() => alert("Your term now!"), 200);
    };
  }

  // event listener
  const addEventListener = () => {
    DOMnodes.getComputerGrid().addEventListener("click", (e) => {
      const targerCell = e.target;
      if (endGame) {
        alert("Game Over");
        // ask user if restart game
      } else if (currentUser === "computer") {
        alert("It's computer term now!");
      } else if (targerCell.dataset.owner === "computer" && currentUser === "user") {
        const result = user.attack(computerGameBoard, targerCell.dataset.index);
        // hit
        if (result === "hit") {
          targerCell.innerText = "O"
          if (computerGameBoard.getAllSunk()) {
            endGame = true
            alert("You win! Game Over");
          } else {
            currentUser = "computer";
            setTimeout(() => computerAttack(), 400);
          }
        };
        // miss
        if (result === "miss") {
          DOMnodes.getComputerGrid().childNodes[targerCell.dataset.index].innerText = "X";
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

  return { renderName, placeShips, init, renderAvailableShips, renderGrid, addEventListener}
};

// Game Loop
export default Game;