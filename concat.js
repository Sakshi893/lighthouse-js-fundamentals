function concat(array1, array2) {
  let array = array1;
  for (let i = 0; i < array2.length; i++) {
    array.push(array2[i]);
  }
  return array;
}
console.log(concat([1, 2, 3], [4, 5, 6]));
console.log(concat([0, 3, 1], [9, 7, 2]));
console.log(concat([], [9, 7, 2]))
console.log(concat([5, 10], []))

