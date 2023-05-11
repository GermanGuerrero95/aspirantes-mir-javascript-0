function suma(num) {
  let plus = 0;
  for (let i = 0; i <= num; i++) {
    plus += i;
  }
  return plus;
}
console.log(suma(4)); // 1 + 2 + 3 + 4 = 10
console.log(suma(10)); // 55
console.log(suma(15)); // 120
