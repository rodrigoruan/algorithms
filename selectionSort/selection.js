const selectionSort = (array) => {
  for (let i = 0; i < array.length; i += 1) {
    for (let j = i + 1; j < array.length; j += 1) {
      if (array[i] > array[j]) {
        const aux = array[i];
        array[i] = array[j];
        array[j] = aux;
      }
    }
  }
  return array;
};

console.log(selectionSort([5, 2, 3, 1, 7, 6, 4, 123, 543, 213, 23, 65, 2]));
