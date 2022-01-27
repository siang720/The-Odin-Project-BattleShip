const createHeader = () => {
  const header = document.createElement("div");
  header.classList.add("header");

  const gameName = document.createElement("h1");
  gameName.classList.add("game-name");
  gameName.textContent = "Let's Play Battleship";

  header.appendChild(gameName);

  return header;
}

const createMain = () => {
  const main = document.createElement("div");
  main.classList.add("main");
  main.appendChild(createGameBoardCard("user", 10));
  main.appendChild(createGameBoardCard("computer",10));

  return main;
}

const createGameBoardCard = (name, size) => {
  const gameBoardCard = document.createElement("div");
  gameBoardCard.classList.add(`${name}-gameBoard`);
  const userName = document.createElement("div");
  userName.classList.add(`${name}-name`);
  const grid = document.createElement("div");
  grid.classList.add("grid");
  grid.classList.add(`${name}-grid`);

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