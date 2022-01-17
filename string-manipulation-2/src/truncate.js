/* exported truncate */
// create a function named truncate that takes 2 parameters; length and string
// create a new string
// iterate through each char in string until number of iteration is the same as length
// concatenate the chars into the new string
// return new string concatenated with '...'

function truncate(length, string) {
  var newString = '';
  var iteration = length;
  if (string.length < length) {
    iteration = string.length;
  }
  if (string.length !== 0) {
    for (var i = 0; i < iteration; i++) {
      newString += string[i];
    }
  }
  return newString + '...';
}
