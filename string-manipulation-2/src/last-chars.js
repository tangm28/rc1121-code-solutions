/* exported lastChars */
function lastChars(length, string) {
  var newString = '';
  var start = string.length - length;
  if (string.length < length) {
    start = 0;
  }
  for (var i = start; i < string.length; i++) {
    newString += string[i];
  }
  return newString;
}
