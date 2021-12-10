/* exported dropRight */
function dropRight(array, count) {
  var tempArray = [];
  if (array.length > 0) {
    for (var i = 0; i < array.length - count; i++) {
      tempArray.push(array[i]);
    }
  }
  return tempArray;
}
