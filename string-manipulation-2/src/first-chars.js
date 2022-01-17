/* exported firstChars */
function firstChars(length, string) {
  var iteration = length;
  var newString = '';
  if (string.length < length) {
    iteration = string.length;
  }
  for (var i = 0; i < iteration; i++) {
    newString += string[i];
  }
  return newString;
}
