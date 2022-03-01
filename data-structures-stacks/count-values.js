/* exported countValues */

function countValues(stack) {
  let count = 0;
  let item = stack.pop();
  while (item !== undefined) {
    count++;
    item = stack.pop();
  }
  return count;
}
