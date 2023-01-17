const sumAll = function (left, right) {
  if (typeof left == typeof right && left > 0 && right > 0) {
    if (left > right) {
      return helperFunction(right, left);
    }
    return helperFunction(left, right);
  } else {
    return "ERROR";
  }
};

const helperFunction = function (left, right) {
  let sum = 0;
  for (let i = left; i <= right; i++) {
    sum += i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
