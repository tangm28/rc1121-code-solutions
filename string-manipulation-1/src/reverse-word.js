/* exported reverseWord */
function reverseWord(word) {
  var reverse = '';
  for (var i = word.length - 1; i > -1; i--) {
    reverse += word[i];
  }
  return reverse;
}
