/* exported union */
function union(first, second) {
  var length = first.length + second.length;
  var newArray = [];
  var tempArray = [];
  for (var i = 0; i < length; i++) {
    if (i >= first.length) {
      if (newArray.includes(second[i - first.length]) === false) {
        newArray.push(second[i - first.length]);
      }
      tempArray.push(second[i - first.length]);
    } else {
      if (newArray.includes(first[i]) === false) {
        newArray.push(first[i]);
      }
    }
  }
  return newArray;
}
