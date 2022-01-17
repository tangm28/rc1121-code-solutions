/* exported isPalindromic */
// create a function named isPalindromic that takes a parameter string
// iterate half of the string. to take care of off numbers we will be flooring the number
// compare each char with the end. As the front index moves up the back index moves down
// if string is not the same check if the string is being compared to an empty space
// if space continue loop
// exit loop when the comparison is false
// if loop exit successfully return true
function isPalindromic(string) {
  for (var i = 0; i < Math.floor(string.length / 2); i++) {
    if (string[i] !== string[string.length - 1 - i]) {
      if (string[i] === ' ' || string[string.length - 1 - i] === ' ') {
        continue;
      } else {
        return false;
      }
    }
  }
  return true;
}
