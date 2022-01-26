const Ship = (length) => {
  // assign object property
  const shipLength = length;

  let status = [];
  for (let i=0; i < length; i++) {
    status.push({"hit": false});
  }

  // change object property
  const hit = (position) => {
    status[position].hit = true
  };

  // access object information
  const getLength = () => shipLength;
  const getStatus = () => status;
  const isSunk = () => {
    for (let i=0; i < length; i++) {
      if (!status[i].hit) return false
    }
    return true
  };

  return {getLength, getStatus, hit, isSunk}
};

export default Ship;