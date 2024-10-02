/**
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 */
var sortBy = function(arr, fn) {
    const sortedArr = arr.sort((a, b) => fn(a) - fn(b));
    return sortedArr;
};

console.log(sortBy([5,4,3,2,1], fn = (x) => x));
console.log(sortBy([{"x": 1}, {"x": 0}, {"x": -1}], fn = obj => obj.x))
console.log(sortBy([[3, 4], [5, 2], [10, 1]], fn = x => x[1]))

// Input: arr = [5, 4, 1, 2, 3], fn = (x) => x
// Output: [1, 2, 3, 4, 5]
// Explanation: fn simply returns the number passed to it so the array is sorted in ascending order.

// Input: arr = [{"x": 1}, {"x": 0}, {"x": -1}], fn = (d) => d.x
// Output: [{"x": -1}, {"x": 0}, {"x": 1}]
// Explanation: fn returns the value for the "x" key. So the array is sorted based on that value.
// Example 3:

// Input: arr = [[3, 4], [5, 2], [10, 1]], fn = (x) => x[1]
// Output: [[10, 1], [5, 2], [3, 4]]
// Explanation: arr is sorted in ascending order by number at index=1. 