const binarySearch = (array, target) => {
  let L = 0, R = array.length - 1;

  while(L <= R) {
    const mid = Math.floor((R + L) / 2);
    
    if(array[mid] === target) {
      return mid;
    } else if(array[mid] < target) {
      L = mid + 1;
    } else {
      R = mid - 1;
    }
  }

  return -1;
}