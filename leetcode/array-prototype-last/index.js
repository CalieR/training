Array.prototype.last = function() {
   return this.length ? this[this.length - 1] : -1;
};


// const arr = [1, 2, 3];
// arr.last(); // 3

// console.log([1,2,3].last()); // 3
// console.log([].last()); // []
// console.log([1,2,3,4,5].last()); // 5


Array.prototype.groupBy = function(fn) {
    const group = {}
    for (let i= 0; i < this.length; i++) {
        const key = fn(this[i]);
        if (group[key]) {
            group[key].push(this[i]);
        } else {
            group[key] = [this[i]];
        }
    }
    return group;
};

console.log([1,2,3].groupBy(String)) // {"1":[1],"2":[2],"3":[3]}

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */
