import GameBoard from "./gameBoard";
import Player from "./player";
import Ship from "./ship";
import gameBoardView from "../../views/gameBoardView";
import DOMnodes from "../../views/DOMNodes";

// Initialization
const Game = () => {
  // set up a new game by creating Players and Gameboards
  let user = Player("User");
  let userGameBoard = GameBoard(10,10);
  let computer = Player("Computer");
  let computerGameBoard = GameBoard(10,10);
  
  // initial state
  let currentUser = "user";
  let endGame = false;

  // DOM nodes
  const userName = DOMnodes.getUserNameNode();
  const computerName = DOMnodes.getComputerNameNode();
  const userGrid = DOMnodes.getUserGrid();
  const computerGrid = DOMnodes.getComputerGrid();

  // render players' names
  const renderName = () => {
    gameBoardView.renderName(userName, user);
    gameBoardView.renderName(computerName, computer);
  }

  // place ships
  const placeShips = () => {
    // predetermined ships
    const userShips = [
      {ship: Ship(5), place: [0,1,2,3,4]}, 
      {ship: Ship(4), place: [23,24,25,26]}, 
      {ship: Ship(3), place: [47,48,49]}, 
      {ship: Ship(3), place: [62,63,64]}, 
      {ship: Ship(2), place: [85,86]}
    ];
    const computerShips = [
      // {ship: Ship(5), place: [0,1,2,3,4]}, 
      // {ship: Ship(4), place: [20,21,22,23]}, 
      // {ship: Ship(3), place: [40,41,42]}, 
      // {ship: Ship(3), place: [60,61,62]}, 
      {ship: Ship(2), place: [80,81]}
    ];
    // place ships
    userShips.forEach(ship => {
      // place ship to game board
      userGameBoard.placeShip(ship.ship, ship.place);
      // show user ship's place on game board
      ship.place.forEach(index => {
        userGrid.childNodes[index].classList.add("occupied");
      })
    })
    computerShips.forEach(ship => {
      computerGameBoard.placeShip(ship.ship, ship.place);
    })
  };

  // computer attack
const computerAttack = () => {
  const {result, targetNum} = computer.randomAttack(userGameBoard);
  // hit
  if (result === "hit") {
    userGrid.childNodes[targetNum].innerText = "O"
    if (userGameBoard.getAllSunk()) {
      endGame = true
      alert("Computer win! Game Over");
    } else {
      currentUser = "user";
      alert("Your term now!");
    }
  };
  if (result === "miss") {
    userGrid.childNodes[targetNum].innerText = "X";
    currentUser = "user";
    alert("Your term now!");
  };
}

  const startGame = () => {
    // add event listener to computer grid
    computerGrid.addEventListener("click", (event) => {
      const targerCell = event.target;
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
            computerAttack();
          }
        };
        // miss
        if (result === "miss") {
          computerGrid.childNodes[targerCell.dataset.index].innerText = "X";
          currentUser = "computer";
          computerAttack();
        };
      }
    })

    //
  }

  return { renderName, placeShips, startGame }
};

// Game Loop
export default Game;