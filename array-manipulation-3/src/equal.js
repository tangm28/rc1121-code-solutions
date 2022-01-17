/* exported equal */
// create a function named equal that takes 2 parameters; first and second
// check if the array length is equal to each other otherwise return false
// iterate through each array and compare each item of the array
// if the item in the array at the same index does not equal return false
// if pass array has been iterated through until the end return true
function equal(first, second) {
  if (first.length === second.length) {
    for (var i = 0; i < first.length; i++) {
      if (first[i] !== second[i]) {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
}
