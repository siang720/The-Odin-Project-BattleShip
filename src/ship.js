const Ship = (arr) => {
  // assign object property
  const length = arr.length;

  let status = {};
  arr.forEach(position => {
    status[position] = { "hit": false}
  });

  // change object property
  const hit = (position) => {
    status[position].hit = true
  };

  // access object information
  const getLength = () => length;
  const getStatus = () => status;
  const isSunk = () => {
    for (const[_, status] of Object.entries(status)) {
      if (!status.hit) return false
    }
    return true
  };

  return {getLength, getStatus, hit, isSunk}
};

export default Ship;