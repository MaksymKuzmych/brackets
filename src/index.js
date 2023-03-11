module.exports = function check(str, bracketsConfig) {
  const stack = [];
  const arr = str.split('');
  const openBrackets = bracketsConfig.map((el) => el[0]);
  const closedBrackets = bracketsConfig.map((el) => el[1]);
  const brackets = {};

  closedBrackets.forEach((el, idx) => (brackets[el] = openBrackets[idx]));

  for (let i = 0; i < arr.length; i++) {
    if (openBrackets.includes(arr[i]) && closedBrackets.includes(arr[i])) {
      if (stack.length === 0) {
        stack.push(arr[i]);
        continue;
      } else if (arr[i] !== stack[stack.length - 1] && closedBrackets.includes(stack[stack.length - 1])) {
        return false;
      } else if (arr[i] === stack[stack.length - 1]) {
        stack.pop();
        continue;
      }
    } else if (openBrackets.includes(arr[i])) {
      stack.push(arr[i]);
      continue;
    } else if (closedBrackets.includes(arr[i])) {
      if (brackets[arr[i]] !== stack[stack.length - 1]) {
        return false;
      } else {
        stack.pop();
      }
    }
  }

  return stack.length === 0;
};
