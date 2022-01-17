/* exported last */
// define a function named 'last' which takes a single array parameter
// check if the array is empty
// if the array is empty return undefined
// find the last index of array which is the array's length subtracted by 1
// return array at last index
function last(array) {
  if (array.length > 0) {
    return array[array.length - 1];
  }
  return undefined;
}
