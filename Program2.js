function oddArrayGenerator(a) {
  let arr = [];
  let num = 1;
  while (arr.length < a) {
    if (num % 2 !== 0) {
      arr.push(num);
    }
    num++;
  }
  return arr;
}

console.log(oddArrayGenerator(10));
