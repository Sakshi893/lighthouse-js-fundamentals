function lastIndexOf(arr, value) {
  let match = false;
  let index = 0;
  for (let i = 0; i < arr.length; i++) {
    if (value === arr[i]) {
      match = true;
      index = i;
    }
  }
  if (match) {
    return index;
  } else {
    return -1
  }
}
console.log(lastIndexOf([0, 1, 4, 1, 2], 1))
console.log(lastIndexOf([0, 1, 4, 1, 2], 2))
console.log(lastIndexOf([0, 1, 4, 1, 2], 3))
console.log(lastIndexOf([5, 5, 5], 5))
console.log(lastIndexOf([], 3))



