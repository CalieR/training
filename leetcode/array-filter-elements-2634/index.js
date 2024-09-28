// const filter = function(arr, fn) {
//     let filteredArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (fn(arr[i], i)) {
//             filteredArr.push(arr[i])
//         }
//     }
//     return filteredArr;
// }
// const filter = function(arr, fn) {
//     let filteredArr = [];
//     arr.forEach(function(element, index) {
//         if (fn(element, index)) {
//             filteredArr.push(element);
//         }
//     });
//     return filteredArr;
// }

// saw this one on leetcode, unecessarily complex imo
// const filter = function(arr, fn) {
//     let filteredArr = [];
//     for (const [index, element] of arr.entries()) {
//         fn(element, index) && filteredArr.push(element);
//     }
//     return filteredArr;
// }

// this might be my favourite because it uses a built-in looping method and logical expression instead of an if statement
const filter = function(arr, fn) {
    let filteredArr = [];
    arr.forEach(function(element, index) {
        fn(element, index) && filteredArr.push(element);
    });
    return filteredArr;
}

console.log(filter([0,10,20,30], function greaterThan10(n) { return n > 10; })); //expected [20,30]
console.log(filter([1,2,3], function firstIndex(n, i) { return i === 0; })); //expected [1]
console.log(filter([-2,-1,0,1,2], function plusOne(n) { return n + 1 })); //expected [-2,0,1,2]