const AI = (() => {

  const Algo_1 = (hitAttacksArray, notAttackedNums) => {
    let guessCount = 0;
    let targetNum = -1;
    if (hitAttacksArray.length === 0) {
      targetNum = notAttackedNums[Math.floor(Math.random() * notAttackedNums.length)];
    } else {
      while (!notAttackedNums.includes(targetNum)) {
        targetNum = hitAttacksArray[Math.floor(Math.random() * hitAttacksArray.length)] + [-1, 1, -10, 10][Math.floor(Math.random() * 4)]
        guessCount += 1
        if (guessCount > hitAttacksArray.length * 4 ) {
          targetNum = notAttackedNums[Math.floor(Math.random() * notAttackedNums.length)];
          break
        }
      }
    }
    return targetNum;
  }

  const Algo_2 = (hitAttacksArray, notAttackedNums) => {
    let guessCount = 0;
    let targetNum = -1;
    if (hitAttacksArray.length === 0) {
      targetNum = notAttackedNums[Math.floor(Math.random() * notAttackedNums.length)];
    } else {
      while (!notAttackedNums.includes(targetNum)) {
        if (hitAttacksArray.length > 1 && Math.abs(hitAttacksArray[hitAttacksArray.length - 1] - hitAttacksArray[hitAttacksArray.length - 2]) === 10) {
          targetNum = hitAttacksArray[Math.floor(Math.random() * hitAttacksArray.length)] + [-10, 10][Math.floor(Math.random() * 2)]
        } else {
          targetNum = hitAttacksArray[Math.floor(Math.random() * hitAttacksArray.length)] + [-1, 1][Math.floor(Math.random() * 2)]
        }
        guessCount += 1
        if (guessCount > hitAttacksArray.length * 4 ) {
          targetNum = notAttackedNums[Math.floor(Math.random() * notAttackedNums.length)];
          break
        }
      }
    }
    return targetNum;
  }

  return { Algo_1, Algo_2 };
})();

export default AI;