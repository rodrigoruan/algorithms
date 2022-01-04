const quicksort = (arr, inicio = 0, fim) => {
  if (fim === undefined) fim = arr.length - 1;
  if (inicio < fim) {
    let p = partition(arr, inicio, fim);
    quicksort(arr, inicio, p - 1);
    quicksort(arr, p + 1, fim);
  }
  return arr;
};

const partition = (arr, inicio, fim) => {
  let p = arr[fim];
  let i = inicio;
  for (let j = inicio; j < fim; j++) {
    if (arr[j] <= p) {
      const temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
      i += 1;
    }
  }
  const temp = arr[i];
  arr[i] = arr[fim];
  arr[fim] = temp;
  return i;
};

console.log(quicksort([3, 5, 1, 2, 6, 72, 1, 10, 23, 65, 213, 235, 2320]));
