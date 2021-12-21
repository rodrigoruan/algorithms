const quickSort = (arr) => {
  if (arr.length < 1) return [];

  const left = [];
  const right = [];
  const pivot = arr[0];

  for(let i = 1; i < arr.length; i += 1) {
    if (arr[i] < pivot) 
      left.push(arr[i]);
    else
      right.push(arr[i]);
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
};

console.log(quickSort([4, 9, 2, 1, 6, 3, 8]));
