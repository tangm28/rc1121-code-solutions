/* exported difference */
function difference(first, second) {
  var length = first.length + second.length;
  var newArray = [];
  var tempArray = [];
  for (var i = 0; i < length; i++) {
    if (i >= first.length) {
      tempArray.push(second[i - first.length]);
    } else {
      tempArray.push(first[i]);
    }
  }
  for (var j = 0; j < tempArray.length; j++) {
    var counter = 0;
    var tempHolder = tempArray[j];
    for (var k = 0; k < tempArray.length; k++) {
      if (tempArray[k] === tempHolder) {
        counter++;
      }
    }
    if (counter < 2) {
      newArray.push(tempHolder);
    }
  }
  return newArray;
}
