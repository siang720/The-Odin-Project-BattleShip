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
  const gameZone = document.createElement("div");
  gameZone.classList.add("gameZone");
  let userGameBoard = createGameBoardCard("user");
  let computerGameBoard = createGameBoardCard("computer");
  main.appendChild(gameZone);
  gameZone.appendChild(userGameBoard);
  gameZone.appendChild(computerGameBoard);

  return main;
}

const createGameBoardCard = (name) => {
  const gameBoardCard = document.createElement("div");
  gameBoardCard.classList.add(`${name}-gameBoard`);
  const userName = document.createElement("div");
  userName.classList.add(`${name}-name`);
  gameBoardCard.appendChild(userName);

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