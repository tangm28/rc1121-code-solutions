/* exported reverseWords */
function reverseWords(string) {
  var tempStart = 0;
  var newString = '';
  for (var i = 0; i < string.length + 1; i++) {
    if (string[i] === ' ' || i === string.length) {
      for (var j = i - 1; j > tempStart - 1; j--) {
        newString += string[j];
      }
      if (i < string.length) {
        newString += ' ';
      }
      tempStart = i + 1;
    }
  }
  return newString;
}
