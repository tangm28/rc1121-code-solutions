/* exported includes */
// create a function named includes that takes 2 parameters; array, value
// iterate through each item in the array and compare it to value
// if the item matches the value return else
// otherwise return false at the end of the iteration

function includes(array, value) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return true;
    }
  }
  return false;
}
