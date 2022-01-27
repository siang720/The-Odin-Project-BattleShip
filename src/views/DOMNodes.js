const DOMnodes = (() => {
  const getUserNameNode = () => document.querySelector(".user-name");
  const getComputerNameNode = () => document.querySelector(".computer-name");
  const getUserGrid = () => document.querySelector(".user-grid");
  const getComputerGrid = () => document.querySelector(".computer-grid");

  return { getUserNameNode, getComputerNameNode, getUserGrid, getComputerGrid}
})();

export default DOMnodes;