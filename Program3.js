function oddArrayGeneratorV2(a) {
  let arr = [];
  let num = 1;
  // !! if a is even, then decrement a by 1
  if (a % 2 === 0) {
    a = a - 1;
  }
  while (arr.length < a) {
    if (num % 2 !== 0) {
      arr.push(num);
    }
    num++;
  }
  return arr;
}

console.log(oddArrayGeneratorV2(2));
