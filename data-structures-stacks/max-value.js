/* exported maxValue */

function maxValue(stack) {
  let max = '';
  if (stack.peek() === undefined && max === '') {
    return -Infinity;
  }
  let item = stack.pop();
  while (item !== undefined) {
    if (max === '') {
      max = item;
    } else if (item > max) {
      max = item;
    }
    item = stack.pop();
  }
  return max;
}
