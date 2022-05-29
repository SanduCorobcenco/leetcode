function kadanesAlgorithm(array) {
   
    let endingHere = array[0];
    let maxCurrent = array[0];
    for(let i = 1; i < array.length; i++) {
      const number = array[i];
      endingHere = Math.max(number, endingHere + number);
      maxCurrent = Math.max(maxCurrent, endingHere);
    }
    return maxCurrent;
  }