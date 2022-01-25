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

  const randomAttack = (gameBoard) => {
    let notAttackedNums = allNums.filter(n => !attackedNums.includes(n));
    let targetNum = notAttackedNums[Math.floor(Math.random() * notAttackedNums.length)];
    attackedNums.push(targetNum);
    const result = gameBoard.receiveAttack(targetNum);
    return {result, targetNum};
  };

  // access
  const getName = () => playerName;

  return { getName, attack, randomAttack };
};

export default Player;