/* exported isAnagram */
function isAnagram(firstString, secondString) {
  var newFirst = firstString.split(' ').join('');
  var newSecond = secondString.split(' ').join('');
  var counter = 0;
  // var dup = 0;
  if (newFirst.length !== newSecond.length) {
    return false;
  } else {
    for (var i = 0; i < newFirst.length; i++) {
      var found = false;
      for (var j = 0; j < newSecond.length; j++) {
        if (newSecond[j] === newFirst[i]) {
          if (found !== true) {
            counter++;
          } else {
            // dup++;
          }
          found = true;
        }
      }
    }
  }
  return (counter === newFirst.length);
}
