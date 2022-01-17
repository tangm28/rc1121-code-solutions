/* exported zip */
// create a function called zip that takes 2 parameters; first and second
// create a var length to keep track of the shorter array
// create a var zippedArray to store new array
// default length to length of second array, if first is shorter change the length to that
// iterate through and push an array of first and second into zippedArray
// return zippedArray
function zip(first, second) {
  var length = second.length;
  var zippedArray = [];
  if (first < second) {
    length = first.length;
  }
  for (var i = 0; i < length; i++) {
    zippedArray.push([first[i], second[i]]);
  }
  return zippedArray;
}
