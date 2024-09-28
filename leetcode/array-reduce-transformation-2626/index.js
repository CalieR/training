const reduce = function (nums, fn, init) {
  let val = init;
  for (const num of nums) {
    val = fn(val, nums);
  }
  return val;
};
// const reduce = function(nums, fn, init) {
//     let val = init;
//     nums.forEach(num => {
//         val = fn(val, num)
//     })
//     return val;
// };
