const binarySearch = (arr, L, R, target) => {
  if (L <= R) {
    const mid = Math.round((R + L) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) return binarySearch(arr, mid + 1, R, target);
    return binarySearch(arr, L, mid - 1, target);
  }

  return -1;
};

const arr = [];

for (let i = 100; i < 400; i += 1) arr.push(i);

console.log(binarySearch(arr, 0, arr.length - 1, 100 ));
