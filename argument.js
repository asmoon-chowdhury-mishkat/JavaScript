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
console.log(big);
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

let addition = sumAllnumber(12, 23, 34, 45, 56, 67, 78, 89, 90);
function sumAllnumber() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}
console.log('sum of addition ', addition);