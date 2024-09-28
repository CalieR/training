// You are given an integer array nums consisting of n elements, and an integer k.

// Find a contiguous subarray whose length is equal to k that has the maximum average value and return this value. Any answer with a calculation error less than 10-5 will be accepted.

const findMaxAverage = function (nums, k) {
  let maxAverage = 0;

  for (let i = 0; i < nums.length - k + 1; i++) {
    // i < nums.length - k + 1 so you don't go past the end of the array)
    let sum = 0;
    for (let j = i; j < i + k; j++) {
      sum += nums[j];
      console.log('sum: ', sum, nums[j]);
    }
    let average = sum / k;
    console.log('average: ', average, "maxAverage: ", maxAverage);
    if (average > maxAverage) {
      maxAverage = average;
      console.log('maxAverage: ', maxAverage);
    }
  }
  return maxAverage;
};

// nums.length = 6
// nums indices are 0 - 5 (nums.length -1)
// k is 2
// 6 - 2 is 4 so add 1 to reinstate the last element in the i loop

// j = i (first element in the array)
// j must be less that i + k (current index + contiguous subarray length) so you don't run off the end of the array

console.log(findMaxAverage([2, 12, -5, -6, 50, 3], 2)); //expected 12.5
