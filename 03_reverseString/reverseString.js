const reverseString = function (toReverse) {
  const str = toReverse.split("");
  let reversedString = "";
  for (let i = toReverse.length - 1; i >= 0; i--) {
    reversedString += str[i];
  }
  return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
