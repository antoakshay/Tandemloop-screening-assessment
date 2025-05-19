function getTotalCount(input) {
  let result = {};
  // !! Creating the object for given array's length entries
  for (let i = 1; i <= input.length; i++) {
    result[i] = 0;
  }
//   console.log(result);

  // !! Iterating over the input array to see the
  // !! divisible possibilities.
  input.forEach((num) => {
    for (let i = 1; i <= input.length; i++) {
      if (num % i === 0) {
        result[i]++;
      }
    }
  });
  return result;
}

console.log(getTotalCount([1, 2, 8, 9, 12, 46, 76, 82, 15, 20, 30, 45]));
// console.log(result[1]);
