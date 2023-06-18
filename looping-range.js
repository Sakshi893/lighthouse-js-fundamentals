function range(start, end, step) {
  const loopingArray = [];
  if (start === undefined || end === undefined || step === undefined || start > end || step <= 0) {
    return loopingArray;
  } else for (let i = start; i <= end; i += step) {
    loopingArray.push(i);
  }

  return loopingArray;
}
console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));