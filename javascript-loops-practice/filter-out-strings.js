/* exported filterOutStrings */
function filterOutStrings(values) {
  var onlyNum = [];
  for (var i = 0; i < values.length; i++) {
    if (Number.isInteger(values[i])) {
      onlyNum.push(values[i]);
    }
  }
  return onlyNum;
}
