import Player from '../player';
import GameBoard from "../gameBoard";
import Ship from "../ship";

describe("player", () => {
  test("Players can take turns playing the game by attacking the enemy Gameboard.", () => {
    const enemyGameBoard = GameBoard(10,10);
    const ship = Ship(3);
    const place = [5, 6, 7]
    // places a ship
    enemyGameBoard.placeShip(ship, place);
    // create a player
    const player = Player("name");
    // player attacks enemy game board and miss
    expect(player.attack(enemyGameBoard, 4)).toBe("miss");
    // player attacks enemy game board and hit
    expect(player.attack(enemyGameBoard, 5)).toBe("hit");
    // player attacks the same position in enemy game board
    expect(player.attack(enemyGameBoard, 5)).toBe("duplicated");
  });
  test("Make computer play by attacking random number.", () => {
    const enemyGameBoard = GameBoard(10,10);
    // create a player
    const computerPlayer = Player("computer");
    // Computer can attack game board by choosing random number
    expect(computerPlayer.randomAttack(enemyGameBoard).result).toBe("miss");
    // Computer doesn't attack the same position
    for (let i = 1; i < 100; i++) {
      computerPlayer.randomAttack(enemyGameBoard)
    }
    const missedAttacksArray = Array.from(Array(100).keys());
    expect(enemyGameBoard.getMissedAttacksArray().sort((a, b) => a - b)).toEqual(missedAttacksArray);
  });
});