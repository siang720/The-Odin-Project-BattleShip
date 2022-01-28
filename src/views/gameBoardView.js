const gameBoardView = (() => {
  const renderName = (nameNode, player) => {
    nameNode.innerText = player.getName();
  }

  const renderShip = (grid, startIndex, shipLength, isHorizontal) => {
    let step = isHorizontal ? 1 : 10;
    for (let i = 0; i < shipLength; i += step) {
      grid.childNodes[startIndex + i].classList.add("occupied");
    }
  }

  return { renderName, renderShip }
})();

export default gameBoardView;