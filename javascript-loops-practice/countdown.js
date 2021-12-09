/* exported countdown */
function countdown(number) {
  var descendingNum = [];
  for (var i = 0; i < number + 1; i++) {
    descendingNum[i] = number - i;
  }
  return descendingNum;
}
