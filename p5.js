// Given an array of numbers, return an object where each key from 1 to 9 maps
//  to the number of array elements divisible by that key.

function getTotalCount(input) {
  let result = {};

  for (let i = 1; i <= input.length; i++) {
    result[i] = 0;
  }

  for (let i = 0; i < input.length; i++) {
    let num = input[i];
    console.log(num);
    for (let j = 1; j <= input.length; j++) {
      if (num % j === 0) {
        result[j]++;
      }
    }
  }
  console.log(result);
  return result;
}

console.log(getTotalCount([2, 4, 6]));
