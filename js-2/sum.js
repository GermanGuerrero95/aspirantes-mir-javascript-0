function sum(arr) {
  let plus = 0;
  arr.forEach((num) => {
    plus += num;
  });
  return plus;
}

console.log(sum([1, 2, 3])); // 6
console.log(sum([10, 8, 12, 5])); // 35
console.log(sum([])); // 0
console.log(sum([1, 9])); //9
