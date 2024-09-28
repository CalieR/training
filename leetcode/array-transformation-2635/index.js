const map = function(arr, fn) {
    let resultArray = [];
    for (let i = 0; i < arr.length; i++) {
        //console.log("args:", fn(arguments.callee.caller.arguments[0], i));
        resultArray.push(fn(arr[i], i))
    }
    return resultArray;
};

// learning: not all functions will use the index but passing it in doesn't affect the running of those functions - any arbirtray number of arguments can be passed in

console.log(map([1, 2, 3], function plusone(n) { return n + 1; })); //expected [2,3,4]
console.log(map([1, 2, 3], function plusI(n, i) { return n + i; })); //expected [1,3,5]
console.log(map([1, 2, 3], function constant() { return 42; })); //expected [42,42,42]