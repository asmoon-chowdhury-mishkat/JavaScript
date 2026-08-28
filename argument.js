let big = bigNum(23, 45, 76, 89, 145, 434, 789);
function bigNum() {
  let max = -Infinity;
  for (let i = 0; i < arguments.length; i++) {
    if(arguments[i] > max) {
      max = arguments[i];
    }
  }
  return max;
}
// console.log(big);
let number = bigInt(345, 123, 1235, 34, 90, 21);
function bigInt() {
  let max = -Infinity;
  for (let i = 0; i < arguments.length; i++){
    if (arguments[i] > max) {
      max = arguments[i]
    }
  }
  return max
}
console.log(number);
let minValue = smallNum(45, 90, 67, 98, 23, 10, 34);
function smallNum() {
  let min = Infinity;
  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i] < min) {
      min = arguments[i]
    }
  }
  return min
}
console.log(minValue);