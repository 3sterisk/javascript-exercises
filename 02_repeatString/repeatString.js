const repeatString = function (repeatingString, timesToRepeat) {
  let ans = "";
  if (timesToRepeat < 0) {
    return "ERROR";
  }
  for (let i = 0; i < timesToRepeat; i++) {
    ans += repeatingString;
  }
  return ans;
};

// Do not edit below this line
module.exports = repeatString;
