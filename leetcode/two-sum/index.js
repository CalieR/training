const twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        console.log("i is " + i);
        for (let j = i + 1; j < nums.length; j++) {
            console.log("i is " + i + " and j is " + j);
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
    return [];
};

// initialise j as i + 1 so it's always the element after the one at position i
// the inner loop repeats so if j = 1 then it will get reset to 1 every time the outer loop starts again.

console.log(twoSum([2, 7, 11, 15], 9)); //expected [0,1]
console.log(twoSum([2, 7, 11, 15].reverse(), 9)); //expected [2,3]
console.log(twoSum([3, 2, 4], 6)); //expected [1,2]
console.log(twoSum([3, 3], 6)); //expected [0,1]
console.log(twoSum([1, 3], 6)); //expected []

