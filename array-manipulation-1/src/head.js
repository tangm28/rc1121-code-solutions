/* exported head */
// define a function named 'head' which takes a single array parameter
// check if the array is empty
// if the array is empty return undefined
// return the array at the index of 0
function head(array) {
  if (array.length > 0) {
    return array[0];
  }
  return undefined;
}
