import AI from './AI';

const Player = (name) => {
  // property
  const playerName = name;
  const allNums = Array.from(Array(100).keys());
  let attackedNums = [];

  // method
  const attack = (gameBoard, targetNum) => {
    if (attackedNums.includes(targetNum)) {
      return "duplicated";
    } else {
      attackedNums.push(targetNum);
      const result = gameBoard.receiveAttack(targetNum);
      return result;
    }
  };
  // random attack plus AI
  const randomAttack = (gameBoard) => {
    // cell indice which have not been attacked
    let notAttackedNums = allNums.filter(n => !attackedNums.includes(n));
    let hitAttacksArray = gameBoard.getHitAttacksArray();
    // Generate target with AI
    let targetNum = AI.Algo_2(hitAttacksArray, notAttackedNums);
    attackedNums.push(targetNum);
    const result = gameBoard.receiveAttack(targetNum);
    return {result, targetNum};
  };

  // access
  const getName = () => playerName;

  return { getName, attack, randomAttack };
};

export default Player;