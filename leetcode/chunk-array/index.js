/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
    let chunkedArr = [];
    for (let i = 0; i < arr.length; i += size) {
        chunkedArr.push(arr.slice(i, i + size))
    }
    return chunkedArr;
};

console.log(chunk([1,2,3,4,5,6,7,8,9,10], 3)); // expected [[1,2,3],[4,5,6],[7,8,9],[10]]
console.log(chunk([1,2,3,4,5], 1)); // expected [[1],[2],[3],[4],[5]]

// i + size ... start at i and slice the next 3 elements.
// length of slice / chunk must always be index + chunk size

