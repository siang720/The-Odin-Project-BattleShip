import DOMnodes from "../../views/DOMNodes";
import gameBoardView from "../../views/gameBoardView";
import Ship from "./ship";

const Drag = (userGameBoard) => {
  let draggedShip = "";
  let draggedShipIndex;
  let isHorizontal = true;

  const getDraggedShipIndex = (e) => {
    draggedShipIndex = Number(e.target.dataset.index)
  }

  const dragStart = (e) => {
    draggedShip = e.target;
  };

  const dragDrop = (e) => {
    // if ship size cross the border, reject this drag
    let shipLength = draggedShip.childNodes.length;
    // for horizontal ship
    let rightLength = shipLength - draggedShipIndex - 1;
    let leftLength = draggedShipIndex;
    let leftSpaces = e.target.dataset.index % 10
    let rightSpaces = 9 - leftSpaces;
    // for vertical ship
    let bottomLength = shipLength - draggedShipIndex - 1;
    let topLength = draggedShipIndex;
    let topSpaces = Math.floor(e.target.dataset.index / 10);
    let bottomSpaces = 9 - leftSpaces;
    // start Index
    let startIndex = isHorizontal ? e.target.dataset.index - leftLength : e.target.dataset.index - topLength * 10;
    // check ship place availability
    if ( isHorizontal ) {
      if ( rightLength <= rightSpaces && leftLength <= leftSpaces) {
        // gameBoardView render ship place
        gameBoardView.renderShip(DOMnodes.getUserGrid(), startIndex, shipLength, isHorizontal);
        draggedShip.parentNode.remove();
        addDragAndDropEvenListeners();
        // place ship to user gameBoard object
        let place = [];
        for (let i = 0; i < shipLength; i++) {
          place.push(startIndex + i);
        }
        userGameBoard.placeShip(Ship(shipLength), place);
      }
    } else {
      if ( bottomLength <= bottomSpaces && topLength <= topSpaces) {
        // gameBoardView render ship place
        gameBoardView.renderShip(DOMnodes.getUserGrid(), startIndex, shipLength, isHorizontal);
        draggedShip.parentNode.remove();
        // place ship to user gameBoard object
        let place = [];
        for (let i = 0; i < shipLength; i += 10) {
          place.push(startIndex + i);
        }
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