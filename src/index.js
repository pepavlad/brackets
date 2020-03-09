module.exports = function check(str, bracketsConfig) {
  let types = new Map();
  let pairs = new Map();
  let arrOfBrackets = [], open;
  for (let bracket of bracketsConfig) {
    if (bracket[0] == bracket[1]) continue;
    pairs.set(bracket[1], bracket[0]);
    types.set(bracket[0], "open");
    types.set(bracket[1], "close");
  }
  for (let i = 0; i < str.length; i++) {
    if (types.get(str[i]) == "open") {
      arrOfBrackets.push(str[i]);
    } else if (types.get(str[i]) == "close") {
      open = pairs.get(str[i]);
    if (arrOfBrackets[arrOfBrackets.length-1] != open) return false;
    arrOfBrackets.pop();
    } else {
      index = arrOfBrackets.indexOf(str[i]);
      if (index == -1) {
      arrOfBrackets.push(str[i]);
    } else  {
      if (arrOfBrackets[arrOfBrackets.length-1] != str[i]) return false;
      arrOfBrackets.pop();
      }
    }
  }
  if (arrOfBrackets.length != 0) return false;
  return true;
}

