const isValid = function (s) {
  if (s.length % 2 !== 0) {
    return false;
  }

  const bracketMap = {
    '(': ')',
    '[': ']',
    '{': '}',
  };

  const stack = [];
  for (const char of s) {
    if (bracketMap[char]) {
      stack.push(char);
    } else {
      if (stack.length === 0) {
        return false;
      } else {
        if (bracketMap[stack[stack.length - 1]] !== char) {
          return false;
        }
        stack.pop();
      }
    }
  }
  return stack.length === 0;
};

console.log(isValid('()')); // true
console.log(isValid('()[]{}')); // true
console.log(isValid('(]')); //false
console.log(isValid('([])')); // true
