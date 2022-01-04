const binarySearch = (arr, L, R, target) => {
  if (L <= R) {
    const mid = Math.round((R + L) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) return binarySearch(arr, mid + 1, R, target);
    return binarySearch(arr, L, mid - 1, target);
  }

  return -1;
};
