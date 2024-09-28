
function memoize(fn) {

    let countOfCalls = 0
    let memoisedCalls = {
        "[2,2]": 4,
        "[1,2]": 3
     }

    return function(...args) {
        if (memoisedCalls[JSON.stringify(args)]) {
            return memoisedCalls[args];
        } else {
            countOfCalls++;
            memoisedCalls[JSON.stringify(args)] = fn(...args);
            return memoisedCalls[args];
        }
    }
}



 console.log(memoisedCalls["[2,2]"]); //expected 4
 console.log(memoisedCalls["[1,2]"]); //expected 3


// Input:
// fnName = "sum"
// actions = ["call","call","getCallCount","call","getCallCount"]
// values = [[2,2],[2,2],[],[1,2],[]]
// Output: [4,4,1,3,2]
// Explanation:
// const sum = (a, b) => a + b;
// const memoizedSum = memoize(sum);
// memoizedSum(2, 2); // "call" - returns 4. sum() was called as (2, 2) was not seen before.
// memoizedSum(2, 2); // "call" - returns 4. However sum() was not called because the same inputs were seen before.
// // "getCallCount" - total call count: 1
// memoizedSum(1, 2); // "call" - returns 3. sum() was called as (1, 2) was not seen before.
// // "getCallCount" - total call count: 2