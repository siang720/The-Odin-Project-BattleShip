const gameBoardView = (() => {
  const renderName = (nameNode, player) => {
    nameNode.innerText = player.getName();
  }

  const renderGrid = (gameBoardSection, name, size) => {
    const grid = document.createElement("div");
    grid.classList.add("grid", `${name}-grid`);    
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`
    for (let i = 0; i < size * size; i++) {
      const gridElement = document.createElement('div');
      gridElement.classList.add('cell');
      gridElement.dataset.index = i;
      gridElement.dataset.owner = name;
      grid.appendChild(gridElement);
    }
    gameBoardSection.appendChild(grid);
  }

  const renderShip = (grid, startIndex, shipLength, isHorizontal) => {
    let step = isHorizontal ? 1 : 10;
    for (let i = 0; i < shipLength; i += step) {
      grid.childNodes[startIndex + i].classList.add("occupied");
    }
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

  const removeGrid = (grid) => {
    grid.remove();
  };

  const clearAvailableShips = (gameBoardSection) => {
    while (gameBoardSection.lastChild.classList.contains("ship-container")) {
      gameBoardSection.lastChild.remove();
    }
  };

  return { renderName, renderShip, addShip, clearAvailableShips, renderGrid, removeGrid }
})();

export default gameBoardView;