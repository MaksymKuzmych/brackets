module.exports = function check(str, bracketsConfig) {
  let stack = []
  let arr = str.split('')
  let openBrackets = bracketsConfig.map((el) => el[0])
  let closedBrackets = bracketsConfig.map((el) => el[1])
  let brackets = {}
  closedBrackets.forEach((el, idx) => (brackets[el] = openBrackets[idx]))
  console.log(brackets)
  for (let i = 0; i < arr.length; i++) {
    if (openBrackets.includes(arr[i]) && closedBrackets.includes(arr[i])) {
      if (stack.length === 0) {
        console.log(1)
        stack.push(arr[i])
        continue
      } else if (arr[i] !== stack[stack.length - 1] && closedBrackets.includes(stack[stack.length - 1])) {
        console.log(2)
        return false
      } else if (arr[i] === stack[stack.length - 1]) {
        console.log(3)
        stack.pop()
        continue
      }
    } else if (openBrackets.includes(arr[i])) {
      console.log(4)
      stack.push(arr[i])
      continue
    } else if (closedBrackets.includes(arr[i])) {
      console.log(5)
      if (brackets[arr[i]] !== stack[stack.length - 1]) {
        console.log(6)
        return false
      } else {
        console.log(7)
        stack.pop()
      }
    }
  }
  console.log('hey', stack)
  return stack.length === 0 ? true : false
}
