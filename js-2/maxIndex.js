function maxIndex(arr) {
  let max = arr[0];
  let position = 0;
  if (arr.length !== 0) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > max) {
        max = arr[i];
        position = i;
      }
    }
  } else {
    position = -1;
  }
  return position;
}

console.log(maxIndex([1, 3, 2])); // 1
console.log(maxIndex([10, 9, 8, 7, 6, 5, 4])); // 0
console.log(maxIndex([])); // -1
console.log(maxIndex([9, 30, 45])); //2
