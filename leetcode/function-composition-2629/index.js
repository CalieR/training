/**
 * @param {Function[]} functions
 * @return {Function}
 */

// execute right-most function with param of x
// store the result in a variable
// pass the variable to the next function
// and so on

var compose = function(functions) {
    return function(x){
        let result = x
        for (let i = functions.length - 1; i >=0; i--) {
            result = functions[i](result)        
        }
        return result
    } 
};


// const fn = compose([])
// console.log(fn(4)); //expected 9

console.log(compose([x => x + 1, x => 2 * x])(4)); //expected 9