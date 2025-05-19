// Problem-4: Get the total count of number listed in the dictionary which is multiple of [1,2,3,4,5,6,7,8,9]
// (examples)
// input: [1,2,8,9,12,46,76,82,15,20,30]
// Output:
//   {1: 11, 2: 8, 3: 4, 4: 4, 5: 3, 6: 2, 7: 0, 8: 1, 9: 1}

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
