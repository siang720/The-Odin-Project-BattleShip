const DOMnodes = (() => {
  const getContent = () => document.getElementById("content");
  const getNotice = () => document.querySelector(".game-notice");
  const getUserNameNode = () => document.querySelector(".user-name");
  const getComputerNameNode = () => document.querySelector(".computer-name");
  const getUserGameBoard = () => document.querySelector(".user-gameBoard");
  const getComputerGameBoard = () => document.querySelector(".computer-gameBoard");
  const getUserGrid = () => document.querySelector(".user-grid");
  const getComputerGrid = () => document.querySelector(".computer-grid");
  const getRestartBtn = () => document.querySelector(".restart-btn");
  const getShips = () => document.querySelectorAll(".ship");

  return { 
    getContent,
    getNotice,
    getUserNameNode, 
    getComputerNameNode, 
    getUserGrid, 
    getComputerGrid, 
    getRestartBtn, 
    getShips, 
    getUserGameBoard, 
    getComputerGameBoard
  }
})();

export default DOMnodes;