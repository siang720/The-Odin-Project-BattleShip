const createHeader = () => {
  const header = document.createElement("div");
  header.classList.add("header");

  const gameName = document.createElement("h1");
  gameName.classList.add("game-name");
  gameName.textContent = "Let's Play Battleship";

  const restartBtn = document.createElement("button");
  restartBtn.classList.add("restart-btn");
  restartBtn.textContent = "Restart";

  header.appendChild(gameName);
  header.appendChild(restartBtn);

  return header;
}

const createMain = () => {
  const main = document.createElement("div");
  main.classList.add("main");
  let userGameBoard = createGameBoardCard("user", 10);
  addShip(userGameBoard, "Carrier", 5);
  addShip(userGameBoard, "Battleship", 4);
  addShip(userGameBoard, "Cruiser", 3);
  addShip(userGameBoard, "Submarine", 3);
  addShip(userGameBoard, "Destroyer", 2);
  let computerGameBoard = createGameBoardCard("computer",10)
  main.appendChild(userGameBoard);
  main.appendChild(computerGameBoard);

  return main;
}

const createGameBoardCard = (name, size) => {
  const gameBoardCard = document.createElement("div");
  gameBoardCard.classList.add(`${name}-gameBoard`);
  const userName = document.createElement("div");
  userName.classList.add(`${name}-name`);
  const grid = document.createElement("div");
  grid.classList.add("grid", `${name}-grid`);

  gameBoardCard.appendChild(userName);
  gameBoardCard.appendChild(grid);
  
  grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`
  grid.style.gridTemplateRows = `repeat(${size}, 1fr)`
  for (let i = 0; i < size * size; i++) {
    const gridElement = document.createElement('div');
    gridElement.classList.add('cell');
    gridElement.dataset.index = i;
    gridElement.dataset.owner = name;
    grid.appendChild(gridElement);
  }

  return gameBoardCard;
}

const addShip = (gameBoard, name, length) => {
  let shipContainer = document.createElement("div");
  shipContainer.classList.add("ship-container");
  let shipName = document.createElement("p");
  shipName.classList.add("ship-name");
  shipName.innerText = name;
  let ship = document.createElement("div");
  ship.classList.add("ship");
  ship.id = name;
  for (let i = 0; i < length; i++) {
    let shipElement = document.createElement('div');
    shipElement.classList.add('ship-cell');
    shipElement.dataset.index = i;
    ship.appendChild(shipElement);
  }
  shipContainer.appendChild(shipName);
  shipContainer.appendChild(ship);
  gameBoard.appendChild(shipContainer);
};

const createFooter = () => {
  const footer = document.createElement("footer");
  footer.classList.add("footer");
  const copyright = document.createElement("p");
  copyright.textContent = `Copyright © ${new Date().getFullYear()} Sean Liu`;
  footer.appendChild(copyright);

  return footer;
}

const initializeWebsite = () => {
  const content = document.getElementById("content");
  content.innerHTML = ""
  content.appendChild(createHeader());
  content.appendChild(createMain());
  content.appendChild(createFooter());
}

export default initializeWebsite;