/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let leftPointer = 0;
  let rightPointer = height.length - 1;
  let currentArea;
  let maxArea = 0;

  while (leftPointer < rightPointer) {
    currentArea =
      Math.min(height[leftPointer], height[rightPointer]) *
      (rightPointer - leftPointer);
    maxArea = Math.max(currentArea, maxArea);
    height[leftPointer] < height[rightPointer] ? leftPointer++ : rightPointer--;
  }
  return maxArea;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])); // 49
console.log(maxArea([1, 1, 1, 1, 1, 1, 1, 1, 1]));
console.log(maxArea([1, 2]));
console.log(maxArea([2, 1, 1, 1, 1, 1, 1, 1, 2]));
console.log(maxArea([4, 1, 2, 1, 3, 1, 5, 1, 6]));
console.log(maxArea([1, 2, 1, 2, 1, 2, 1, 2, 1]));
