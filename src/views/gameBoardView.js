const gameBoardView = (() => {
  const renderName = (nameNode, player) => {
    nameNode.innerText = player.getName();
  }
  return { renderName }
})();

export default gameBoardView;