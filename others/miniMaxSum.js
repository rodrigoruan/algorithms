function sumArray(arr) {
  let sum = 0;
  for(let i = 0; i < arr.length; i += 1) {
      sum += arr[i];
  }
  return sum;
}

function findMin(arr) {
  let n = arr[0];
  for(let i = 1; i < arr.length; i += 1) {
      if(arr[i] < n) n = arr[i];
  }
  return n;
}

function findMax(arr) {
  let n = arr[0];
  for(let i = 1; i < arr.length; i += 1) {
      if(arr[i] > n) n = arr[i];
  }
  return n;
}

function miniMaxSum(arr) {
  const array = [];
  for(let i = 0; i < arr.length; i += 1) {
      let newArr = [...arr.slice(0, i), ...arr.slice(i+1,arr.length)];
      array.push(sumArray(newArr));
  }
  console.log(findMin(array) + ' ' + findMax(array));
}