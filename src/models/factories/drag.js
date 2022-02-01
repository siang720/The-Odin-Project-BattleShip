import DOMnodes from "../../views/DOMNodes";
import gameBoardView from "../../views/gameBoardView";
import Ship from "./ship";

const Drag = (userGameBoard) => {
  let draggedShip = "";
  let draggedShipIndex;
  let isHorizontal = true;
  let draggedCells = [];

  const getDraggedShipIndex = (e) => {
    draggedShipIndex = Number(e.target.dataset.index)
  }

  const dragStart = (e) => {
    draggedShip = e.target;
  };

  const dragDrop = (e) => {
    if (draggedCells.includes(e.target.dataset.index)) return
    // if ship size cross the border, reject this drag
    let shipLength = draggedShip.childNodes.length;
    if (isHorizontal) {
      let startIndex = e.target.dataset.index - draggedShipIndex;
      let place = [];
      let invalid = false;
      for (let i = 0; i < shipLength; i++) {
        let currentIndex = startIndex + i
        if (
          currentIndex < 0 ||
          draggedCells.includes(currentIndex) || 
          Math.floor(currentIndex / 10) !== Math.floor(startIndex / 10)
        ) {
          invalid = true;
          break
        }
        place.push(currentIndex);
      }
      if (!invalid) {
        // add ship place to draggedCells
        draggedCells = draggedCells.concat(place);
        // gameBoardView render ship place
        gameBoardView.renderShip(DOMnodes.getUserGrid(), startIndex, shipLength, isHorizontal);
        draggedShip.parentNode.remove();
        addDragAndDropEvenListeners();
        // place ship to user gameBoard object
        userGameBoard.placeShip(Ship(shipLength), place);
      }
    } else {
      // vertical ship
      let startIndex = e.target.dataset.index - draggedShipIndex * 10;
      let place = [];
      let invalid = false;
      for (let i = 0; i < shipLength; i+=10) {
        let currentIndex = startIndex + i
        if (
          currentIndex < 0 ||
          draggedCells.includes(currentIndex) || 
          currentIndex > 99
        ) {
          invalid = true;
          break
        }
        place.push(currentIndex);
      }
      if (!invalid) {
        // add ship place to draggedCells
        draggedCells = draggedCells.concat(place);
        // gameBoardView render ship place
        gameBoardView.renderShip(DOMnodes.getUserGrid(), startIndex, shipLength, isHorizontal);
        draggedShip.parentNode.remove();
        addDragAndDropEvenListeners();
        // place ship to user gameBoard object
        userGameBoard.placeShip(Ship(shipLength), place);
      }
    }
  };

  const dragOver = (e) => {
    e.preventDefault();
  };
  const dragEnd = () => {};

  const addDragAndDropEvenListeners = () => {
    const ships = DOMnodes.getShips();
    const cells = DOMnodes.getUserGrid().childNodes;

    // Add EventListners for drag/drop events
    for (const ship of ships) {
      ship.draggable = true;
      // EventListener to know which index is being held when dragging
      ship.childNodes.forEach(node => {
        node.addEventListener('mousedown', getDraggedShipIndex);
      })
      ship.addEventListener('dragstart', dragStart);
      ship.addEventListener('dragend', dragEnd);
    }
    for (const cell of cells) {
      cell.addEventListener('dragover', dragOver);
      cell.addEventListener('drop', dragDrop);
    }
  };

  const getDraggedShip = () => draggedShip;

  return { addDragAndDropEvenListeners, getDraggedShip };

}

export default Drag;