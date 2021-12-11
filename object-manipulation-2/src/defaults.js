/* exported defaults */
// I complicated this unnecessarily. Thought order of keys matter
function defaults(target, source) {
  var order = [];
  var noIn = [];
  if (Object.keys(source).length > 0) {
    for (var key in source) {
      if (Object.keys(target).includes(key) === false) {
        if (typeof source[key] === 'number') {
          order[source[key] - 1] = [key, source[key]];
        } else {
          noIn.push([key, source[key]]);
        }
      }
    }
    if (Object.keys(target).length > 0) {
      for (var key2 in target) {
        if (typeof target[key2] === 'number') {
          order[target[key2] - 1] = [key2, target[key2]];
        } else {
          order[order.length] = [key2, target[key2]];
        }
      }
    }

    var tempArray = order.concat(noIn);
    for (var i = 0; i < tempArray.length; i++) {
      target[tempArray[i][0]] = tempArray[i][1];
    }
  }
}
