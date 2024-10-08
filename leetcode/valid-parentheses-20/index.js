const isValid = function(s) {
    if (s.length % 2 !== 0) {
        return false;
    }

    const stack = [];
    for (const char of s) {
        if (char === "(" || char === "[" || char === "{") {
            stack.push(char);
        } 
        if (char === ')') {
            if (stack[stack.length - 1] === '(') {
                stack.pop();
            } else {
                return false;
            }
        }
        if (char === ']') {
            if (stack[stack.length - 1] === '[') {
                stack.pop();
            } else {
                return false;
            }
        }
        if (char === '}') {
            if (stack[stack.length - 1] === '{') {
                stack.pop();
            } else {
                return false;
            }
        }
    }
    return stack.length === 0;
}

console.log(isValid("()")); // true
console.log(isValid("()[]{}")); // true
console.log(isValid("(]")); //false
console.log(isValid("([])")); // true