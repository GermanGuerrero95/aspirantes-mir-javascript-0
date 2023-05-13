function max(arr) {
  let nail = arr[0];
  arr.forEach((num) => {
    if (num > nail) {
      nail = num;
    }
  });
  return nail;
}

console.log(max([1, 3, 2])); // 3
console.log(max([10, 9, 8, 7, 6, 5, 4])); // 10
console.log(max([])); // undefined
console.log(max([80, 90, 52])); // 90
console.log(max([0, 0, 1])); //1
